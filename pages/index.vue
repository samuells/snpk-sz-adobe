<template>
  <div>
    <HeroArea/>
    <FontsInfo/>
    <TypoMatcher/>
    <BaseText>
      <h4>Visuelle Assoziationen</h4>
      <p>Sind so etwas wie eine leichte und schlanke Schrift wirkt elegant, oder eine fette und schwere wirkt stark. Weiter wirkt eine geneigte Schrift dynamisch, und einee handschriftliche zum Beispiel menschlich und verbunden. Die Usability News Studie 2006 hat da einige Untersuchungen zu gemacht.</p>
    </BaseText>
    <AnimationHead/>
    <div style="height: 20rem;"/>
  </div>
</template>

<script>
import BaseText from "@/components/BaseText.vue"
import HeroArea from "@/components/HeroArea.vue"
import FontsInfo from "@/components/FontsInfo.vue"
import TypoMatcher from "@/components/TypoMatcher.vue"
import AnimationHead from "@/components/AnimationHead.vue"

export default {
  components: {
    BaseText,
    HeroArea,
    FontsInfo,
    TypoMatcher,
    AnimationHead
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
