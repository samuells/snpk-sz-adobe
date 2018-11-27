<template>
  <div class="hero-area">
    <show-at
      :breakpoints="{small: 620, medium: 768, large: 1024}"
      breakpoint="mediumAndAbove">
      <div class="hero-area-destop-wrapper">
        <Lottie
          :options="heroDesktopOptions"
          class="lottie--hero"
          @animCreated="handleHeroDesktop"/>
        <Lottie
          v-scroll-to="{
            el: '#to-text',
            duration: 750,
            offset: -200
          }"
          :options="scrollDownOptions"
          class="lottie--scroll-down"
          @animCreated="handleScrollDown"/>
      </div>
    </show-at>
    <hide-at
      :breakpoints="{small: 620, medium: 768, large: 1024}"
      breakpoint="mediumAndAbove">
      <Lottie
        :options="heroMobileOptions"
        class="lottie--hero"
        @animCreated="handleHeroMobile"/>
    </hide-at>
    <!-- <no-ssr>
      <img
        v-images-loaded="imageLoaded"
        class="full-width"
        src="https://placehold.it/1280x720"
        height="720"
        width="1280"
        alt="">
    </no-ssr> -->
    <div class="hero-content">
      <div class="row--outer">
        <div class="column--text">
          <div class="wrapper--social-sharing">
            <div class="logo-adobe">
              <LogoAdobe/>
            </div>
            <social-sharing
              url="https://advertorial.sueddeutsche.de/adobe"
              title="Schrift bewegt: Wie uns Typografie emotional beeinflusst."
              description="Typografie und ihre emotionale Wirkung: Wie uns Schriftarten unterbewusst beeinflussen."
              quote="Typografie und ihre emotionale Wirkung: Wie uns Schriftarten unterbewusst beeinflussen."
              hashtags="typography,fonts,web"
              twitter-user=""
              inline-template
              class="social-sharing">
              <div>
                <network network="facebook">
                  <button
                    alt="social-sharing facebook"
                    class="fb"><svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M28.344 0H1.656C0.741 0 0 0.741 0 1.654V28.344C0 29.26 0.741 30 1.656 30H16.026V18.398H12.129V13.857H16.026V10.518C16.026 6.643 18.391 4.534 21.848 4.534C23.504 4.534 24.926 4.656 25.342 4.713V8.76L22.951 8.762C21.076 8.762 20.713 9.655 20.713 10.965V13.858H25.209L24.623 18.399H20.713V30H28.344C29.258 30 30 29.26 30 28.345V1.655C30 0.741 29.258 0 28.344 0Z"
                        fill="white"/>
                    </svg>
                  </button>
                </network>
                <network network="twitter">
                  <button
                    alt="social-sharing twitter"
                    class="tw"><svg
                      width="30"
                      height="26"
                      viewBox="0 0 30 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.435 25.191C20.756 25.191 26.948 15.812 26.948 7.67796C26.948 7.41196 26.942 7.14596 26.93 6.88196C28.131 6.01296 29.176 4.92996 30 3.69496C28.896 4.18496 27.71 4.51496 26.465 4.66396C27.736 3.90196 28.712 2.69696 29.172 1.25996C27.983 1.96496 26.666 2.47796 25.264 2.75396C24.141 1.55796 22.541 0.80896 20.772 0.80896C17.372 0.80896 14.616 3.56496 14.616 6.96396C14.616 7.44696 14.671 7.91696 14.776 8.36696C9.66 8.10996 5.124 5.65996 2.089 1.93596C1.56 2.84496 1.255 3.90196 1.255 5.02996C1.255 7.16496 2.342 9.05096 3.994 10.153C2.985 10.122 2.036 9.84396 1.206 9.38296C1.205 9.40896 1.205 9.43396 1.205 9.46196C1.205 12.443 3.327 14.931 6.143 15.496C5.626 15.637 5.081 15.713 4.52 15.713C4.123 15.713 3.737 15.674 3.363 15.602C4.147 18.048 6.418 19.827 9.113 19.878C7.006 21.528 4.352 22.513 1.468 22.513C0.971 22.513 0.481 22.484 0 22.427C2.724 24.172 5.958 25.191 9.435 25.191Z"
                        fill="white"/>
                    </svg>
                  </button>
                </network>
                <network network="email">
                  <button
                    alt="social-sharing mail"
                    class="mail"><svg
                      width="31"
                      height="20"
                      viewBox="0 0 31 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.999993 0V19.999L0.998993 20H0.999993H30.999H31V0H0.999993ZM21.75 11.368L17.364 15.462L16 16.735L14.635 15.462L10.248 11.368L3.14199 18H2.99999V2H3.14299L16 14L28.857 2H29V18H28.856L21.75 11.368Z"
                        fill="white"/>
                    </svg>
                  </button>
                </network>
              </div>
            </social-sharing>
          </div>
        </div>
      </div>
      <div class="row--outer">
        <div class="column--text">
          <h1
            id="to-text"
            class="visually-hidden">Shrift bewegt</h1>
          <p class="first-paragraph"><span class="starting-letter">D</span>er Brief an den Steuerberater, ein Kündigungsschreiben für das Fitnessstudio oder schnell ein paar Notizen festhalten: Datei öffnen und los geht’s mit dem Tippen. Natürlich achten wir auf den Inhalt unserer Texte, vielleicht noch auf Rechtschreibung und Satzzeichen – aber wie sieht es mit der Schriftart aus? „Calibri“, oft voreingestellt in Word, ist den meisten regelmäßigen Nutzern ein Begriff, aber hinter „Bodoni“, „Garamond“ oder „Frutiger“ könnte ja auch ein trendiges Fashion-Label oder ein neuer Smoothie stecken. Tatsächlich gibt es über hunderttausend verschiedene Schriften für unser römisches Zwei-Buchstaben-Alphabet, die teilweise vor hunderten von Jahren in akribischer Feinstarbeit entwickelt wurden. Aber warum zerbrechen sich Typografen den Kopf über Serifen, Punzen und Versalhöhen? Braucht es diese Tüftelei wirklich?</p>
        </div>
      </div>
      <div class="lottie--font-select-wrapper">
        <Lottie
          v-view="handleLottie"
          :options="fontSelectOptions"
          class="lottie--font-select"
          @animCreated="handleFontSelect"/>
      </div>
      <div class="row--outer">
        <div class="column--text">
          <p>Ja. Denn jede Schrift hat ihre ganz eigene Ausstrahlung. Sie übermittelt Emotionen und unterstützt die Interpretation eines Wortes. Meistens realisieren wir das nicht einmal – doch wenn wir ganz bewusst darauf achten und aufmerksam <span class="special-font">die Schrift</span> lesen, erkennen wir schwarz auf weiß, wie uns Typografie beeinflusst.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagesLoaded from "vue-images-loaded"
import Lottie from "@/components/lottie"
import heroDesktopAnimation from "@/assets/animations/hero-desktop.json"
import heroMobileAnimation from "@/assets/animations/hero-mobile.json"
import fontSelectAnimation from "@/assets/animations/font-select.json"
import scrollDownAnimation from "@/assets/animations/scroll-down.json"
import LogoAdobe from "@/assets/icons/adobe-standard-logo.svg"
import { showAt, hideAt } from "vue-breakpoints"

export default {
  directives: {
    imagesLoaded
  },
  components: {
    Lottie,
    LogoAdobe,
    showAt,
    hideAt
  },
  props: {
    windowWidth: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      fontSelectOptions: {
        animationData: fontSelectAnimation,
        loop: false,
        autoplay: false
      },
      heroDesktopOptions: {
        animationData: heroDesktopAnimation,
        loop: false,
        autoplay: true
      },
      heroMobileOptions: {
        animationData: heroMobileAnimation,
        loop: false,
        autoplay: true
      },
      scrollDownOptions: {
        animationData: scrollDownAnimation,
        loop: true,
        autoplay: false
      },
      height: "auto",
      width: "100%",
      isImageLoaded: true
    }
  },
  mounted() {
    setTimeout(this.startScrollDownAnimation, 7000)
  },
  methods: {
    handleFontSelect: function(anim) {
      this.anim = anim
    },
    handleHeroDesktop: function(anim) {
      this.heroDesktopAnim = anim
      this.heroDesktopAnim.setSpeed(1.2)
    },
    handleHeroMobile: function(anim) {
      this.mobileDesktopAnim = anim
      this.mobileDesktopAnim.setSpeed(1.2)
    },
    handleScrollDown: function(anim) {
      this.scrollDownAnim = anim
    },
    startScrollDownAnimation() {
      this.scrollDownAnim.play()
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
