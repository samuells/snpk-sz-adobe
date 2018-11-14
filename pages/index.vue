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
      <p>Um in der unglaublichen Menge den Überblick zu behalten, werden Schriftarten in verschiedene Typen gegliedert. Da gibt es beispielsweise den Typ „Serif“. Schriftarten mit Serifen zeichnen sich durch die feinen, mehr oder weniger dünnen Linien aus, die den Buchstaben verzieren. Wenn der Lesefluss besonders im Vordergrund steht wie in Büchern oder Zeitungen werden Schriftarten mit Serifen eingesetzt. Leser assoziieren mit Serifen-Schriftarten Eleganz, Zuverlässigkeit oder auch Intellektualität. Ein bekannter Vertreter ist die „Times New Roman“.</p>
      <p>Den Gegensatz zum Typ „Serif“ bilden Schriften ohne Serifen, auch „Sans Serif“ oder „Grotesk“ genannt. Sie sind schlicht und modern und werden gerne für digitale Medien oder zur Navigation verwendet. Eine bekannte serifenlose Schrift ist beispielsweise die „Helvetica“. Neben „Serif“ und „Sans Serif“ kennt die Typografie noch viele andere Schrifttypen, die ein Wort ausschmücken.</p>
    </BaseText>
    <AnimationHead
      :window-height="windowHeight"
      :window-scrolled="windowScrolled"/>
    <BaseText class="under-head-text">
      <h4>Der erste Eindruck zählt</h4>
      <p>Was passiert aber, wenn ein Wort im falschen Kleid steckt? Es irritiert und verwirrt uns. Wenn wir beispielsweise das Wort „Liebe“ lesen, fühlen wir uns mit einer eleganten, freundlichen Schrift wohl. So kennen wir das. Schreiben wir „Liebe“ in der Schriftart „Fraktur“, die an NS- Propaganda erinnert, löst dies völlig andere Emotionen in uns aus.</p>
      <div class="quote-wrapper">
        <p
          v-view="handleQuoteView"
          :class="quoteClasses"
          class="quote">
          „Wir alle konsumieren Typografie. Schriften spielen eine große Rolle in unserem Alltag. Sie helfen uns zu navigieren, Entscheidungen zu treffen und einzukaufen. Sie geben uns Sicherheit und tricksen uns manchmal aus.“
          <strong>Sarah Hyndman<br><span>Grafikdesignerin</span></strong>
        </p>
        <p>Mit dieser Emotionalität wissen auch Marken umzugehen und überlegen sich ganz genau, in welchem Kleid sie sich präsentieren – denn schließlich soll uns auch über die Schrift vermittelt werden, für was die Marke steht. Eine Anwaltskanzlei wählt wohl eher eine schlichte, schnörkellose Schrift als eine verspielte. Und eine Kosmetikmarke würde sich mit einer technischen Schrift keinen Gefallen tun.</p>
      </div>
    </BaseText>
    <PizzaSection
      :window-height="windowHeight"
      :window-scrolled="windowScrolled"/>
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
      bodyHeight: 0,
      quoteClasses: ""
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
    },
    handleQuoteView(e) {
      if (e.percentTop < 0.8) {
        this.quoteClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/toolbelt";

.under-head-text {
  @include clearfix;

  position: relative;
  z-index: 1;
  margin-top: rh(-1);

  .quote-wrapper {
    display: flex;
    flex-wrap: wrap;

    p {
      flex-basis: 100%;
    }

    .quote {
      @include transition(opacity, transform);

      order: 2;
      opacity: 0;
      transform: translate3d(0, 2rem, 0);

      &.visible {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      strong {
        position: relative;
        display: block;
        padding-top: rh(0.5);
        padding-left: rem(15);
        font-family: $font-family--header;
        font-size: rem(15);
        font-weight: 700;

        &::before {
          content: "–";
          position: absolute;
          top: 0;
          left: 0;
          padding-top: rh(0.5);
        }

        span {
          font-weight: 100;
        }
      }
    }
  }

  @include breakpoint(medium) {
    margin-top: rh(-2);
  }

  @include breakpoint(large) {
    .quote-wrapper {
      display: block;

      .quote {
        float: left;
        width: rem(280);
        padding-right: rem(20);
        margin-left: rem(-40);
      }
    }
  }

  @include breakpoint(xlarge) {
    margin-top: rh(-3.5);

    .quote-wrapper {
      .quote {
        width: rem(320);
        margin-left: rem(-160);
      }
    }
  }

  @include breakpoint(xxlarge) {
    margin-top: rh(-5);
  }
}
</style>
