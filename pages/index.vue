<template>
  <main :id="containerId">
    <TopBar/>
    <HeroArea/>
    <FontsInfo
      :window-height="windowHeight"
      :window-scrolled="windowScrolled"
      :body-height="bodyHeight"/>
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
    <PizzaSection/>
    <div class="row--outer">
      <div class="column--text">
        <h1 style="color: #b22222">-- WIDGET PLACEHOLDER --</h1>
      </div>
    </div>
    <TypewriterSection/>
    <MemorySection/>
    <Footer/>
  </main>
</template>

<script>
import BaseText from "@/components/BaseText.vue"
import TopBar from "@/components/TopBar.vue"
import HeroArea from "@/components/HeroArea.vue"
import FontsInfo from "@/components/FontsInfo.vue"
import TypoMatcher from "@/components/TypoMatcher.vue"
import AnimationHead from "@/components/AnimationHead.vue"
import PizzaSection from "@/components/PizzaSection.vue"
import TypewriterSection from "@/components/TypewriterSection.vue"
import MemorySection from "@/components/MemorySection.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    BaseText,
    TopBar,
    HeroArea,
    FontsInfo,
    TypoMatcher,
    AnimationHead,
    PizzaSection,
    TypewriterSection,
    MemorySection,
    Footer
  },
  data() {
    return {
      containerId: "main-body",
      windowHeight: 0,
      windowScrolled: 0,
      bodyHeight: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    console.log("scrolling Injected")
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
    console.log("scrolling Destroyed")
  },
  methods: {
    handleScroll() {
      this.windowHeight = window.innerHeight
      this.windowScrolled = window.scrollY
      this.bodyHeight = document.getElementById(this.containerId).offsetHeight

      // console.log(`window height : ${this.windowHeight}`)
      // console.log(`scrolled px: ${this.windowScrolled}`)
      // console.log(`body height : ${this.bodyHeight}`)
    }
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
