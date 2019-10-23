<template>
  <div class="app-footer">
    <div class="app-footer__navigation small">
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
          <a href="#buy">
            Buy
          </a>
        </li>
        <li>
          <a href="#impressum">
            Impressum
          </a>
        </li>
      </ul>
    </div>
    <div class="app-footer__newsletter small">
      <h3>
        Be the first to know
      </h3>
      <p>
        We'll inform you about new apps and deals. No spam, we promise.
      </p>
      <newsletter-form />
    </div>
  </div>
</template>

<script>
import NewsletterForm from '@/components/NewsletterForm'

export default {
  components: {
    NewsletterForm,
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
