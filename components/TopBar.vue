<template>
  <div>
    <div class="topbar-placeholder"/>
    <div class="topbar">
      <a
        target="blank"
        href="http://sz.de"><ArrowLeft/><span>SZ.de</span></a>
      <p>Anzeigen-Spezial <SzLogo/></p>
    </div>
  </div>
</template>

<script>
import ArrowLeft from "@/assets/icons/arrow-left.svg"
import SzLogo from "@/assets/icons/sz-logo.svg"

export default {
  components: {
    ArrowLeft,
    SzLogo
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/topbar";
</style>
