<template>
  <div
    :class="classes"
    class="typo-matcher">
    <icon-oval class="illustration--oval"/>
    <icon-blue-line class="illustration--blue-line"/>
    <div
      v-view="handleAnimations"
      class="row--outer">
      <div class="column--text">
        <h2>Sag mir was du trägst und ich sag dir wer du bist</h2>
        <p>Die emotionale Wirkung einer Schrift muss immer im Kontext betrachtet werden: Welchen Inhalt transportiert das Wort und welchen Hintergrund hat der Leser? Je nach Kultur, Erfahrungswert und Intuition löst eine Schrift unterschiedliche Emotionen in uns aus. Sie ist wie ein Kleid, das ein Wort verpackt und so auf uns wirkt. Dieses Kleid kann opulent oder schlicht sein, es kann den Inhalt unterstreichen – oder das Gegenteil bewirken. Aber dazu später mehr.</p>
        <h3>WELCHE SCHRIFT PASST?</h3>
        <p class="small">Entscheiden Sie aus Ihrem Bauchgefühl heraus welche Schrift zu dem jeweiligen Unternehmen/Produkt passt. Nutzen dafür die drei Regler.</p>
      </div>
      <div class="column--text">
        <h1 style="color: #b22222">-- WIDGET PLACEHOLDER --</h1>
      </div>
    </div>
  </div>
</template>

<script>
import IconBlueLine from "~/assets/icons/adobe-background-01.svg"
import IconOval from "~/assets/icons/adobe-background-02.svg"
// import IconDashedLine from "~/assets/icons/adobe-background-03.svg"

export default {
  components: {
    IconOval,
    IconBlueLine
  },
  data() {
    return {
      classes: ""
    }
  },
  methods: {
    handleAnimations(e) {
      if (e.percentTop < 0.85) {
        this.classes = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/typo-matcher";
</style>
