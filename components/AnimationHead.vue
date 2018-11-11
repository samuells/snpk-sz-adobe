<template>
  <div
    v-view="handleHeadView"
    :class="headClasses"
    class="animation--head">
    <WhiteTriangle class="white-triangle"/>
    <div class="lottie--head">
      <Lottie
        :options="headOptions"
        @animCreated="handleHead"/>
    </div>
    <div class="lottie--brain-text">
      <Lottie
        :options="brainTextOptions"
        @animCreated="handleBrainText"/>
    </div>
    <div class="lottie--view-text">
      <Lottie
        :options="viewTextOptions"
        @animCreated="handleViewText"/>
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
  data() {
    return {
      defaultOptions: {
        loop: false,
        autoplay: false
      },
      headClasses: "",
      framesEnteredNumber: 0
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
  methods: {
    handleHead: function(anim) {
      this.animHead = anim
      this.animHead.addEventListener("enterFrame", this.startTextAnimations)
    },
    handleHeadView(e) {
      if (e.percentTop < 0.8) {
        this.headClasses = "visible"
        this.animHead.setSpeed(2)
        this.animHead.play()
      }
    },
    handleBrainText: function(anim) {
      this.animBrainText = anim
    },
    handleViewText: function(anim) {
      this.animViewText = anim
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
