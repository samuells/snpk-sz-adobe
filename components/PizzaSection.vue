<template>
  <div class="section--pizza">
    <div class="row--outer">
      <div class="column--text">
        <h3 class="pizza-headline">WO WÜRDEN SIE PIZZA BESTELLEN?</h3>
        <div class="lottie--pizza-wrapper">
          <div
            v-view="handlePizzaView"
            :class="pizzaClasses"
            class="lottie--pizza">
            <Lottie
              :options="pizzaOptions"
              @animCreated="handlePizza"/>
          </div>
        </div>
        <div
          :class="{active: isPizzaPlaceholderAcive}"
          class="placeholder--pizza"/>
        <h4>Zusammengenommen wirkt es so</h4>
        <p>Beide assoziativen Ebenen wirken zusammen auf die emotionale Wahrnehmung von Schriften. Erstens - Wo wurde die Schrift schon mal gesehen? Zweitens - Welche Inhalte und Themen verbindet man mit der Schrift? Als Drittes - Was für persönliche Verbindungen hat man mit den Themen - gut oder schlecht? Und als viertes und letztes - Stimmt der Kontext in dem sie steht? Nequas et ma delescimus di que nistia cus, quam quae sita verum harcim harcide liquam, temporeri sam qui cuptatent occusan ditioruptat voloreiciis rem que dis quoditint.</p>
        <p>Acientore, cusapedit, saperum quiderrovit as sinvenim velit ma que minvel et aut officienim enda quiamen dempossum eic te cus enihillo evelend unduntis recerum rehenda ma delescimus di que nistia.</p>
        <div
          v-view="handleStopSignView"
          :class="stopSignClasses"
          class="stop-sign--wrapper">
          <StopSign class="stop-sign"/>
        </div>
        <div class="placeholder--stop-sign"/>
        <h2>So wird die Wirkung von Schriften genutzt</h2>
        <p>Lorem ipsum dolor ctibea voloriatum quiasit eossent mi, que consed quis dunt, simetur sandigent occum renistotae nosae repeliatem quuntorum eos as iunt cim qui officiunt quia sitate nonsectur sequo dolupiendam dolorita dolupta spelendebis esseque pellaturem re, ellabore laboresequi di omnim et mod quas di re re nonseque odisitem volorae net omnim elliquiae volupitiusam et.</p>
        <h3 class="is-h4">Funktionalität von Schrift</h3>
        <p>„Aufgaben scheinen einfacher zu sein, wenn sie leichter zu lesen sind“ anders rum kann man es auch ausnutzen „Wenn eine Speisekarte schwieriger zu lesen ist, entsteht der Eindruck, dass die Speisen schwieriger herzustellen sind.“ Em eum et porrum remquoditin cus. Tem eturia coriberume etur antiam ra nos endiam, consequam into toreceat dolupic iendiate dolupiet ra dolupta tusdandaeped ullant as quo consequi amusapis mintis ex ea sunt omnim et mod quas di re re nonseque pa volor sedi omnia dolupta temporem. Nequam harum volut quasi omnis sendisit que quid qui untis dem accum dolorpor reped.</p>
        <p>Quo tem quas magnatae ad ut omnihil iquaerum consecaborem quam autendit, que non et occus, sit auta eatis nobistr untur? Qui acia sequis ut et entecto ex essimil esed mint audam simus vellaut atibus dolupta temporro tem conse pellorro molo te ommolendis debitis ulloreius eum eos et adic tecepta quideriaerum reserch illabora cupis dolectur.</p>
        <h3 class="is-h4">Selbst mit unserer Zunge lässt sich Schrift spüren</h3>
        <p>Sarah Hyndman hat in Studien festgestellt das gleiche Speisen oder Getränke anders schmecken, je nachdem wie die Schrift darauf war. Lorem ipsum dolor Nequas et ma delescimus di que nistia cus, quam quae sita verum harcim harcide liquam, temporeri sam qui cuptatent occusan ditioruptat voloreiciis rem que dis quoditint, acientore, cusapedit, saperum quiderrovit as sinvenim velit ma que minvel et aut officienim enda quiamen dempossum eic te cus enihillo evelend unduntis recerum.</p>
        <div class="quote-wrapper">
          <p class="quote">„Hier steht ein schönes Zitat zum Thema, lorem ipsum dolor poriaec esci mus Iqui blab ipita.“</p>
          <p>Rehenda quibea parum cum quodit milla quam ea cus delest id quis aut offic tem re volupie nitiur rero et es esed que sitatus, to ex et quas a dolore dero omnihitam que res ne voluptam, etum sed quodion nitati omnietur, con et que od evelignam fuga. Aruntius. Lorror aliquia vel ipsae digendent la derrovi tatest eum consendita int ommolup tiunt. Boriti omniaeptat. Xerferi tiandandis eum eos esut. Minum quias rum sunti quunt qui.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "@/components/lottie"
import pizzaAnimation from "@/assets/animations/pizza.json"
import StopSign from "@/assets/icons/stop-sign.svg"

export default {
  components: {
    Lottie,
    StopSign
  },
  data() {
    return {
      defaultOptions: {
        loop: false,
        autoplay: false
      },
      pizzaClasses: "",
      stopSignClasses: "",
      isPizzaPlaceholderAcive: false
    }
  },
  computed: {
    pizzaOptions() {
      return {
        animationData: pizzaAnimation,
        ...this.defaultOptions
      }
    }
  },
  methods: {
    handlePizza: function(anim) {
      this.animPizza = anim
    },
    handlePizzaView(e) {
      if (e.percentTop < 0.8) {
        this.isPizzaPlaceholderAcive = true
        this.animPizza.play()
      }
      if (e.percentTop < 0.9) {
        this.pizzaClasses = "visible"
      }
    },
    handleStopSignView(e) {
      if (e.percentTop < 0.8) {
        this.stopSignClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/pizza-section";
</style>
