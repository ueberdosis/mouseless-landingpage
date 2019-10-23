<template>
  <div class="app">
    <header class="app__header">
      <navigation />
    </header>
    <main class="app__content">
      <app-section color="yellow">
        <h1>
          Speed up your daily work
        </h1>
        <p>
          If you want to get productivity superpowers, sign up for the beta users mailing list!
        </p>
        <countdown-button />
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

      <app-section>
        <split flipped>
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

      <app-section>
        <grid :options="{ medium: 'wide'}">
          <grid-item :options="{ medium: '4/12'}">
            <feature-item title="1000+ shortcuts" icon="arrow-down">
              Wow this feature is so great. It’s amazing.
              Wow this feature is so great. Wow this feature is so great. Unbelievable.
            </feature-item>
          </grid-item>
          <grid-item :options="{ medium: '4/12'}">
            <feature-item title="1000+ shortcuts" icon="arrow-down">
              Wow this feature is so great. It’s amazing.
              Wow this feature is so great. Wow this feature is so great. Unbelievable.
            </feature-item>
          </grid-item>
          <grid-item :options="{ medium: '4/12'}">
            <feature-item title="1000+ shortcuts" icon="arrow-down">
              Wow this feature is so great. It’s amazing.
              Wow this feature is so great. Wow this feature is so great. Unbelievable.
            </feature-item>
          </grid-item>
        </grid>
      </app-section>

      <app-section>
        <call-to-action>
          <h2>
            Get Mouseless
          </h2>
          <p>
            Increase your productivity by learning shortcuts for your favorite apps and tools.
          </p>
          <countdown-button />
        </call-to-action>
      </app-section>

      <app-section>
        <h2>
          FAQ
        </h2>
        <grid :options="{ medium: 'wide'}">
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Is there a Windows app?">
              <p>
                Wow this feature is so great. It’s amazing.
                Wow this feature is so great. Wow this feature is so great. Unbelievable.
              </p>
            </accordion>
            <accordion title="What how why whatever?">
              <p>
                Wow this feature is so great. It’s amazing.
                Wow this feature is so great. Wow this feature is so great. Unbelievable.
              </p>
            </accordion>
            <accordion title="I’m missing app XYZ. What to do?">
              <p>
                Wow this feature is so great. It’s amazing.
                Wow this feature is so great. Wow this feature is so great. Unbelievable.
              </p>
            </accordion>
          </grid-item>
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="Is there a Windows app?">
              <p>
                Wow this feature is so great. It’s amazing.
                Wow this feature is so great. Wow this feature is so great. Unbelievable.
              </p>
            </accordion>
            <accordion title="What how why whatever?">
              <p>
                Wow this feature is so great. It’s amazing.
                Wow this feature is so great. Wow this feature is so great. Unbelievable.
              </p>
            </accordion>
            <accordion title="I’m missing app XYZ. What to do?">
              <p>
                Wow this feature is so great. It’s amazing.
                Wow this feature is so great. Wow this feature is so great. Unbelievable.
              </p>
            </accordion>
          </grid-item>
        </grid>
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
import Navigation from '@/components/Navigation'
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'
import DemoVideo from '@/components/DemoVideo'
import FlippingLogos from '@/components/FlippingLogos'
import Split from '@/components/Split'
import FeatureItem from '@/components/FeatureItem'
import Accordion from '@/components/Accordion'
import CountdownButton from '@/components/CountdownButton'
import CallToAction from '@/components/CallToAction'
import { Grid, GridItem } from '@/components/Grid'

export default {
  components: {
    Navigation,
    AppSection,
    AppFooter,
    DemoVideo,
    FlippingLogos,
    Split,
    FeatureItem,
    CountdownButton,
    Accordion,
    CallToAction,
    Grid,
    GridItem,
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss"></style>
