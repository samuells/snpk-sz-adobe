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
          <p
            v-view="handleQuoteView"
            :class="quoteClasses"
            class="quote">„Hier steht ein schönes Zitat zum Thema, lorem esci mus Iqui blab ipita.“</p>
          <p>Lo bernatusdam re min cupiste dolupta temquatur minus, nimusciet volut faccust ania comnihillab int volupicatem excepe velecta andit et arum que pellaut et occuptur. Duciliquae volorro voluptia pe volent ut aperibus quae volores citatur atati aut utem voles aid miniend andunt.</p>
        </div>
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
        <h3 class="is-h4">Digitalisierung alter Schriften, großes Interesse neuer Schriftgestalter</h3>
        <p>Hier dazu gehören Adobes Hidden Treasures, lorem ipsum dolor expedi alit int laccabo rporesequat. Acepta pedio eat eum ad eume consequia vendis etur. Atur, sitempo rporitatur Genderferum fugiatiusda qui ilic tem voleni non peris asimet lacid utatemo ssimagnam quae se nimagnatquam quo qui nima et quaecerum cumquati ut faccus, sunt quas dolore molupta turiam et omnis ipic tem et eos et volupid ut repe pe dolorum</p>
        <p>Ipsam venducipsam ut maxim aut fuga. Ad eaqui officid quos dolore nimus as res dest, id ut alibusam et landam ut aut ut res accum et volesti doluptatus sequam eum sam fugiae pa quidemp ercitae sit, vendanis et ommolorrum ea asit qui omnisi quunt, qui arumque posam voluption exernat. Cae dolum ut voloriam facearum sequam, que mod que vernate sequid.</p>
        <h3 class="is-h4">Jeder kann heute mit Schrift arbeiten</h3>
        <p>Heutige Werkzeuge erlauben es eigentlich jedem Schriften zu verwenden und typografisch damit zu spielen. Mit der Adobe Creative Cloud und Typekit gibt es da die perfekten Werkzeuge. Lorem ipsum dolor alitionseque quatur simusapiciam vereium sum ipienessum in renimagnis etur am sintureped qui accat fuga. Ita non pore pro expliquo et aliqui conet asit pore vendigeni ut veriat.</p>
        <p>Nat fugiaes sume expero occate cusandaecus enda voluptae voluptate labor sam lition rem quaspe volesen isinveles et faceaquat et alibusa vent officit assusda nullaboratur seque odit vollect ustiantotae offici alibus essi cone natur magniae voluptat eaquatur reptatis natur, consequas cusam.</p>
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
      typewriterClasses: "",
      compBookClasses: "",
      vectorClasses: "",
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
        this.typewriterClasses = "visible"
        this.animTypewriter.play()
      }
    },
    handleCompBookView(e) {
      if (e.percentTop < 0.8) {
        this.compBookClasses = "visible"
        this.animCompBook.play()
      }
    },
    handleVectorView(e) {
      if (e.percentTop < 0.8) {
        this.vectorClasses = "visible"
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
