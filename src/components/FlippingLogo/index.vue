<template>
  <div class="flipping-logo" :class="{ 'is-flipping': isFlipping }">
    <div class="flipping-logo__inner">
      <div class="flipping-logo__front">
        <img class="flipping-logo__image" :src="require(`@/assets/logos/${name}.svg`)">
      </div>
      <div class="flipping-logo__card" />
      <div class="flipping-logo__back" v-if="newName">
        <img class="flipping-logo__image" :src="require(`@/assets/logos/${newName}.svg`)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      name: this.logo.name,
      newName: null,
      isFlipping: false,
    }
  },

  methods: {
    replaceWith(name) {
      this.newName = name

      this.$forceNextTick(() => {
        this.isFlipping = true
      })

      this.timeout = setTimeout(() => {
        this.name = this.newName
        this.newName = null
        this.isFlipping = false
      }, 1000)
    },
  },

  beforeDestroy() {
    clearTimeout(this.timeout)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
