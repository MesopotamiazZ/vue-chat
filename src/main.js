import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
Vue.use(iview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iview,
  render: h => h(App)
})
