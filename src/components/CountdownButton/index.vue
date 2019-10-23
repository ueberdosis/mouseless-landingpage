<template>
  <div class="countdown-button">
    <div class="countdown-button__inner">
      <countdown
        class="countdown-button__countdown"
        :time="date"
        :interval="1000"
        tag="div"
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
      <btn class="countdown-button__button">
        Buy for <s>$30</s> <span class="green">$15</span>
      </btn>
    </div>
    <div class="countdown-button__discount">
      50% off on Launch Day
    </div>
  </div>
</template>

<script>
import Countdown from '@chenfengyuan/vue-countdown'
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
    const now = new Date()
    const newYear = new Date(now.getFullYear() + 1, 0, 1)

    return {
      date: newYear - now,
    }
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
