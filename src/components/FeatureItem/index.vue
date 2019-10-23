<template>
  <div class="feature-item">
    <h3>
      <div class="feature-item__icon-wrapper" v-if="icon">
        <icon :name="icon" />
      </div>
      {{ title }}
    </h3>
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
