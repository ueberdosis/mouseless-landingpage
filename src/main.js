import Vue from 'vue'
import VueForceNextTick from 'vue-force-next-tick'
import App from '@/components/App'
// import router from '@/router'

Vue.use(VueForceNextTick)
Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
