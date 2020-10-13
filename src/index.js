/*global Vue*/

var app = new Vue({
  data: {
    coins: '0 monete',
    attempsMessage: 'Indovina la parola entro <strong>10 tentativi</strong>',
    word2discover: 'meraviglioso'
  }
}).$mount('#app');


// this console log it's for debugging, it will be removed later on
console.log(app);

// skip parcel requireJs scope, expose the app to the world!
window.app = app;