/*global Vue*/

const HangedMan = {
  props: {
    badAttemps: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div class="hanged">
      <svg width="290px" height="500px" viewBox="0 0 290 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs></defs>
        <g id="hanged-man">
          <g id="man">
            <circle v-if="badAttemps > 0" id="head" stroke="#151515" fill="none" stroke-width="3" cx="222.5" cy="117.5" r="33.5"></circle>
            <rect v-if="badAttemps > 1" id="body" fill="#151515" transform="translate(222.500000, 226.500000) scale(-1, 1) translate(-222.500000, -226.500000) "x="221" y="151" width="3" height="151"></rect>
            <polygon v-if="badAttemps > 2" id="right-arm" fill="#151515" points="222.549038 151.24241 161.049038 225.057466 158.450962 224.018023 219.950962 150.202967"></polygon>
            <polygon v-if="badAttemps > 3" id="left-arm" fill="#151515" points="286.799038 223.971604 284.200962 225.011046 222.200962 150.595867 224.799038 149.556425"></polygon>
            <rect v-if="badAttemps > 4" id="right-leg" fill="#151515" transform="translate(192.500000, 351.500000) scale(-1, 1) rotate(-30.000000) translate(-192.500000, -351.500000) " x="191" y="292" width="3" height="119"></rect>
            <rect v-if="badAttemps > 5" id="left-leg" fill="#151515" transform="translate(252.500000, 351.500000) scale(-1, -1) rotate(-30.000000) translate(-252.500000, -351.500000) " x="251" y="292" width="3" height="119"></rect>
          </g>
          <g id="pole">
            <rect id="Rectangle" fill="#151515" transform="translate(224.500000, 42.000000) scale(-1, 1) translate(-224.500000, -42.000000) " x="223" y="0" width="3" height="84"></rect>
            <rect id="Rectangle" fill="#151515" transform="translate(113.500000, 1.500000) scale(-1, 1) rotate(-270.000000) translate(-113.500000, -1.500000) " x="112" y="-111"width="3" height="225"></rect>
            <rect id="Rectangle" fill="#151515" transform="translate(1.500000, 250.000000) scale(-1, 1) translate(-1.500000, -250.000000) " x="0" y="0" width="3" height="500"></rect>
          </g>
        </g>
      </svg>
    </div>
  `
}

Vue.component('TheWord', {
  props: {
    word: {
      type: String,
      required: true
    },
    goodLetters: {
      type: Array,
      default: () => ([])
    }
  },
  template: `
    <div class="word2discover">
      <span v-for="(letter, i) in word" :key="i" class="letter">
        <span>{{ goodLetters.includes(letter) ? letter : '' }}</span>
      </span>
    </div>
  `
})

var app = new Vue({
  components: {
    HangedMan,
    // alternative way to include component, just for teaching porpose. Prefere the separate-object way
    'base-modal': {
      template: `
        <div class="modal">
          <div class="modal__inner">
            <button @click="$emit('close-modal')" class="modal__close">X</button>
            <slot />
          </div>
        </div> 
      `
    }
  },
  data: {
    coins: '0 monete',
    words: ['stupendo', 'magnifico', 'meraviglioso', 'incredibile','fantastico'],
    word2discover: '',
    letter2check: '',
    goodLetters: [],
    badLetters: [],
    gameover: false,
    totalAttemps: 10,
    usedAttemps: 0,
    customText: '',
    settingsOpen: false
  },
  computed: {
    badAttemps() {
      return this.badLetters.length
    },
    attempsMessage() {
      return `Indovina la parola entro <strong>${this.totalAttemps - this.usedAttemps} tentativi</strong>`
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      // reset previous game
      this.goodLetters = []
      this.badLetters = []
      this.usedAttemps = 0
      this.gameover = false
      // choose another word
      const randNum = Math.floor(Math.random() * this.words.length)
      this.word2discover = this.words[randNum]
    },
    confirm() {
      this.usedAttemps++
      const letter = this.letter2check.toLowerCase()
      if (this.word2discover.includes(letter)) {
        if (!this.goodLetters.includes(letter)) this.goodLetters.push(letter)
      } else {
        this.badLetters.push(letter)
      }
      if (this.badLetters.length >= 6) this.gameover = true
      this.letter2check = ''
    },
    getWords() {
      this.words = this.customText
        .toLowerCase()
        .replace(/[^a-zA-Z]/gm, ' ')
        .split(' ')
        .filter(word => word.length > 7)
      this.settingsOpen = false
      this.init()
    }
  },
}).$mount('#app');


// this console log it's for debugging, it will be removed later on
console.log(app);

// skip parcel requireJs scope, expose the app to the world!
window.app = app;