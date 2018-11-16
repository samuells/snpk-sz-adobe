<template>
  <div
    v-view="handleTypoMatcherView"
    :class="typoMatcherClasses"
    class="typomatcher-widget">
    <div class="typomatcher-header">
      <div class="slider-wrapper bau">
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
      <div class="slider-wrapper mp">
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
      <div class="slider-wrapper bs">
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
    <div>
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
    <div class="button-wrapper">
      <button
        @click="showResult">
        AUSWAHL BESTÄTIGEN
      </button>
    </div>
    <transition name="fade-font-result">
      <div
        v-if="isResultShowed"
        class="result-wrapper">
        <p class="result">{{ result }}<span>%</span></p>
        <p>sahen das auch so</p>
      </div>
    </transition>
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
      mpRange: "0",
      bsRange: "0",
      bauRange: "0",
      bauLineHeight: 0,
      mpLineHeight: 0,
      isResultShowed: false,
      typoMatcherClasses: ""
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
      const startTop = this.mpLineHeight > 200 ? "58px" : "20px"

      return {
        top: `calc(100% + ${startTop} + ${Math.round(
          (this.bauLineHeight / 3) * this.mpRange
        )}px`
      }
    },
    result() {
      if (this.bauRange === "2") {
        if (this.mpRange === "1") {
          if (this.bsRange === "0") {
            return 87
          } else {
            return 0.75 // 11.5
          }
        } else {
          if (this.bsRange === "0") {
            return 1 // 10.5
          } else {
            return 0.25 // 10
          }
        }
      } else if (this.bauRange === "1") {
        if (this.mpRange === "1") {
          if (this.bsRange === "0") {
            return 2 // 8
          } else {
            return 0.5 // 7
          }
        } else {
          if (this.bsRange === "0") {
            return 1 // 6
          } else {
            return 0.1 // 5.8
          }
        }
      } else {
        if (this.mpRange === "1") {
          if (this.bsRange === "0") {
            return 2.1 // 3.7
          } else {
            return 0.45 // 2.8
          }
        } else {
          if (this.bsRange === "0") {
            return 1.4 // 1.4
          } else {
            return 0.7 // 0
          }
        }
      }
      return 0
    }
  },
  mounted() {
    this.bauLineHeight = this.$refs.bauLine.offsetHeight
    this.mpLineHeight = this.$refs.mpLine.offsetHeight
  },
  methods: {
    showResult() {
      this.isResultShowed = true
    },
    handleTypoMatcherView(e) {
      if (e.percentTop < 0.85) {
        this.typoMatcherClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/typomatcher-widget";
</style>
