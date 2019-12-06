<template>
  <div class="shortcut-lists">
    <div class="shortcut-lists__set" v-for="set in sets" :key="set.id">
      <h3 class="shortcut-lists__set-title">
        {{ set.title }}
      </h3>
      <div class="shortcut-lists__shortcut" v-for="(shortcut, index) in set.shortcuts" :key="index">
        <span class="shortcut-lists__shortcut-title">
          {{ shortcut.title }}
        </span>
        <span class="shortcut-lists__shortcut-keys">
          <key v-for="(key, keyIndex) in shortcut.keys" :name="key" :key="keyIndex" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Key from '@/components/Key'

export default {
  props: {
    sets: {
      default: () => [],
      type: Array,
    },
  },

  components: {
    Key,
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
