<template>
  <div class="section--pizza">
    <div class="row--outer">
      <div class="column--text">
        <h3
          :class="pizzaClasses"
          class="pizza-headline">PIZZA IST NICHT GLEICH PIZZA</h3>
        <div
          ref="pizzaWrapper"
          class="lottie--pizza-wrapper">
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
          :style="placeholderStyle"
          class="placeholder--pizza"/>
        <h2>Marken in ihrem Gewand</h2>
        <p>Natürlich unterliegen auch Schriftarten Trends und kulturellen Veränderungen. Die Ersten, die darauf reagieren, sind Marken. Man will ja am Puls der Zeit bleiben. So verpassten sich eine Reihe großer Marken ein neues Schriftbild, um auf uns modern und fortschrittlich zu wirken. Ein Beispiel dafür ist das Fashion-Label <a
          target="blank"
          href="https://www.designtagebuch.de/burberry-geht-in-sachen-branding-mit-der-mode/">Burberry</a>, das sein altes Logo mit hohem Wiedererkennungsfaktor gegen einen schlichten Schriftzug tauschte.</p>
        <div
          :class="stopSignClasses"
          class="stop-sign--wrapper visible">
          <StopSign class="stop-sign"/>
        </div>
        <div class="quote-wrapper">
          <p
            v-view="handleQuoteView"
            :class="quoteClasses"
            class="quote">„Helvetica ist wie Toastbrot. Schmeckt nach nix, aber man kann alles drauflegen.“<strong>Erik Spiekermann<br><span>Typograf und Designer</span></strong></p>
          <p>Oder nehmen wir die <a
            target="blank"
            href="https://www.googlewatchblog.de/2018/09/20-jahre-google-logo/">Schrift-Evolution bei Google</a>: Der Suchmaschinen-Riese setzt heute auf eine moderne, serifenlose und sehr klare Schrift. Gleiches gilt für die deutsche Parfümeriekette <a
              target="blank"
              href="https://www.designtagebuch.de/neuer-markenauftritt-fuer-douglas/">Douglas</a>. Im Vorbeigehen fällt der neue Schriftzug vielleicht gar nicht so auf, weil wir nicht darauf achten. Aber ein kurzes Innehalten lohnt sich – denn Schrift bewegt uns.</p>
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
  props: {
    windowHeight: {
      type: Number,
      required: true
    },
    windowScrolled: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      defaultOptions: {
        loop: false,
        autoplay: false
      },
      pizzaClasses: "",
      pizza: {
        duration: 0,
        startHeight: 0,
        endHeight: 0,
        isAnimating: false
      },
      stopSignClasses: "",
      pizzaWrapperHeight: 0,
      startHeightFactor: 0.235,
      endHeightFactor: 0.51,
      placeholderHeightFactor: 0.235,
      quoteClasses: ""
    }
  },
  computed: {
    pizzaOptions() {
      return {
        animationData: pizzaAnimation,
        ...this.defaultOptions
      }
    },
    placeholderStyle() {
      return {
        height: this.pizzaWrapperHeight * this.placeholderHeightFactor + "px"
      }
    }
  },
  watch: {
    windowScrolled: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.animatePizzaOnScroll(newValue)
      }
    }
  },
  mounted() {
    this.pizzaWrapperHeight = this.$refs.pizzaWrapper.offsetHeight
  },
  methods: {
    handlePizza: function(anim) {
      this.animPizza = anim
    },
    handlePizzaView(e) {
      if (!this.pizza.isAnimating && e.type === "enter") {
        this.pizzaClasses = "visible"
        this.pizza.startHeight = this.windowScrolled + this.windowHeight * 0.2
        this.pizza.endHeight = this.pizza.startHeight + this.windowHeight * 0.9
        this.pizza.duration = this.animPizza.getDuration() * 1000 - 1
        this.pizza.isAnimating = true
      }
    },
    handleQuoteView(e) {
      if (e.percentTop < 0.8) {
        this.quoteClasses = "visible"
      }
    },
    animatePizzaOnScroll(scrolled) {
      if (this.pizza.isAnimating) {
        const timePercentage =
          (scrolled - this.pizza.startHeight) /
          (this.pizza.endHeight - this.pizza.startHeight)
        const time = this.pizza.duration * timePercentage
        if (time < 0) {
          this.placeholderHeightFactor = this.startHeightFactor
        } else if (time < this.pizza.duration) {
          this.animPizza.goToAndStop(time)
          this.placeholderHeightFactor =
            this.startHeightFactor +
            (this.endHeightFactor - this.startHeightFactor) * timePercentage
        } else {
          this.animPizza.goToAndStop(this.pizza.duration)
        }
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
