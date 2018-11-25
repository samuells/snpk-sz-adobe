<template>
  <div
    :id="relativeElement"
    :style="affixWrapperStyleObject"
    class="wrapper--affix-head">
    <div ref="affixContent">
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
          <div class="content--affix-text row--outer">
            <div class="column--text">
              <h2>Der erste Eindruck zählt</h2>
              <p>Was passiert aber, wenn ein Wort im falschen Kleid steckt? Es irritiert und verwirrt uns. Wenn wir beispielsweise das Wort „Liebe“ lesen, fühlen wir uns mit einer eleganten, freundlichen Schrift wohl. So kennen wir das. Schreiben wir „Liebe“ in der Schriftart „Fraktur“, die an die NS-Propaganda erinnert, löst dies völlig andere Emotionen in uns aus.</p>
              <div class="quote-wrapper">
                <p
                  v-view="handleQuoteView"
                  :class="quoteClasses"
                  class="quote">
                  „Wir alle konsumieren Typografie. Schriften spielen eine große Rolle in unserem Alltag. Sie helfen uns zu navigieren, Entscheidungen zu treffen und einzukaufen. Sie geben uns Sicherheit und tricksen uns manchmal aus.“
                  <strong>Sarah Hyndman<br><span>Grafikdesignerin</span></strong>
                </p>
                <p>Mit dieser Emotionalität wissen auch Marken umzugehen und überlegen sich ganz genau, in welchem Kleid sie sich präsentieren – denn schließlich soll uns auch über die Schrift vermittelt werden, für was die Marke steht. Eine Anwaltskanzlei wählt wohl eher eine schlichte, schnörkellose Schrift als eine verspielte. Und eine Kosmetikmarke würde sich mit einer technischen Schrift keinen Gefallen tun.</p>
              </div>
            </div>
          </div>
        </affix>
      </no-ssr>
    </div>
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
    windowWidth: {
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
      affixContentHeight: 0,
      relativeElement: "head-animation",
      framesEnteredNumber: 0,
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
      },
      quoteClasses: ""
    }
  },
  computed: {
    affixWrapperStyleObject() {
      let height = ""
      let heightFactor = 2.24

      console.log(this.affixContentHeight)
      if (this.affixContentHeight - this.windowHeight > 0) {
        // if is the content of affix bigger than window - add more scrollig distance
        heightFactor +=
          (this.affixContentHeight - this.windowHeight) / this.windowHeight
      }

      if (this.windowWidth < 740) {
        height = `${this.windowHeight * heightFactor}px`
      }

      return {
        height
      }
    },
    affixOffset() {
      let top = 0
      // if (this.windowWidth < 740) {
      //   top = 50
      // }
      return {
        top,
        bottom: 0
      }
    },
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
    },
    windowWidth: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        // this.animateHeadOnScroll(newValue)
        // this.animateTextOnScroll(newValue)
      }
    }
  },
  mounted() {
    if (process.browser) {
      window.onNuxtReady(() => {
        this.affixContentHeight = this.$refs.affixContent.offsetHeight
      })
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
        if (time > this.head.duration * 0.15) {
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
        // console.log(`${time} + ${this.text.duration}`)
        if (time < this.text.duration) {
          this.animViewText.goToAndStop(time)
          this.animBrainText.goToAndStop(time)
        } else {
          this.animViewText.goToAndStop(this.text.duration)
          this.animBrainText.goToAndStop(this.text.duration)
        }
      }
    },
    handleQuoteView(e) {
      if (e.percentTop < 0.8) {
        this.quoteClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/animation-head";
</style>
