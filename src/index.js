/*global Vue*/

var app = new Vue({
  data: {
    coins: '0 monete',
    word2discover: 'meraviglioso',
    letter2check: '',
    goodLetters: [],
    badLetters: [],
    gameover: false,
    totalAttemps: 10,
    usedAttemps: 0
  },
  computed: {
    badAttemps() {
      return this.badLetters.length
    },
    attempsMessage() {
      return `Indovina la parola entro <strong>${this.totalAttemps - this.usedAttemps} tentativi</strong>`
    }
  },
  methods: {
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
    }
  },
}).$mount('#app');


// this console log it's for debugging, it will be removed later on
console.log(app);

// skip parcel requireJs scope, expose the app to the world!
window.app = app;