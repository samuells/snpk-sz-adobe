<template>
  <div
    v-view="handleImgGenView"
    :class="imgGenClasses"
    class="img-gen-widget">
    <div class="img-gen-board">
      <div
        ref="screenshot"
        class="screenshot">
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
import Background06 from "~/assets/icons/vs-background-06.svg"
import Text01Font01 from "~/assets/icons/vs-text01-font01.svg"
import Text01Font02 from "~/assets/icons/vs-text01-font02.svg"
import Text01Font03 from "~/assets/icons/vs-text01-font03.svg"
import Text01Font04 from "~/assets/icons/vs-text01-font04.svg"
import Text02Font01 from "~/assets/icons/vs-text02-font01.svg"
import Text02Font02 from "~/assets/icons/vs-text02-font02.svg"
import Text02Font03 from "~/assets/icons/vs-text02-font03.svg"
import Text02Font04 from "~/assets/icons/vs-text02-font04.svg"
import Text03Font01 from "~/assets/icons/vs-text03-font01.svg"
import Text03Font02 from "~/assets/icons/vs-text03-font02.svg"
import Text03Font03 from "~/assets/icons/vs-text03-font03.svg"
import Text03Font04 from "~/assets/icons/vs-text03-font04.svg"
import Text04Font01 from "~/assets/icons/vs-text04-font01.svg"
import Text04Font02 from "~/assets/icons/vs-text04-font02.svg"
import Text04Font03 from "~/assets/icons/vs-text04-font03.svg"
import Text04Font04 from "~/assets/icons/vs-text04-font04.svg"
import Text05Font01 from "~/assets/icons/vs-text05-font01.svg"
import Text05Font02 from "~/assets/icons/vs-text05-font02.svg"
import Text05Font03 from "~/assets/icons/vs-text05-font03.svg"
import Text05Font04 from "~/assets/icons/vs-text05-font04.svg"
import Text06Font01 from "~/assets/icons/vs-text06-font01.svg"
import Text06Font02 from "~/assets/icons/vs-text06-font02.svg"
import Text06Font03 from "~/assets/icons/vs-text06-font03.svg"
import Text06Font04 from "~/assets/icons/vs-text06-font04.svg"
import Text07Font01 from "~/assets/icons/vs-text07-font01.svg"
import Text07Font02 from "~/assets/icons/vs-text07-font02.svg"
import Text07Font03 from "~/assets/icons/vs-text07-font03.svg"
import Text07Font04 from "~/assets/icons/vs-text07-font04.svg"
import Text08Font01 from "~/assets/icons/vs-text08-font01.svg"
import Text08Font02 from "~/assets/icons/vs-text08-font02.svg"
import Text08Font03 from "~/assets/icons/vs-text08-font03.svg"
import Text08Font04 from "~/assets/icons/vs-text08-font04.svg"
import Text09Font01 from "~/assets/icons/vs-text09-font01.svg"
import Text09Font02 from "~/assets/icons/vs-text09-font02.svg"
import Text09Font03 from "~/assets/icons/vs-text09-font03.svg"
import Text09Font04 from "~/assets/icons/vs-text09-font04.svg"

export default {
  components: {
    ButtonLeft,
    ButtonRight,
    ButtonDownload,
    Background01,
    Background02,
    Background03,
    Background04,
    Background05,
    Background06,
    Text01Font01,
    Text01Font02,
    Text01Font03,
    Text01Font04,
    Text02Font01,
    Text02Font02,
    Text02Font03,
    Text02Font04,
    Text03Font01,
    Text03Font02,
    Text03Font03,
    Text03Font04,
    Text04Font01,
    Text04Font02,
    Text04Font03,
    Text04Font04,
    Text05Font01,
    Text05Font02,
    Text05Font03,
    Text05Font04,
    Text06Font01,
    Text06Font02,
    Text06Font03,
    Text06Font04,
    Text07Font01,
    Text07Font02,
    Text07Font03,
    Text07Font04,
    Text08Font01,
    Text08Font02,
    Text08Font03,
    Text08Font04,
    Text09Font01,
    Text09Font02,
    Text09Font03,
    Text09Font04
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
        FileSaver.saveAs(blob, "adobe-font-botshaft.png")
      })
      // DomToImage.toJpeg(node, {
      //   quality: 0.95
      // }).then(function(dataUrl) {
      //   var link = document.createElement("a")
      //   link.download = "adobe-font-botshaft.jpeg"
      //   link.href = dataUrl
      //   link.click()
      // })
      // DomToImage.toSvg(node).then(function(dataUrl) {
      //   var link = document.createElement("a")
      //   link.download = "adobe-font-botshaft.svg"
      //   link.href = dataUrl
      //   link.click()
      // })
    },
    nextBgc() {
      if (this.bgcIndex === 6) {
        this.bgcIndex = 1
        return
      }
      this.bgcIndex += 1
    },
    previousBgc() {
      if (this.bgcIndex === 1) {
        this.bgcIndex = 6
        return
      }
      this.bgcIndex -= 1
    },
    nextFont() {
      if (this.fontIndex === 4) {
        this.fontIndex = 1
        return
      }
      this.fontIndex += 1
    },
    previousFont() {
      if (this.fontIndex === 1) {
        this.fontIndex = 4
        return
      }
      this.fontIndex -= 1
    },
    nextText() {
      if (this.textIndex === 9) {
        this.textIndex = 1
        return
      }
      this.textIndex += 1
    },
    previousText() {
      if (this.textIndex === 1) {
        this.textIndex = 9
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
