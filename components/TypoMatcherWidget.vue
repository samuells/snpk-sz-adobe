<template>
  <div class="typomatcher-widget">
    <div class="typomatcher-header">
      <div class="slider-wrapper">
        <label>BAUFIRMA</label>
        <TypoMatcherSlider
          v-model="bauRange"
          :step="1"
          :max="2"/>
        <div
          ref="bauLine"
          class="slider-line"/>
        <ButtonBau
          :style="bauStyleObject"
          class="slider-button"/>
      </div>
      <div class="slider-wrapper">
        <label>MAKE UP</label>
        <TypoMatcherSlider
          v-model="mpRange"
          :step="1"
          :max="2"/>
        <div
          ref="mpLine"
          class="slider-line"/>
        <ButtonMp
          :style="mpStyleObject"
          class="slider-button"/>
      </div>
      <div class="slider-wrapper">
        <label>BRETTSPIEL</label>
        <TypoMatcherSlider
          v-model="bsRange"
          :step="1"
          :max="2"/>
        <div class="slider-line"/>
        <ButtonBs
          :style="bsStyleObject"
          class="slider-button"/>
      </div>
    </div>
    <div class="typomatcher-row bs">
      <FontBs/>
    </div>
    <div class="typomatcher-row mp">
      <FontMakeup/>
    </div>
    <div class="typomatcher-row bau">
      <FontBau/>
    </div>
  </div>
</template>

<script>
import FontBs from "~/assets/icons/font-bs.svg"
import FontMakeup from "~/assets/icons/font-makeup.svg"
import FontBau from "~/assets/icons/font-bau.svg"
import ButtonBs from "~/assets/icons/button-bs.svg"
import ButtonMp from "~/assets/icons/button-mp.svg"
import ButtonBau from "~/assets/icons/button-bau.svg"
import TypoMatcherSlider from "./TypoMatcherSlider"

export default {
  components: {
    FontBs,
    FontMakeup,
    FontBau,
    ButtonBs,
    ButtonMp,
    ButtonBau,
    TypoMatcherSlider
  },
  data() {
    return {
      mpRange: 0,
      bsRange: 0,
      bauRange: 0,
      bauLineHeight: 0,
      mpLineHeight: 0
    }
  },
  computed: {
    bauStyleObject() {
      return {
        top: `calc(100% + 20px + ${Math.round(
          (this.bauLineHeight / 3) * this.bauRange
        )}px`
      }
    },
    bsStyleObject() {
      return {
        top: `calc(100% + 20px + ${Math.round(
          (this.bauLineHeight / 3) * this.bsRange
        )}px`
      }
    },
    mpStyleObject() {
      return {
        top: `calc(100% + 20px + ${Math.round(
          (this.mpLineHeight / 3) * this.mpRange
        )}px`
      }
    }
  },
  mounted() {
    this.bauLineHeight = this.$refs.bauLine.offsetHeight
    this.mpLineHeight = this.$refs.mpLine.offsetHeight
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/typomatcher-widget";
</style>
