<template>
  <section class="container">
    <h1 class="title">Lottie Experiment</h1>
    <Lottie
      :options="defaultOptions"
      :height="height"
      :width="width"
      @animCreated="handleAnimation"/>
    <div class="controls">
      <p>Speed: x{{ animationSpeed }}</p>
      <input
        v-model="animationSpeed"
        type="range"
        value="1"
        min="0"
        max="3"
        step="0.5"
        @change="onSpeedChange">
    </div>
    <div class="controls">
      <button @click="stop">stop</button>
      <button @click="pause">pause</button>
      <button @click="play">play</button>
    </div>
  </section>
</template>

<script>
import Lottie from "@/components/lottie"
import animationData from "@/assets/animations/pizza.json"

export default {
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
      height: 1080 / 2,
      width: 1920 / 2
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim
    },
    stop: function() {
      this.anim.stop()
    },
    play: function() {
      this.anim.play()
    },
    pause: function() {
      this.anim.pause()
    },
    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed)
    }
  }
}
</script>

<style lang="scss">
h1,
.controls {
  text-align: center;

  p {
    padding-top: 2rem;
  }

  input {
    margin-bottom: 2rem;
  }
}
</style>
