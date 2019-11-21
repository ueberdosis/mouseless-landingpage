<template>
  <div class="feature-item">
    <div class="feature-item__header">
      <div class="feature-item__icon-wrapper" v-if="icon">
        <icon class="feature-item__icon" :name="icon" />
      </div>
      <h3 class="feature-item__title">
        {{ title }}
      </h3>
    </div>
    <p class="small">
      <slot />
    </p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },

  props: {
    title: {
      required: true,
      type: String,
    },

    icon: {
      default: null,
      type: String,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
