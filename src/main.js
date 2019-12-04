import collect from 'collect.js'
import moment from 'moment'
import DefaultLayout from '~/layouts/Default.vue'
import discountDates from './discountDates'

const now = moment.utc()
const dateFormat = 'YYYY-MM-DD hh:mm:ss'
const formattedDiscountDates = collect(discountDates)
  .map(item => {
    const end = moment(item.date, dateFormat).endOf('day').utc()
    const start = moment(end).subtract(1, 'day')
    const isActive = moment(now).isBetween(start, end)
    const countdown = isActive
      ? moment.duration(end.diff(now)).asMilliseconds()
      : 0

    return {
      ...item,
      now: now.format(dateFormat),
      start: start.format(dateFormat),
      end: end.format(dateFormat),
      isActive,
      countdown,
    }
  })
  .sortBy('end')
  .toArray()

export default function (Vue, { router, head, isClient }) {
  head.meta.push({
    name: 'description',
    content: 'A beautiful way to get better at all the creative tools you already know and love.',
  })

  head.meta.push({
    property: 'og:title',
    content: 'Mouseless',
  })

  head.meta.push({
    property: 'og:url',
    content: 'https://mouseless.app',
  })

  head.meta.push({
    property: 'og:image',
    content: 'https://mouseless.app/opengraph.png',
  })

  head.meta.push({
    property: 'og:description',
    content: 'A beautiful way to get better at all the creative tools you already know and love.',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary',
  })

  Vue.mixin({
    data() {
      return {
        isClient: !this.$isServer,
        activeDiscount: formattedDiscountDates.find(item => item.isActive),
        downloadLink: 'https://ueber.fra1.cdn.digitaloceanspaces.com/mouseless/mac/Mouseless-1.1.0-mac.dmg',
      }
    },

    computed: {
      gumroadLink() {
        if (this.activeDiscount) {
          return 'https://gum.co/Dwka/e7qlk3g'
        }

        return 'https://gum.co/Dwka'
      },
    },
  })

  Vue.component('Layout', DefaultLayout)
}
