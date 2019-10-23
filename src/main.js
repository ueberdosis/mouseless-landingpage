import Vue from 'vue'
import VueForceNextTick from 'vue-force-next-tick'
import App from '@/components/App'
// import router from '@/router'

Vue.use(VueForceNextTick)
Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      gumroadLink: 'https://gumroad.com/l/xtRTg/e7qlk3g',
      downloadLink: 'https://ueber.fra1.cdn.digitaloceanspaces.com/mouseless/mac/Mouseless-0.9.2-mac.dmg',
    }
  },
})

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
