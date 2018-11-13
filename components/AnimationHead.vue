<template>
  <div
    :id="relativeElement"
    class="wrapper--affix-head">
    <no-ssr>
      <affix
        :relative-element-selector="`#${relativeElement}`"
        :offset="affixOffset"
        style="width: 100%">
        <div class="content--affix-head">
          <div
            v-view="handleHeadView"
            :class="headClasses"
            class="animation--head">
            <WhiteTriangle
              :class="triangleClasses"
              class="white-triangle"/>
            <div class="lottie--head">
              <Lottie
                :options="headOptions"
                @animCreated="handleHead"/>
            </div>
            <div
              v-view="handleTextView"
              :class="textClasses"
              class="lottie--brain-text">
              <Lottie
                :options="brainTextOptions"
                @animCreated="handleBrainText"/>
            </div>
            <div
              :class="textClasses"
              class="lottie--view-text">
              <Lottie
                :options="viewTextOptions"
                @animCreated="handleViewText"/>
            </div>
          </div>
        </div>
      </affix>
    </no-ssr>
  </div>
</template>

<script>
import Lottie from "@/components/lottie"
import headAnimation from "@/assets/animations/head.json"
import brainTextAnimation from "@/assets/animations/brain-text.json"
import viewTextAnimation from "@/assets/animations/view-text.json"
import WhiteTriangle from "@/assets/icons/triangle-white.svg"

export default {
  components: {
    Lottie,
    WhiteTriangle,
    brainTextAnimation,
    viewTextAnimation
  },
  props: {
    windowHeight: {
      type: Number,
      required: true
    },
    windowScrolled: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      defaultOptions: {
        loop: false,
        autoplay: false
      },
      relativeElement: "head-animation",
      framesEnteredNumber: 0,
      affixOffset: {
        top: 0,
        bottom: 0
      },
      triangleClasses: "",
      headClasses: "",
      head: {
        duration: 0,
        startHeight: 0,
        endHeight: 0,
        isAnimating: false
      },
      textClasses: "",
      text: {
        duration: 0,
        startHeight: 0,
        endHeight: 0,
        isAnimating: false,
        headAllowed: false,
        isAnimationReady: false
      }
    }
  },
  computed: {
    headOptions() {
      return {
        animationData: headAnimation,
        ...this.defaultOptions
      }
    },
    brainTextOptions() {
      return {
        animationData: brainTextAnimation,
        loop: true,
        autoplay: false
      }
    },
    viewTextOptions() {
      return {
        animationData: viewTextAnimation,
        loop: true,
        autoplay: false
      }
    }
  },
  watch: {
    windowScrolled: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.animateHeadOnScroll(newValue)
        this.animateTextOnScroll(newValue)
      }
    }
  },
  methods: {
    handleHead: function(anim) {
      this.animHead = anim
    },
    handleHeadView(e) {
      if (!this.head.isAnimating && e.type === "enter") {
        this.headClasses = "visible"
        this.head.startHeight = this.windowScrolled + this.windowHeight * 0.4
        this.head.endHeight = this.head.startHeight + this.windowHeight * 1.4
        this.head.duration = this.animHead.getDuration() * 1000 - 1
        this.head.isAnimating = true
      }
    },
    animateHeadOnScroll(scrolled) {
      if (this.head.isAnimating) {
        const timePercentage =
          (scrolled - this.head.startHeight) /
          (this.head.endHeight - this.head.startHeight)
        const time = this.head.duration * timePercentage
        if (time > this.head.duration * 0.5) {
          this.triangleClasses = "visible"
        } else {
          this.triangleClasses = ""
        }
        if (time > this.head.duration * 0.6) {
          this.text.headAllowed = true
        } else {
          this.text.headAllowed = false
        }
        if (time < this.head.duration) {
          this.animHead.goToAndStop(time)
        } else {
          this.animHead.goToAndStop(this.head.duration)
        }
      }
    },
    handleBrainText: function(anim) {
      this.animBrainText = anim
    },
    handleViewText: function(anim) {
      this.animViewText = anim
    },
    handleTextView(e) {
      if (!this.text.isAnimating && e.type === "enter") {
        this.text.isAnimationReady = true
      }
    },
    animateTextOnScroll(scrolled) {
      if (
        !this.text.isAnimating &&
        this.text.headAllowed &&
        this.text.isAnimationReady
      ) {
        this.textClasses = "visible"
        this.text.startHeight = scrolled
        this.text.endHeight = this.text.startHeight + this.windowHeight
        this.text.duration = this.animBrainText.getDuration() * 1000 - 1
        this.text.isAnimating = true
      }

      if (this.text.headAllowed && this.text.isAnimating) {
        const timePercentage =
          (scrolled - this.text.startHeight) /
          (this.text.endHeight - this.text.startHeight)
        const time = this.text.duration * timePercentage
        console.log(`${time} + ${this.text.duration}`)
        if (time < this.text.duration) {
          this.animViewText.goToAndStop(time)
          this.animBrainText.goToAndStop(time)
        } else {
          this.animViewText.goToAndStop(this.text.duration)
          this.animBrainText.goToAndStop(this.text.duration)
        }
      }
    },
    startTextAnimations() {
      if (this.framesEnteredNumber === 200) {
        this.animBrainText.setSpeed(2)
        this.animBrainText.play()
        this.animViewText.setSpeed(2)
        this.animViewText.play()
      }
      this.framesEnteredNumber += 1
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/animation-head";
</style>
