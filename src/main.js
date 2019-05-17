import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/tachyons.min.css'
import './assets/css/more-tachyons.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
