<template>
  <div class="row--outer">
    <IconWLogoBlack class="logo"/>
    <h1 class="title">
      Brand Studio
    </h1>
    <h2 class="subtitle">
      Just starting
    </h2>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        class="button--green">Documentation</a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey">GitHub</a>
      <nuxt-link
        to="samples"
        class="button--grey">Typography</nuxt-link>
    </div>
  </div>
</template>

<script>
import IconWLogoBlack from "~/assets/icons/wndrs-logo-black.svg"

export default {
  components: {
    IconWLogoBlack
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/toolbelt";

.logo {
  display: block;
  width: 100vh;
  height: auto;
  max-width: rem(300);
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
}

h1,
h2,
.links {
  text-align: center;
}

.links {
  margin: rem(20);
}
</style>
