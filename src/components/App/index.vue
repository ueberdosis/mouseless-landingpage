<template>
  <div class="app">
    <div class="app__left">
      <div class="app__left-inner">
        <img class="app__logo" src="@/assets/images/logo.png">
        <h1 class="app__title">
          The #1 Way to Get Productivity Superpowers
        </h1>
        <p class="app__subtitle">
          A beautiful way to become better with all the creative tools you already know and love.
          Sign up to find out when it’s ready.
        </p>
        <newsletter-form class="app__form" />
        <p>
          Made with ❤️ by Philipp Kühn & Hans Pagel<br />
          Icon designed by <a href="https://julius.fm/">Julius Gehrig</a><br />
          © 2019 <a href="https://twitter.com/_ueberdosis">überdosis</a>
        </p>
      </div>
    </div>
    <div class="app__right">
      <flipping-logos class="app__logos" />
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
