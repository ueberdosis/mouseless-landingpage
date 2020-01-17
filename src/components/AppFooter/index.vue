<template>
  <div class="app-footer small">
    <div class="app-footer__section app-footer__apps">
      <div class="app-footer__app" v-for="app in apps" :key="app.id">
        <g-link :to="app.path">
          {{ app.title }} Shortcuts
        </g-link>
      </div>
    </div>
    <div class="app-footer__section">
      <grid :options="{ default: 'backwards wide', medium: 'forwards' }">
        <grid-item :options="{ medium: '6/12' }">
          <grid :options="{ default: 'narrow', medium: 'wide' }">
            <grid-item :options="{ medium: '6/12' }">
              <ul>
                <li>
                  <g-link to="/">
                    Features
                  </g-link>
                </li>
                <li>
                  <a :href="downloadLink" download>
                    Download
                  </a>
                </li>
                <li>
                  <a :href="gumroadLink" target="_blank">
                    Buy
                  </a>
                </li>
                <li>
                  <a href="mailto:support@mouseless.app" target="_blank">
                    Support
                  </a>
                </li>
              </ul>
            </grid-item>
            <grid-item :options="{ medium: '6/12' }">
              <ul>
                <li>
                  <a href="https://floatie.app/mouseless" target="_blank">
                    Public Metrics
                  </a>
                </li>
                <li>
                  <a href="/mouseless-press-kit.zip" download>
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="https://ueberdosis.io/impressum" target="_blank">
                    Impressum
                  </a>
                </li>
              </ul>
            </grid-item>
          </grid>
          <p>
            Made with 💛 by <a href="https://twitter.com/_ueberdosis" target="_blank">überclub</a>
            · Icon designed by <a href="https://twitter.com/juliusgehrig" target="_blank">Julius Gehrig</a>
          </p>
        </grid-item>
        <grid-item :options="{ medium: '6/12' }">
          <h3>
            Be the first to know
          </h3>
          <p>
            We’ll inform you about new apps and deals.
            <br>
            No spam, we promise.
          </p>
          <newsletter-form />
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<static-query>
query {
  apps: allApp {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>

<script>
import { Grid, GridItem } from '@/components/Grid'
import NewsletterForm from '@/components/NewsletterForm'

export default {
  components: {
    Grid,
    GridItem,
    NewsletterForm,
  },

  computed: {
    apps() {
      return this.$static.apps.edges.map(edge => edge.node)
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
