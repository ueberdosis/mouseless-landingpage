<template>
  <div class="app">
    <div class="app__left">
      <div class="app__left-inner">
        <img class="app__logo" src="@/assets/images/logo.png">
        <h1 class="app__title">
          Speed up your daily work
        </h1>
        <p class="app__subtitle">
          If you want to get productivity superpowers, sign up for the beta users mailing list!
        </p>
        <newsletter-form class="app__form" />
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
