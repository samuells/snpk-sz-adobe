<template>
  <div
    v-view="handleImgGenView"
    :class="imgGenClasses"
    class="img-gen-widget">
    <div class="img-gen-board">
      <div ref="screenshot">
        <component
          :is="bgcComponent"
          class="board-bgc"/>
        <component :is="textFontComponent"/>
      </div>
      <div class="board-graphic-element"/>
    </div>
    <div class="img-gen-controls">
      <div class="controls--text">
        <button
          class="controls-button"
          @click.prevent="previousText">
          <ButtonLeft/>
        </button>
        <button
          class="controls-button"
          @click.prevent="nextText">
          <ButtonRight/>
        </button>
        <p>TEXT</p>
      </div>
      <div class="controls--font">
        <button
          class="controls-button"
          @click.prevent="previousFont">
          <ButtonLeft/>
        </button>
        <button
          class="controls-button"
          @click.prevent="nextFont">
          <ButtonRight/>
        </button>
        <p>SCHRIFTART</p>
      </div>
      <div class="controls--bgc">
        <button
          class="controls-button"
          @click.prevent="previousBgc">
          <ButtonLeft/>
        </button>
        <button
          class="controls-button"
          @click.prevent="nextBgc">
          <ButtonRight/>
        </button>
        <p>HINTERGRUND</p>
      </div>
      <div class="controls--download">
        <p>DOWNLOAD</p>
        <button
          class="download-button"
          @click.prevent="takePic">
          <ButtonDownload/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DomToImage from "dom-to-image"
import FileSaver from "file-saver"
import ButtonLeft from "~/assets/icons/button-left.svg"
import ButtonRight from "~/assets/icons/button-right.svg"
import ButtonDownload from "~/assets/icons/button-download.svg"
import Background01 from "~/assets/icons/vs-background-01.svg"
import Background02 from "~/assets/icons/vs-background-02.svg"
import Background03 from "~/assets/icons/vs-background-03.svg"
import Background04 from "~/assets/icons/vs-background-04.svg"
import Background05 from "~/assets/icons/vs-background-05.svg"
import Text01Font01 from "~/assets/icons/vs-text01-font01.svg"
import Text01Font02 from "~/assets/icons/vs-text01-font02.svg"
import Text01Font03 from "~/assets/icons/vs-text01-font03.svg"
import Text02Font01 from "~/assets/icons/vs-text02-font01.svg"
import Text02Font02 from "~/assets/icons/vs-text02-font02.svg"
import Text02Font03 from "~/assets/icons/vs-text02-font03.svg"

export default {
  components: {
    ButtonLeft,
    ButtonRight,
    ButtonDownload,
    Text01Font01,
    Text01Font02,
    Text01Font03,
    Text02Font01,
    Text02Font02,
    Text02Font03,
    Background01,
    Background02,
    Background03,
    Background04,
    Background05
  },
  data() {
    return {
      bgcIndex: 1,
      textIndex: 1,
      fontIndex: 1,
      imgGenClasses: ""
    }
  },
  computed: {
    bgcComponent() {
      return `Background0${this.bgcIndex}`
    },
    textFontComponent() {
      return `Text0${this.textIndex}Font0${this.fontIndex}`
    }
  },
  methods: {
    takePic() {
      const node = this.$refs.screenshot
      DomToImage.toBlob(node).then(function(blob) {
        FileSaver.saveAs(blob, "my-node.png")
      })
    },
    nextBgc() {
      if (this.bgcIndex === 5) {
        this.bgcIndex = 1
        return
      }
      this.bgcIndex += 1
    },
    previousBgc() {
      if (this.bgcIndex === 1) {
        this.bgcIndex = 5
        return
      }
      this.bgcIndex -= 1
    },
    nextFont() {
      if (this.fontIndex === 3) {
        this.fontIndex = 1
        return
      }
      this.fontIndex += 1
    },
    previousFont() {
      if (this.fontIndex === 1) {
        this.fontIndex = 3
        return
      }
      this.fontIndex -= 1
    },
    nextText() {
      if (this.textIndex === 2) {
        this.textIndex = 1
        return
      }
      this.textIndex += 1
    },
    previousText() {
      if (this.textIndex === 1) {
        this.textIndex = 2
        return
      }
      this.textIndex -= 1
    },
    handleImgGenView(e) {
      if (e.percentTop < 0.75) {
        this.imgGenClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/img-gen-widget";
</style>
