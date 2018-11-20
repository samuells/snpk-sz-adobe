<template>
  <div class="section--typewriter">
    <div class="row--outer">
      <div class="column--text">
        <div class="lottie--typewriter-wrapper">
          <div
            v-view="handleTypewriterView"
            :class="typewriterClasses"
            class="lottie--typewriter">
            <Lottie
              :options="typewriterOptions"
              @animCreated="handleTypewriter"/>
          </div>
        </div>
        <div class="placeholder--typewriter"/>
        <h2>Mehr Freund als Feind: Technologie macht Kreativität leichter</h2>
        <p>Wir konsumieren also passiv ununterbrochen Typografie. Aber auch einer aktiven Verwendung von Schriftarten steht nichts im Wege. Im Gegenteil: Heute müssen wir keine Grafik-Ausbildung oder ein Design-Studium besitzen, um Wörter und Sätze zu gestalten und zu emotionalisieren. Uns stehen intelligente digitale Tools zur Verfügung, die uns die Kreativität erleichtern. Eine von <a
          target="blank"
          href="#">Adobe und Pfeiffer Consulting durchgeführte Studie</a> zeigt, dass Technologie ein sinnvolles Hilfsmittel ist, um den Kreativprozess zu befeuern: neue digitale Möglichkeiten, neue Ideen, neue kreative Ergebnisse. Und das für Jeden.</p>
        <h2>Die alten Meister in unserer digitalen Welt</h2>
        <div class="lottie--vector-wrapper">
          <div
            v-view="handleVectorView"
            :class="vectorClasses"
            class="lottie--vector">
            <Lottie
              :options="vectorOptions"
              @animCreated="handleVector"/>
          </div>
        </div>
        <p>Als Vorreiter und Impulsgeber für kreative Software sucht Adobe kontinuierlich nach neuen Wegen, um Experten und Laien das kreative Arbeiten so einfach und fortschrittlich wie möglich zu machen. So auch in diesem Jahr: 2018 erweckte Adobe die alten Schriften der Bauhaus-Meister zu neuem, digitalem Leben und erschließt damit eine unschätzbare Quelle der Inspiration für das kreative Arbeiten. Unter der Leitung von Erik Spiekermann, einem der renommiertesten Typografen, wurden die sogenannten „<a
          target="blank"
          href="https://adobehiddentreasures.com/de/">Adobe Hidden Treasures – Bauhaus Dessau</a>“ in Zusammenarbeit mit internationalen Hochschulen digital vervollständigt und überarbeitet. Die funktionalen, markanten Typografien des Bauhaus-Stils spiegeln das avantgardistische Denken der Kunstschule wider und vereinen eindrucksvoll Kunst und Handwerk.</p>
        <div class="lottie--comp-book-wrapper">
          <div
            v-view="handleCompBookView"
            :class="compBookClasses"
            class="lottie--comp-book">
            <Lottie
              :options="compBookOptions"
              @animCreated="handleCompBook"/>
          </div>
        </div>
        <div class="placeholder--comp-book"/>
        <p>Die Bauhaus-Schriften sind frei zugänglich – und eine Einladung, mit Typografie zu experimentieren und vielleicht sogar selbst ein kleines kreatives Werk zu schaffen. Es muss ja nicht immer die Weihnachtskarte aus dem Schreibwarenladen sein oder die vorgedruckten Neujahrsgrüße in Serifen-Schrift. Probieren Sie doch einfach mal aus, wie Typografie Geschichten erzählen kann und eine Botschaft emotional verpackt! Wir wünschen Ihnen viel Spaß!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "@/components/lottie"
import typewriterAnimation from "@/assets/animations/typewriter.json"
import computerBookAnimation from "@/assets/animations/computer-book.json"
import vectorAnimation from "@/assets/animations/vector.json"

export default {
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: {
        loop: true,
        autoplay: false
      },
      typewriterClasses: "visible",
      compBookClasses: "visible",
      vectorClasses: "visible",
      quoteClasses: ""
    }
  },
  computed: {
    typewriterOptions() {
      return {
        animationData: typewriterAnimation,
        ...this.defaultOptions
      }
    },
    compBookOptions() {
      return {
        animationData: computerBookAnimation,
        ...this.defaultOptions
      }
    },
    vectorOptions() {
      return {
        animationData: vectorAnimation,
        ...this.defaultOptions,
        loop: false
      }
    }
  },
  methods: {
    handleTypewriter: function(anim) {
      this.animTypewriter = anim
    },
    handleCompBook: function(anim) {
      this.animCompBook = anim
    },
    handleVector: function(anim) {
      this.animVector = anim
    },
    handleTypewriterView(e) {
      if (e.percentTop < 0.8) {
        // this.typewriterClasses = "visible"
        this.animTypewriter.play()
      }
    },
    handleCompBookView(e) {
      if (e.percentTop < 0.8) {
        // this.compBookClasses = "visible"
        this.animCompBook.play()
      }
    },
    handleVectorView(e) {
      if (e.percentTop < 0.8) {
        // this.vectorClasses = "visible"
        this.animVector.play()
      }
    },
    handleQuoteView(e) {
      if (e.percentTop < 0.8) {
        this.quoteClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/typewriter-section";
</style>
