import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'

// import VueResource from 'vue-resource'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
