<template>
  <div class="app">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/> -->
    <!-- <product-hunt-bar /> -->
    <header class="app__header">
      <navigation />
    </header>
    <main class="app__content">
      <slot />
    </main>
    <footer class="app__footer">
      <app-section>
        <app-footer />
      </app-section>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
// import ProductHuntBar from '@/components/ProductHuntBar'
import Navigation from '@/components/Navigation'
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    Navigation,
    AppSection,
    AppFooter,
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss"></style>
