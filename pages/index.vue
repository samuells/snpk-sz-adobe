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
    <BaseText class="under-head-text">
      <h4>Direkte Assoziationen</h4>
      <p>Assoziationen beziehen sich auf zurückligende Verbindungen mit dieser Schrift, gesellschaftlich und aber auch persönlich: “So wird beispielsweise die Helvetica-Schriftart auf den Formularen des United States Tax and Internal Revenue Service verwendet, was die Wahrnehmung der Schriftart beeinflusst - abhängig von der Erfahrungen mit dem Steuersystem.”</p>
      <p>Obit, temporis eum voluptas ipsandi odignis tiasitatur Iqui dolut fuga. Nam volorib ustiasperro qui veligni intis nimodit pre iurios nonsequam re ressequi officiaerat. Tatem eati omnihil iquibea ne veniste si res acepro tem evelestrum sam, core, nonse cullenditios enietur re nusciundant am, none occulpa ipissimus eos simetusda pre, as molorerore conse perspedi dolor maio officipsanda et esti aborendis aperepratur, solecaborum.</p>
    </BaseText>
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

.under-head-text {
  position: relative;
  z-index: 1;
  margin-top: rh(-4);

  @include breakpoint(medium) {
    margin-top: rh(-8);
  }

  @include breakpoint(xlarge) {
    margin-top: rh(-10);
  }

  @include breakpoint(xxlarge) {
    margin-top: rh(-8);
  }
}
</style>
