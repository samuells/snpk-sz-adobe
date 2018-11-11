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
        <h2>Es ist einfacher als je zuvor die passende Schrift zu finden und ­einzusetzen</h2>
        <div class="placeholder--typewriter"/>
        <p>Vom Bleisatz, über Fotosatz zu InDesign, die Verwendung von Schrift sehr verändert und vereinfacht. Lorem ipsum dolor Berunt sequisc harias re sundus at Ectorep udigendist acestiamus que idis nonsector si nus, odi ut facita volut opta ipsam, occusant quatiorporem es molorit facerferia ea voluptur rae sinvel invelli tatur, nobitecusame conseque aut pra velitat. Quident eium as as et restius. Exeris in consed molorrum nullit enecae vollabor sequodi genimin reicae et archic tem nullatest omnitibus doluptam exceptatist, omnis aut lauda cone nonsecat min era quasper chicae porepelis cuptaspidunt videliquia venderum essequam, sitatur alita pe ressitiae moditib usdandae prerum es quaecum consed maximus.</p>
        <div class="quote-wrapper">
          <p class="quote">„Hier steht ein schönes Zitat zum Thema, lorem esci mus Iqui blab ipita.“</p>
          <p>Lo bernatusdam re min cupiste dolupta temquatur minus, nimusciet volut faccust ania comnihillab int volupicatem excepe velecta andit et arum que pellaut et occuptur. Duciliquae volorro voluptia pe volent ut aperibus quae volores citatur atati aut utem voles aid miniend andunt.</p>
        </div>
        <!--
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "@/components/lottie"
import typewriterAnimation from "@/assets/animations/typewriter.json"
import StopSign from "@/assets/icons/stop-sign.svg"

export default {
  components: {
    Lottie,
    StopSign
  },
  data() {
    return {
      defaultOptions: {
        loop: true,
        autoplay: false
      },
      typewriterClasses: "",
      stopSignClasses: "",
      isTypewriterPlaceholderAcive: false
    }
  },
  computed: {
    typewriterOptions() {
      return {
        animationData: typewriterAnimation,
        ...this.defaultOptions
      }
    }
  },
  methods: {
    handleTypewriter: function(anim) {
      this.animTypewriter = anim
    },
    handleTypewriterView(e) {
      if (e.percentTop < 0.8) {
        this.isTypewriterPlaceholderAcive = true
        this.typewriterClasses = "visible"
        this.animTypewriter.play()
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
@import "./assets/scss/components/typewriter-section";
</style>
