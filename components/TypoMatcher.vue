<template>
  <div
    :class="classes"
    class="typo-matcher">
    <div

      class="row--outer">
      <div class="column--text">
        <h2>Sag mir was du trägst und ich sag dir wer du bist</h2>
        <p>Die emotionale Wirkung einer Schrift muss immer im Kontext betrachtet werden: Welchen Inhalt transportiert das Wort und welchen Hintergrund hat der Leser? Je nach Kultur, Erfahrungswert und Intuition löst eine Schrift unterschiedliche Emotionen in uns aus. Sie ist wie ein Kleid, das ein Wort verpackt und auf uns wirkt. Dieses Kleid kann opulent oder schlicht sein, es kann den Inhalt unterstreichen – oder das Gegenteil bewirken. Aber dazu später mehr.</p>
        <h3 v-view="handleIllustrationsView">WELCHE SCHRIFT PASST?</h3>
        <p class="small">Entscheiden Sie aus Ihrem Bauchgefühl heraus, welche Schrift zu dem jeweiligen Unternehmen/Produkt passt. Nutzen Sie dafür die drei Regler.</p>
      </div>
    </div>
    <IconOval
      :class="ovalClasses"
      class="illustration--oval visible"/>
    <IconBlueLine
      :class="blueLineClasses"
      class="illustration--blue-line visible"/>
    <div class="row--outer">
      <div class="column--text">
        <TypoMarcherWidget/>
      </div>
    </div>
  </div>
</template>

<script>
import IconBlueLine from "~/assets/icons/adobe-background-01.svg"
import IconOval from "~/assets/icons/adobe-background-02.svg"
import TypoMarcherWidget from "./TypoMatcherWidget"

export default {
  components: {
    IconOval,
    IconBlueLine,
    TypoMarcherWidget
  },
  data() {
    return {
      classes: "",
      blueLineClasses: "",
      ovalClasses: ""
    }
  },
  methods: {
    handleIllustrationsView(e) {
      if (e.percentTop < 0.65) {
        this.ovalClasses = "visible"
      }
      if (e.percentTop < 0.85) {
        this.blueLineClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/typo-matcher";
</style>
