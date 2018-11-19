<template>
  <main :id="containerId">
    <TopBar/>
    <HeroArea/>
    <FontsInfo
      :window-height="windowHeight"
      :window-scrolled="windowScrolled"/>
    <TypoMatcher/>
    <BaseText>
      <h4>Im Chaos herrscht Ordnung</h4>
      <p>Um in der Menge den Überblick zu behalten, werden Schriftarten in verschiedene Typen gegliedert. Da gibt es beispielsweise den Typ „Serif“. Schriftarten mit Serifen zeichnen sich durch die feinen, mehr oder weniger dünnen Linien aus, die den Buchstaben verzieren. Wenn der Lesefluss besonders im Vordergrund steht wie in Büchern oder Zeitungen werden Schriftarten mit Serifen eingesetzt. Leser assoziieren mit Serifen-Schriftarten Eleganz, Zuverlässigkeit oder auch Intellektualität. Ein bekannter Vertreter ist die „Times New Roman“.</p>
      <p>Den Gegensatz zum Typ „Serif“ bilden Schriften ohne Serifen, auch „Sans Serif“ oder „Grotesk“ genannt. Sie sind schlicht und modern und werden gerne für digitale Medien oder zur Navigation verwendet. Eine bekannte serifenlose Schrift ist beispielsweise die „Helvetica“. Neben „Serif“ und „Sans Serif“ kennt die Typografie noch viele andere Schrifttypen, die ein Wort ausschmücken.</p>
    </BaseText>
    <AnimationHead
      :window-height="windowHeight"
      :window-width="windowWidth"
      :window-scrolled="windowScrolled"/>
    <PizzaSection
      :window-height="windowHeight"
      :window-scrolled="windowScrolled"/>
    <ImgGenSection/>
    <TypewriterSection/>
    <MemorySection/>
    <Footer/>
  </main>
</template>

<script>
import BaseText from "@/components/BaseText"
import TopBar from "@/components/TopBar"
import HeroArea from "@/components/HeroArea"
import FontsInfo from "@/components/FontsInfo"
import TypoMatcher from "@/components/TypoMatcher"
import AnimationHead from "@/components/AnimationHead"
import PizzaSection from "@/components/PizzaSection"
import ImgGenSection from "@/components/ImgGenSection"
import TypewriterSection from "@/components/TypewriterSection"
import MemorySection from "@/components/MemorySection"
import Footer from "@/components/Footer"

export default {
  components: {
    BaseText,
    TopBar,
    HeroArea,
    FontsInfo,
    TypoMatcher,
    AnimationHead,
    PizzaSection,
    ImgGenSection,
    TypewriterSection,
    MemorySection,
    Footer
  },
  data() {
    return {
      containerId: "main-body",
      windowHeight: 0,
      windowWidth: 0,
      windowScrolled: 0,
      bodyHeight: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleResize)
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    console.log("scrolling Injected")
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
    console.log("scrolling Destroyed")
  },
  methods: {
    handleScroll() {
      this.windowScrolled = window.scrollY

      // this.bodyHeight = document.getElementById(this.containerId).offsetHeight
      // console.log(`window height : ${this.windowHeight}`)
      // console.log(`scrolled px: ${this.windowScrolled}`)
      // console.log(`body height : ${this.bodyHeight}`)
    },
    handleResize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/toolbelt";

main {
  overflow: hidden;
}
</style>
