<template>
  <div class="img-gen-widget">
    <div class="img-gen-board">
      <div ref="screenshot">
        <Background01 class="board-bgc"/>
        <Text01Font01/>
      </div>
      <div class="board-graphic-element"/>
    </div>
    <div class="img-gen-controls">
      <div class="controls--text">
        <button class="controls-button">
          <ButtonLeft/>
        </button>
        <button class="controls-button">
          <ButtonRight/>
        </button>
        <p>TEXT</p>
      </div>
      <div class="controls--font">
        <button class="controls-button">
          <ButtonLeft/>
        </button>
        <button class="controls-button">
          <ButtonRight/>
        </button>
        <p>SCHRIFTART</p>
      </div>
      <div class="controls--bgc">
        <button class="controls-button">
          <ButtonLeft/>
        </button>
        <button class="controls-button">
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
import Text01Font01 from "~/assets/icons/vs-text01-font01.svg"

export default {
  components: {
    ButtonLeft,
    ButtonRight,
    ButtonDownload,
    Text01Font01,
    Background01
  },
  methods: {
    takePic() {
      const node = this.$refs.screenshot
      DomToImage.toBlob(node).then(function(blob) {
        FileSaver.saveAs(blob, "my-node.png")
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/img-gen-widget";
</style>
