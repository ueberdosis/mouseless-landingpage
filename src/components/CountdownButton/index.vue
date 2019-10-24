<template>
  <div class="countdown-button" :class="{ 'has-discount': activeDiscount }">
    <div class="countdown-button__inner">
      <countdown
        class="countdown-button__countdown"
        :time="activeDiscount.countdown"
        :interval="1000"
        tag="div"
        v-if="activeDiscount"
      >
        <template v-slot="{ days, hours, minutes, seconds }">
          <div class="countdown-button__item">
            <div class="countdown-button__value">
              {{ days | value }}
            </div>
            <div class="countdown-button__label">
              Days
            </div>
          </div>
          <div class="countdown-button__item">
            <div class="countdown-button__value">
              {{ hours | value }}
            </div>
            <div class="countdown-button__label">
              Hrs
            </div>
          </div>
          <div class="countdown-button__item">
            <div class="countdown-button__value">
              {{ minutes | value }}
            </div>
            <div class="countdown-button__label">
              Mins
            </div>
          </div>
          <div class="countdown-button__item">
            <div class="countdown-button__value">
              {{ seconds | value }}
            </div>
            <div class="countdown-button__label">
              Secs
            </div>
          </div>
        </template>
      </countdown>
      <btn :href="gumroadLink" target="_blank" class="countdown-button__button">
        Buy for
        <template v-if="activeDiscount">
          <s>$30</s> <span class="green">$15</span>
        </template>
        <template v-else>
          $30
        </template>
      </btn>
    </div>
    <div class="countdown-button__discount" v-if="activeDiscount">
      50% off on {{ activeDiscount.title }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import collect from 'collect.js'
import Countdown from '@chenfengyuan/vue-countdown'
import dates from './dates'
import Btn from '@/components/Btn'

export default {
  components: {
    Countdown,
    Btn,
  },

  filters: {
    value(value) {
      return value.toString().padStart(2, 0)
    },
  },

  data() {
    const now = moment.utc()
    const dateParseFormat = 'DD.MM.YYYY hh:mm:ss'

    return {
      date: now.format('DD.MM.YY hh:mm:ss'),
      formattedDates: collect(dates)
        .map(item => {
          const end = moment(item.date, dateParseFormat).utc()
          const start = moment(end).subtract(1, 'day')
          const isActive = moment(now).isBetween(start, end)
          const countdown = isActive
            ? moment.duration(end.diff(now)).asMilliseconds()
            : 0

          return {
            ...item,
            start: start.format('YYYY-MM-DD hh:mm:ss'),
            end: end.format('YYYY-MM-DD hh:mm:ss'),
            isActive,
            countdown,
          }
        })
        .sortBy('end')
        .toArray(),
    }
  },

  computed: {
    activeDiscount() {
      return this.formattedDates.find(item => item.isActive)
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
