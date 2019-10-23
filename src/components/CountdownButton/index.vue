<template>
  <div class="countdown-button">
    <countdown
      class="countdown-button__countdown"
      :time="date"
      :interval="1000"
      tag="div"
    >
      <template v-slot="{ days, hours, minutes, seconds }">
        <div class="countdown-button__item">
          {{ days }}
        </div>
        <div class="countdown-button__item">
          {{ hours }}
        </div>
        <div class="countdown-button__item">
          {{ minutes }}
        </div>
        <div class="countdown-button__item">
          {{ seconds }}
        </div>
      </template>
    </countdown>
    <btn>
      Buy for $15
    </btn>
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
