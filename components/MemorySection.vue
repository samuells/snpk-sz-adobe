<template>
  <div class="section--memory row--outer">
    <div class="column--text">
      <h3>ERKENNEN SIE JETZT DIE UNTERSCHIEDE?</h3>
      <p class="small">So gehts: Olorepellorae seque dolore nat es rerate recae ipsum quam quo illaut derit fugit volorit atusda Temodit moluptio eat doluptiumqui.</p>
      <ul class="memory-grid">
        <li
          v-for="(card, index) of cardsOnBoard"
          :key="index">
          <div
            :class="card.classes"
            :disabled="card.isDisabled"
            class="memory-card"
            @click="flipCard(index)">
            <MemoryBackground class="card-backface"/>
            <component
              :is="`MemoryCard0${card.value}`"
              class="card-frontface"/>
          </div>
        </li>
      </ul>
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
      }
    }
  },
  created() {
    const randomArray = getRandomSubArray(this.optionalCards, 16)
    this.cardsOnBoard = [...shuffle(randomArray)]
  },
  methods: {
    flipCard(index) {
      if (
        this.cardsOnBoard[index].classes === "found" ||
        this.cardsOnBoard[index].classes === "flipped"
      ) {
        return
      }

      this.cardsOnBoard[index].classes = "flipped"

      if (this.secondFlippedCard.index >= 0) {
        this.cardsOnBoard[this.firstFlippedCard.index].classes = ""
        this.cardsOnBoard[this.secondFlippedCard.index].classes = ""
        this.firstFlippedCard.index = index
        this.firstFlippedCard.value = this.cardsOnBoard[index].value
        this.secondFlippedCard.index = -1
      } else if (this.firstFlippedCard.index >= 0) {
        this.secondFlippedCard.index = index
        if (this.firstFlippedCard.value === this.cardsOnBoard[index].value) {
          console.log("found")
          this.cardsOnBoard[index].classes = "found"
          this.cardsOnBoard[this.firstFlippedCard.index].classes = "found"
          this.cardsOnBoard[index].isDisabled = true
          this.cardsOnBoard[this.firstFlippedCard.index].isDisabled = true
          this.firstFlippedCard.index = -1
          this.firstFlippedCard.value = -1
          this.secondFlippedCard.index = -1
        }
      } else {
        this.firstFlippedCard.index = index
        this.firstFlippedCard.value = this.cardsOnBoard[index].value
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/components/memory-section";
</style>
