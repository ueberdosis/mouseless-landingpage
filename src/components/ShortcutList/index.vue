<template>
  <div class="shortcut-lists">
    <div class="shortcut-lists__set" v-for="set in formattedSets" :key="set.id">
      <h3 class="shortcut-lists__set-title">
        {{ set.title }}
      </h3>
      <ul class="shortcut-lists__shortcuts">
        <li
          class="shortcut-lists__shortcut"
          v-for="(shortcut, index) in set.shortcuts"
          :key="index"
        >
          <span class="shortcut-lists__shortcut-title">
            {{ shortcut.title }}
          </span>
          <span class="shortcut-lists__shortcut-groups">
            <span
              class="shortcut-lists__shortcut-group"
              v-for="(group, groupIndex) in getGroups(shortcut.keys)"
              :key="groupIndex"
            >
              <span class="shortcut-lists__shortcut-keys">
                <key v-for="(key, keyIndex) in group" :name="key" :key="keyIndex" />
              </span>
            </span>
          </span>
        </li>
      </ul>
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

  computed: {
    formattedSets() {
      // return this.sets
      return this.sets.map(set => set)
    },
  },

  methods: {
    getGroups(data) {
      return this.getArrayDepth(data) > 1 ? data : [data]
    },

    getArrayDepth(value) {
      if (!Array.isArray(value)) {
        return 0
      }

      if (!value.length) {
        return 1
      }

      return 1 + Math.max(...value.map(this.getArrayDepth))
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
