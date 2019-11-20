<template>
  <div class="app-footer small">
    <grid :options="{ default: 'backwards wide', medium: 'forwards' }">
      <grid-item :options="{ medium: '6/12' }">
        <ul>
          <li>
            <a href="#features">
              Features
            </a>
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
            <a href="https://floatie.app/mouseless" target="_blank">
              Open
            </a>
          </li>
          <li>
            <a href="https://ueberdosis.io/impressum" target="_blank">
              Impressum
            </a>
          </li>
        </ul>
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
          We'll inform you about new apps and deals.
          <br>
          No spam, we promise.
        </p>
        <newsletter-form />
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from '@/components/Grid'
import NewsletterForm from '@/components/NewsletterForm'

export default {
  components: {
    Grid,
    GridItem,
    NewsletterForm,
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
