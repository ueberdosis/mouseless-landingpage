import Vue from 'vue'
import collect from 'collect.js'
import moment from 'moment'
import App from '@/components/App'
import discountDates from './discountDates'
// import router from '@/router'

Vue.config.productionTip = false

const now = moment.utc()
const dateParseFormat = 'DD.MM.YYYY hh:mm:ss'
const formattedDiscountDates = collect(discountDates)
  .map(item => {
    const end = moment(item.date, dateParseFormat).endOf('day').utc()
    const start = moment(end).subtract(1, 'day')
    const isActive = moment(now).isBetween(start, end)
    const countdown = isActive
      ? moment.duration(end.diff(now)).asMilliseconds()
      : 0

    return {
      ...item,
      now: now.format('YYYY-MM-DD hh:mm:ss'),
      start: start.format('YYYY-MM-DD hh:mm:ss'),
      end: end.format('YYYY-MM-DD hh:mm:ss'),
      isActive,
      countdown,
    }
  })
  .sortBy('end')
  .toArray()

Vue.mixin({
  data() {
    return {
      activeDiscount: formattedDiscountDates.find(item => item.isActive),
      downloadLink: 'https://ueber.fra1.cdn.digitaloceanspaces.com/mouseless/mac/Mouseless-0.9.2-mac.dmg',
    }
  },

  computed: {
    gumroadLink() {
      if (this.activeDiscount) {
        return 'https://gumroad.com/l/xtRTg/e7qlk3g'
      }

      return 'https://gumroad.com/l/xtRTg'
    },
  },
})

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
