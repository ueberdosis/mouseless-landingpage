<template>
  <div class="flipping-logos">
    <div class="flipping-logos__item" v-for="logo in renderedLogos" :key="logo.id">
      <flipping-logo :ref="logo.id" :logo="logo" />
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v4'
import collect from 'collect.js'
import FlippingLogo from '@/components/FlippingLogo'

export default {
  components: {
    FlippingLogo,
  },

  data() {
    return {
      logos: [
        'figma',
        'vscode',
        'slack',
        'googledocs',
        'finder',
        'gmail',
        'trello',
        'sketch',
        'adobexd',
        'notion',
        'bear',
        'chrome',
        'macos',
      ],
      limit: 12,
      filteredLogos: [],
      renderedLogos: [],
    }
  },

  methods: {
    flip() {
      const random = collect(this.filteredLogos).random()
      const newLogo = collect(this.logos)
        .filter(logo => !this.filteredLogos.find(filteredLogo => filteredLogo.name === logo))
        .random()
      const ref = this.$refs[random.id]

      ref[0].replaceWith(newLogo)

      this.filteredLogos = this.filteredLogos
        .map(filteredLogo => {
          if (filteredLogo.id === random.id) {
            return {
              ...filteredLogo,
              name: newLogo,
            }
          }

          return filteredLogo
        })
    },
  },

  mounted() {
    this.filteredLogos = collect(this.logos)
      .shuffle()
      .take(this.limit)
      .map(logo => ({
        id: uuid(),
        name: logo,
      }))
      .toArray()

    this.renderedLogos = [...this.filteredLogos]

    this.interval = setInterval(this.flip, 2000)
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
