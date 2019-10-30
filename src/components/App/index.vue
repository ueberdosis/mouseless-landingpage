<template>
  <div class="app">
    <div class="app__left">
      <div class="app__left-inner">
        <img class="app__logo" src="@/assets/images/logo.png">
        <h1 class="app__title">
          Unleash your keyboard's superpower
        </h1>
        <p class="app__subtitle">
          A beautiful way to get better at all the creative tools you already know and love.
          Sign up to find out when it’s ready.
        </p>
        <newsletter-form class="app__form" />
        <p class="app__footer">
          Made with ❤️ by <a href="https://twitter.com/_ueberdosis" target="_blank">überclub</a> · Icon designed by <a href="https://twitter.com/juliusgehrig" target="_blank">Julius Gehrig</a>
        </p>
      </div>
    </div>
    <div class="app__right">
      <div class="app__right-inner">
        <flipping-logos class="app__logos" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsletterForm from '@/components/NewsletterForm'
import FlippingLogos from '@/components/FlippingLogos'

export default {
  components: {
    NewsletterForm,
    FlippingLogos,
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss" scoped></style>
