<template>
  <div class="countdown-button" :class="{ 'has-discount': activeDiscount }">
    <div class="countdown-button__inner">
      <client-only>
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
      </client-only>
      <btn :href="gumroadLink" target="_blank" class="countdown-button__button">
        Buy for
        <template v-if="activeDiscount">
          <s>$20</s> <span class="green">$15</span>
        </template>
        <template v-else>
          $20
        </template>
      </btn>
    </div>
    <div class="countdown-button__discount" v-if="activeDiscount">
      25% off on {{ activeDiscount.title }} · 30-Day Money-Back Guarantee
    </div>
    <div class="countdown-button__discount" v-else>
      30-Day Money-Back Guarantee
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
}
</script>

<style lang="scss" src="./style.scss"></style>
