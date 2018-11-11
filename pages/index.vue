<template>
  <div>
    <HeroArea/>
    <FontsInfo/>
  </div>
</template>

<script>
import HeroArea from "@/components/HeroArea.vue"
import FontsInfo from "@/components/FontsInfo.vue"

export default {
  components: {
    HeroArea,
    FontsInfo
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
