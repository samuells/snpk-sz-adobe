<template id="range-slider">
  <div class="range-slider">
    <input
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      type="range"
      @input="onInput">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: null,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data: function() {
    return {
      // mutate value to range for recomendation vue core
      range: this.value
    }
  },
  watch: {
    range: function() {
      this.$emit("input", this.range)
    },
    value: function() {
      this.range = this.value
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style lang="scss">
</style>
