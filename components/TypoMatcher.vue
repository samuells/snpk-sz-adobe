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
        <h2>Wie Schriftdesign auf uns wirkt</h2>
        <p>Einführung in die Wahrnehmungspsychologie von Schrift. Lorem ipsum dolor Luptio que ditatior magnatem ipictur. Ictemol oreptati digent andellabore voluptaepe excepudam rae sequidi ssusci corem seque et aditatur sequas quibus, nobisqui ilignit es aturibus aut aut oreptati digent andellabore voluptaepe.</p>
        <h3>WELCHE SCHRIFT PASST?</h3>
        <p class="small">So gehts: Olorepellorae seque dolore nat es rerate recae ipsum quam quo illaut derit fugit volorit atusda Temodit moluptio eat doluptiumqui.</p>
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
