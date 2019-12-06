<template>
  <div class="app">
    <!-- <product-hunt-bar /> -->
    <header class="app__header">
      <navigation :theme="navigationTheme" />
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

<script>
// import ProductHuntBar from '@/components/ProductHuntBar'
import Navigation from '@/components/Navigation'
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'

export default {
  props: {
    navigationTheme: {
      default: 'dark',
      type: String,
    },
  },

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
