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
        <template v-if="activeDiscount">
          Buy for ​<s>$20</s> <span class="countdown-button__price green">${{ discountedPrice }}</span>
        </template>
        <template v-else-if="showPrice">
          Buy for $20
        </template>
        <template v-else>
          Get it now
        </template>
      </btn>
    </div>
    <div class="countdown-button__discount" v-if="activeDiscount">
      {{ discountedLabel }} · 30-Day Money-Back Guarantee
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

  props: {
    showPrice: {
      default: true,
      type: Boolean,
    },
  },

  filters: {
    value(value) {
      return value.toString().padStart(2, 0)
    },
  },

  computed: {
    discountedLabel() {
      const label = []

      if (this.activeDiscount.percentage) {
        label.push(`${this.activeDiscount.percentage * 100}%`)
      } else {
        label.push('25%')
      }

      label.push(' off')

      if (this.activeDiscount.title) {
        label.push(` on ${this.activeDiscount.title}`)
      } else {
        label.push(' today')
      }

      return label.join('')
    },

    discountedPrice() {
      if (this.activeDiscount.price) {
        return this.activeDiscount.price
      }

      return 15
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
