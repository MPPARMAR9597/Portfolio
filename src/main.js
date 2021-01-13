import Vue from 'vue'
import App from './App.vue'
import '../src/assets/js/mainapp.js'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
