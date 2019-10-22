<template>
  <div class="app">
    <header class="app__header">
      navi
    </header>
    <main>
      <app-section color="yellow">
        <h1>
          Speed up your daily work
        </h1>
        <p>
          If you want to get productivity superpowers, sign up for the beta users mailing list!
        </p>
      </app-section>

      <app-section show-wave>
        <demo-video />
      </app-section>

      <app-section>
        <split>
          <template v-slot:text>
            <h2>
              Support for your favorite apps
            </h2>
            <p>
              Wow this feature is so great. It’s amazing.
              Wow this feature is so great. Wow this feature is so great.
              Unbelievable.
            </p>
          </template>
          <template v-slot:media>
            <flipping-logos />
          </template>
        </split>
      </app-section>
    </main>
    <footer class="app__footer">
      <app-section>
        <app-footer />
      </app-section>
    </footer>
  </div>
</template>

<script>
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'
import DemoVideo from '@/components/DemoVideo'
import FlippingLogos from '@/components/FlippingLogos'
import Split from '@/components/Split'

export default {
  components: {
    AppSection,
    AppFooter,
    DemoVideo,
    FlippingLogos,
    Split,
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss" scoped></style>
