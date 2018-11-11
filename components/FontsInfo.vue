<template>
  <div class="row--outer">
    <div class="column--text fonts-info">
      <div
        v-view="handleLottie01"
        :class="classes01"
        class="lottie--wrapper">
        <h3>SCHRIFTTYPEN</h3>
        <Lottie
          :options="info01Options"
          @animCreated="handleAnimation01"/>
      </div>
      <div
        v-view="handleLottie02"
        :class="classes02"
        class="lottie--wrapper">
        <h3>SCHRIFTSCHNITTE</h3>
        <Lottie
          :options="info02Options"
          @animCreated="handleAnimation02"/>
      </div>
      <div
        v-view="handleLottie03"
        :class="classes03"
        class="lottie--wrapper">
        <h3>SCHRIFTANATOMIE</h3>
        <Lottie
          :options="info03Options"
          class="lottie--info3"
          @animCreated="handleAnimation03"/>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "@/components/lottie"
import info01Animation from "@/assets/animations/info-01.json"
import info02Animation from "@/assets/animations/info-02.json"
import info03Animation from "@/assets/animations/info-03.json"

export default {
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {
        loop: false,
        autoplay: false
      },
      isHeroImageLoaded: false,
      classes01: "",
      classes02: "",
      classes03: ""
    }
  },
  computed: {
    info01Options() {
      return {
        animationData: info01Animation,
        ...this.defaultOptions
      }
    },
    info02Options() {
      return {
        animationData: info02Animation,
        ...this.defaultOptions
      }
    },
    info03Options() {
      return {
        animationData: info03Animation,
        ...this.defaultOptions
      }
    }
  },
  created() {
    this.$nuxt.$on("heroImageLoaded", this.loadedHeroImage)
  },
  methods: {
    loadedHeroImage() {
      this.isHeroImageLoaded = true
    },
    handleAnimation01: function(anim) {
      this.anim01 = anim
    },
    handleAnimation02: function(anim) {
      this.anim02 = anim
    },
    handleAnimation03: function(anim) {
      this.anim03 = anim
    },
    handleLottie01(e) {
      if (this.isHeroImageLoaded && e.percentTop < 0.8) {
        this.classes01 = "visible"
        this.anim01.setSpeed(2)
        this.anim01.play()
      }
    },
    handleLottie02(e) {
      if (this.isHeroImageLoaded && e.percentTop < 0.75) {
        this.classes02 = "visible"
        this.anim02.play()
      }
    },
    handleLottie03(e) {
      if (this.isHeroImageLoaded && e.percentTop < 0.8) {
        this.classes03 = "visible"
        this.anim03.setSpeed(3)
        this.anim03.play()
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/fonts-info";
</style>
