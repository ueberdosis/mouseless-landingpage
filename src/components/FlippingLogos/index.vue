<template>
  <div class="flipping-logos">
    <div class="flipping-logos__item" v-for="logo in renderedLogos" :key="logo.id">
      <flipping-logo :ref="logo.id" :logo="logo" />
    </div>
  </div>
</template>

<static-query>
query {
  apps: allApp {
    edges {
      node {
        id
      }
    }
  }
}
</static-query>

<script>
import { v4 as uuid } from 'uuid'
import collect from 'collect.js'
import FlippingLogo from '@/components/FlippingLogo'

export default {
  components: {
    FlippingLogo,
  },

  data() {
    return {
      limit: 12,
      logos: [],
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
    this.logos = this.$static.apps.edges.map(edge => edge.node.id)
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

<style lang="scss" src="./style.scss"></style>
