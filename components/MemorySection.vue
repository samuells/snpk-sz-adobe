<template>
  <div class="section--memory row--outer">
    <div class="column--text">
      <h3>WAS GEHÖRT ZUSAMMEN?</h3>
      <p class="small">Wie gut schlagen Sie sich in unserem Typografie-Memory?</p>
      <div class="memory-wrapper">
        <ul
          v-view="handelMemoryView"
          :class="[memoryClasses, {done: showSuccesMessage}]"
          class="memory-grid">
          <li
            v-for="(card, index) of cardsOnBoard"
            :key="index">
            <div
              :class="card.classes"
              class="memory-card"
              @click="clickOnCard(index)">
              <MemoryBackground class="card-backface"/>
              <component
                :is="`MemoryCard0${card.value}`"
                class="card-frontface"/>
            </div>
          </li>
        </ul>
        <div
          class="memory-counter">
          <p class="label">Spielzüge:</p>
          <p class="counter">{{ stringifySteps }}</p>
        </div>
        <transition name="fade-success-msg">
          <div
            v-if="showSuccesMessage"
            class="success-msg">
            <p>{{ successMessage }}</p>
            <button @click.prevent="resetMemory">Noch eine Runde?</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import MemoryBackground from "@/assets/icons/memory-background.svg"
import MemoryCard01 from "@/assets/icons/memory-card-01.svg"
import MemoryCard02 from "@/assets/icons/memory-card-02.svg"
import MemoryCard03 from "@/assets/icons/memory-card-03.svg"
import MemoryCard04 from "@/assets/icons/memory-card-04.svg"
import MemoryCard05 from "@/assets/icons/memory-card-05.svg"
import MemoryCard06 from "@/assets/icons/memory-card-06.svg"
import MemoryCard07 from "@/assets/icons/memory-card-07.svg"
import MemoryCard08 from "@/assets/icons/memory-card-08.svg"

function getRandomSubArray(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available")
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default {
  components: {
    MemoryBackground,
    MemoryCard01,
    MemoryCard02,
    MemoryCard03,
    MemoryCard04,
    MemoryCard05,
    MemoryCard06,
    MemoryCard07,
    MemoryCard08
  },
  data() {
    return {
      optionalCards: [
        {
          classes: "",
          value: 1,
          isDisabled: false
        },
        {
          classes: "",
          value: 2,
          isDisabled: false
        },
        {
          classes: "",
          value: 3,
          isDisabled: false
        },
        {
          classes: "",
          value: 4,
          isDisabled: false
        },
        {
          classes: "",
          value: 5,
          isDisabled: false
        },
        {
          classes: "",
          value: 6,
          isDisabled: false
        },
        {
          classes: "",
          value: 7,
          isDisabled: false
        },
        {
          classes: "",
          value: 8,
          isDisabled: false
        },
        {
          classes: "",
          value: 1,
          isDisabled: false
        },
        {
          classes: "",
          value: 2,
          isDisabled: false
        },
        {
          classes: "",
          value: 3,
          isDisabled: false
        },
        {
          classes: "",
          value: 4,
          isDisabled: false
        },
        {
          classes: "",
          value: 5,
          isDisabled: false
        },
        {
          classes: "",
          value: 6,
          isDisabled: false
        },
        {
          classes: "",
          value: 7,
          isDisabled: false
        },
        {
          classes: "",
          value: 8,
          isDisabled: false
        }
      ],
      cardsOnBoard: [],
      numberOfStep: 0,
      firstFlippedCard: {
        index: -1,
        value: -1
      },
      secondFlippedCard: {
        index: -1
      },
      memoryClasses: "",
      numberOfPairsRemains: 8
    }
  },
  computed: {
    stringifySteps() {
      if (this.numberOfStep < 10) {
        return "00" + this.numberOfStep
      } else if (this.numberOfStep < 100) {
        return "0" + this.numberOfStep
      }
      return this.numberOfStep
    },
    showSuccesMessage() {
      return this.numberOfPairsRemains === 0
    },
    successMessage() {
      if (this.numberOfStep > 28) {
        return "Nicht schlecht! Aber das geht noch schneller!"
      } else if (this.numberOfStep > 16) {
        return "Klasse! Sie haben gutes Gespür für Typografie!"
      } else {
        return "Super! An Ihnen ist ein Typograf verloren gegangen!"
      }
    }
  },
  created() {
    const randomArray = getRandomSubArray(this.optionalCards, 16)
    this.cardsOnBoard = [...shuffle(randomArray)]
  },
  methods: {
    clickOnCard(index) {
      if (this.cardsOnBoard[index].classes === "flipped found") {
        // click on found card
        return
      } else if (this.cardsOnBoard[index].classes === "flipped") {
        // click on flipped card
        // console.log("hide flipped")
        this.hideCards()
      } else {
        // click on unflipped card
        console.log("flip card")
        this.flipCard(index)
      }
    },
    flipCard(index) {
      this.cardsOnBoard[index].classes = "flipped"

      if (this.secondFlippedCard.index >= 0) {
        // already 2 cards flipped
        this.hideCards()
        this.flipFirstCard(index)
      } else if (this.firstFlippedCard.index >= 0) {
        // only the first card is flipped
        this.secondFlippedCard.index = index
        if (this.firstFlippedCard.value === this.cardsOnBoard[index].value) {
          // pair found
          this.foundPair(index)
        }
      } else {
        // flip first card
        this.flipFirstCard(index)
      }
    },
    hideCards() {
      this.cardsOnBoard[this.firstFlippedCard.index].classes = ""
      this.firstFlippedCard.index = -1
      if (this.secondFlippedCard.index >= 0) {
        // is also second card flipped
        this.cardsOnBoard[this.secondFlippedCard.index].classes = ""
        this.secondFlippedCard.index = -1
        this.numberOfStep += 1
      }
    },
    flipFirstCard(index) {
      this.firstFlippedCard.index = index
      this.firstFlippedCard.value = this.cardsOnBoard[index].value
    },
    foundPair(index) {
      this.cardsOnBoard[index].classes = "flipped found"
      this.cardsOnBoard[this.firstFlippedCard.index].classes = "flipped found"
      this.firstFlippedCard.index = -1
      this.firstFlippedCard.value = -1
      this.secondFlippedCard.index = -1
      this.secondFlippedCard.value = -1
      this.numberOfStep += 1
      this.numberOfPairsRemains -= 1
      if (this.numberOfPairsRemains === 0) {
        this.$nuxt.$emit("memorySolved")
      }
    },
    resetMemory() {
      this.$nuxt.$emit("memoryReseted")
      this.numberOfStep = 0
      this.numberOfPairsRemains = 8
      const randomArray = getRandomSubArray(this.optionalCards, 16)
      this.cardsOnBoard = [...shuffle(randomArray)]
      this.cardsOnBoard.forEach(card => {
        card.classes = ""
      })
      this.memoryClasses += " repeat"
    },
    handelMemoryView(e) {
      if (e.percentTop < 0.8) {
        this.memoryClasses = "visible"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/memory-section";
</style>
