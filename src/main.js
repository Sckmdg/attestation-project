import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind (el) {
    el.style.fontWeight = 'bold'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
