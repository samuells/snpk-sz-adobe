<template>
  <div class="hero-area">
    <img
      v-images-loaded="imageLoaded"
      class="full-width"
      src="https://placehold.it/1280x720"
      height="720"
      width="1280"
      alt="">
    <div class="row--outer">
      <div class="column--text">
        <h1>Schriften verwandeln Wörter in Erzählungen</h1>
        <Lottie
          v-view="handleLottie"
          :options="defaultOptions"
          :height="height"
          :width="width"
          class="lottie--question"
          @animCreated="handleAnimation"/>
        <span class="starting-letter">D</span><p>er Brief an den Steuerberater, ein Kündigungsschreiben für das Abo oder schnell ein paar Notizen festhalten: Datei öffnen und los geht’s mit Tippen. Natürlich achten wir auf den Inhalt unserer Texte, vielleicht noch auf Rechtschreibung und Satzzeichen – aber wie sieht es mit der Schriftart aus? „Calibri“, voreingestellte in Word, ist den meisten regelmäßigen Nutzern ein Begriff, aber hinter „Bodoni“, „Garamond“ oder „Frutiger“ könnten ja auch ein trendiges Fashion-Label oder ein neuer Smoothie stecken. Tatsächlich gibt es hunderttausende verschiedene Schriften für unser römisches Zwei-Buchstaben-Alphabet, die teilweise vor hunderten von Jahren in akribischer Feinstarbeit entwickelt wurden. Aber warum zerbrechen sich Typografen den Kopf über Serifen, Punzen, und Ligaturen? Braucht es diese Tüftelei wirklich?</p>
        <p>Ja. Denn jede Schrift hat eine eigene Ausstrahlung. Sie übermittelt Emotionen und unterstützt die Interpretation eines Wortes. Meistens realisieren wir das nicht einmal – doch wenn wir ganz bewusst darauf achten und aufmerksam die Schrift lesen, sehen wir schwarz auf weiß, wie Typgraphie unser Denken und Handeln beeinflusst.</p>
      </div>
    </div>
  </div>
</template>

<script>
import imagesLoaded from "vue-images-loaded"
import Lottie from "@/components/lottie"
import questionMarkAnimation from "@/assets/animations/question-mark.json"

export default {
  directives: {
    imagesLoaded
  },
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {
        animationData: questionMarkAnimation,
        loop: false,
        autoplay: false
      },
      height: "auto",
      width: "100%",
      isImageLoaded: false
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim
    },
    imageLoaded() {
      this.isImageLoaded = true
      this.$nuxt.$emit("heroImageLoaded")
    },
    handleLottie(e) {
      if (this.isImageLoaded && e.percentTop < 0.9) {
        this.anim.play()
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/hero-area";
</style>
