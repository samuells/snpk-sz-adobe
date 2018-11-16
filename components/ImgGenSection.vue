<template>
  <div class="img-gen-section">
    <div class="row--outer">
      <div class="column--text">
        <h3>IHRE BOTSCHAFT</h3>
        <p class="small">Schauen Sie selbst, wie Schriften wirken: Wählen Sie Text, Schriftart und Hintergrund und erstellen so Sie Ihre persönliche Botschaft. Diese können Sie als XXX herunterladen.</p>
        <ImgGenWidget/>
      </div>
    </div>
  </div>
</template>

<script>
import ImgGenWidget from "./ImgGenWidget"

export default {
  components: {
    ImgGenWidget
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/img-gen-section";
</style>
