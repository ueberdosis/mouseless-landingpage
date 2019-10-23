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
            <a href="#download">
              Download
            </a>
          </li>
          <li>
            <a :href="gumroadLink" target="_blank">
              Buy
            </a>
          </li>
          <li>
            <a href="#impressum">
              Impressum
            </a>
          </li>
        </ul>
        <p>
          © 2019 überclub
        </p>
      </grid-item>
      <grid-item :options="{ medium: '6/12' }">
        <h3>
          Be the first to know
        </h3>
        <p>
          We'll inform you about new apps and deals. No spam, we promise.
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
