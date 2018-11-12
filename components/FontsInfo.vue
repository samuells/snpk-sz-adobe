<template>
  <div class="row--outer">
    <div class="column--text fonts-info">
      <div
        v-view="handleFontTypeView"
        :class="fontTypeClasses"
        class="lottie--wrapper">
        <h3>SCHRIFTTYPEN</h3>
        <Lottie
          :options="fontTypeOptions"
          @animCreated="handleFontType"/>
      </div>
      <div
        v-view="handleFontSliceView"
        :class="fontSliceClasses"
        class="lottie--wrapper">
        <h3>SCHRIFTSCHNITTE</h3>
        <Lottie
          :options="fontSliceOptions"
          @animCreated="handleFontSlice"/>
      </div>
      <div
        v-view="handleFontAnatomyView"
        :class="fontAnatomyClasses"
        class="lottie--wrapper">
        <h3>SCHRIFTANATOMIE</h3>
        <Lottie
          :options="fontAnatomyOptions"
          class="lottie--info3"
          @animCreated="handleFontAnatomy"/>
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
  props: {
    windowHeight: {
      type: Number,
      required: true
    },
    bodyHeight: {
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
      isHeroImageLoaded: false,
      fontTypeClasses: "",
      fontType: {
        duration: 0,
        startHeight: 0,
        endHeight: 0,
        isAnimating: false
      },
      fontSlice: {
        duration: 0,
        startHeight: 0,
        endHeight: 0,
        isAnimating: false,
        isFontTypeDone: false
      },
      fontAnatomy: {
        duration: 0,
        startHeight: 0,
        endHeight: 0,
        isAnimating: false,
        isFontTypeDone: false
      },
      fontSliceClasses: "",
      fontAnatomyClasses: ""
    }
  },
  computed: {
    fontTypeOptions() {
      return {
        animationData: info01Animation,
        ...this.defaultOptions
      }
    },
    fontSliceOptions() {
      return {
        animationData: info02Animation,
        ...this.defaultOptions
      }
    },
    fontAnatomyOptions() {
      return {
        animationData: info03Animation,
        ...this.defaultOptions
      }
    }
  },
  watch: {
    windowScrolled: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.animateFontTypeOnScroll(newValue)
        this.animateFontSliceOnScroll(newValue)
        this.animateFontAnatomyOnScroll(newValue)
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
    handleFontType: function(anim) {
      this.animFontType = anim
    },
    handleFontSlice: function(anim) {
      this.animFontSlice = anim
    },
    handleFontAnatomy: function(anim) {
      this.animFontAnatomy = anim
    },
    handleFontTypeView(e) {
      if (
        !this.fontType.isAnimating &&
        this.isHeroImageLoaded &&
        e.type === "enter"
      ) {
        this.fontTypeClasses = "visible"
        this.fontType.startHeight = this.windowScrolled
        this.fontType.endHeight =
          this.fontType.startHeight + this.windowHeight * 0.5
        this.fontType.duration = this.animFontType.getDuration() * 1000 - 1
        this.fontType.isAnimating = true
      }
    },
    animateFontTypeOnScroll(scrolled) {
      if (this.fontType.isAnimating) {
        const timePercentage =
          (scrolled - this.fontType.startHeight) /
          (this.fontType.endHeight - this.fontType.startHeight)
        const time = this.fontType.duration * timePercentage
        if (time < this.fontType.duration) {
          this.animFontType.goToAndStop(time)
          this.fontSlice.isFontTypeDone = false
        } else {
          this.animFontType.goToAndStop(this.fontType.duration)
          this.fontSlice.isFontTypeDone = true
        }
      }
    },
    handleFontSliceView(e) {
      if (
        !this.fontSlice.isAnimating &&
        this.isHeroImageLoaded &&
        e.type === "enter"
      ) {
        this.fontSlice.startHeight =
          this.windowScrolled + this.windowHeight * 0.5
        this.fontSlice.endHeight =
          this.fontSlice.startHeight + this.windowHeight * 0.5
        this.fontSlice.duration = this.animFontSlice.getDuration() * 1000 - 1
        this.fontSlice.isAnimating = true
      }
    },
    animateFontSliceOnScroll(scrolled) {
      if (this.fontSlice.isFontTypeDone) {
        this.fontSliceClasses = "visible"
      }

      if (this.fontSlice.isFontTypeDone && this.fontSlice.isAnimating) {
        const timePercentage =
          (scrolled - this.fontSlice.startHeight) /
          (this.fontSlice.endHeight - this.fontSlice.startHeight)
        const time = this.fontSlice.duration * timePercentage
        if (time < this.fontSlice.duration) {
          this.animFontSlice.goToAndStop(time)
        } else {
          this.animFontSlice.goToAndStop(this.fontSlice.duration)
        }
      }
    },
    handleFontAnatomyView(e) {
      if (
        !this.fontAnatomy.isAnimating &&
        this.isHeroImageLoaded &&
        e.type === "enter"
      ) {
        this.fontAnatomyClasses = "visible"
        this.fontAnatomy.startHeight = this.windowScrolled
        this.fontAnatomy.endHeight =
          this.fontAnatomy.startHeight + this.windowHeight * 0.8
        this.fontAnatomy.duration =
          this.animFontAnatomy.getDuration() * 1000 - 1
        this.fontAnatomy.isAnimating = true
      }
    },
    animateFontAnatomyOnScroll(scrolled) {
      if (this.fontAnatomy.isAnimating) {
        const timePercentage =
          (scrolled - this.fontAnatomy.startHeight) /
          (this.fontAnatomy.endHeight - this.fontAnatomy.startHeight)
        const time = this.fontAnatomy.duration * timePercentage
        if (time < this.fontAnatomy.duration) {
          this.animFontAnatomy.goToAndStop(time)
          this.fontSlice.isFontTypeDone = false
        } else {
          this.animFontAnatomy.goToAndStop(this.fontAnatomy.duration)
          this.fontSlice.isFontTypeDone = true
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/fonts-info";
</style>
