<template>
  <kbd class="small-key" :title="name">
    {{ name | key | uppercase }}
  </kbd>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
