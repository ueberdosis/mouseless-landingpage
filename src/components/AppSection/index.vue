<template>
  <section :class="['app-section', `app-section--${color}`]">
    <img
      class="app-section__wave"
      src="~@/assets/images/wave.svg"
      alt=""
      v-if="showWave"
    >
    <div class="app-section__inner">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      default: 'black',
      type: String,
    },

    showWave: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
