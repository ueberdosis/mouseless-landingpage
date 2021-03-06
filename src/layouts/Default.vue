<template>
  <div class="app">
    <!-- <product-hunt-bar /> -->
    <header class="app__header">
      <navigation :theme="navigationTheme" />
    </header>
    <main class="app__content">
      <slot />

      <app-section>
        <client-only>
          <testimonials />
        </client-only>
      </app-section>

      <app-section>
        <call-to-action>
          <h2>
            Get it done faster
          </h2>
          <p>
            Master all of the magic keystrokes for your favorite apps & tools.
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
            <accordion title="Is there a list of supported apps?">
              <p>
                Mouseless comes with exercises for {{ appsList }}.
              </p>
              <p>
                However, the menu bar dropdown supports every app that is currently open.
              </p>
            </accordion>
            <accordion title="Do you offer a trial?">
              <p>
                We didn’t implement a trial yet, but no worries—feel free to purchase the app.
                If you’re not happy send a short message. We’ll refund your order.
              </p>
              <p>
                By the way, we’re part of the <a href="https://go.setapp.com/stp268?refAppID=379&utm_medium=available_on_setapp_button&utm_source=379&utm_campaign=https://mouseless.app/">SetApp</a> catalogue and they offer a free trial for 7 days. They give you access to 170+ apps, including Mouseless.
              </p>
            </accordion>
            <accordion title="The menubar app doesn’t work. What can I do?">
              <p>
                Mouseless requires the accessibility permission
                in “System Preferences › Security & Privacy › Privacy › Accessibility”.
              </p>
              <p>
                For macOS 10.15 (Catalina) the screen recording permission
                in “System Preferences › Security & Privacy › Privacy › Screen Recording”
                is required too. Don’t worry—we don’t record your screen.
              </p>
            </accordion>
            <accordion title="Is there a Windows app?">
              <p>
                Nope, not for now. But give us a shout and we’ll consider it.
              </p>
            </accordion>
            <accordion title="Something’s wrong. How do I get in touch?">
              <p>
                <a href="mailto:support@mouseless.app">Drop us a line</a>, we’ll be happy to help!
              </p>
            </accordion>
          </grid-item>
          <grid-item :options="{ medium: '6/12'}">
            <accordion title="I can’t find my favorite app. Will you update Mouseless?">
              <p>
                Sure, we have set up a <a href="https://feedback.mouseless.app">public feedback board</a> to gather app requests. Submit all the apps you miss or any other ideas you might have.
              </p>
            </accordion>
            <accordion title="Can I ditch my mouse for good?">
              <p>
                Nooo! Mouseless is not about getting rid of your mouse—you’ll always need it! But you’ll spend less time with mouse clicking.
              </p>
            </accordion>
            <accordion title="How long does it take before I see results?">
              <p>
                The amount of keyboard shortcuts for each app or tool varies,
                so there cannot possibly be a general answer to that. Of course,
                individual learning behavior affects the result as well.
                Try to establish a daily study routine, put your knowledge into
                practice, and you should see results rather quickly.
              </p>
            </accordion>
            <accordion title="My country’s keyboard layout is not supported. Now what?">
              <p>
                <a href="mailto:support@mouseless.app">Send us more details</a>, please.
                As of now, Mouseless does not support every single keyboard layout known to man,
                but hey: goals!
              </p>
            </accordion>
          </grid-item>
        </grid>
      </app-section>

      <app-section color="black" id="download">
        <h2>
          Download
        </h2>
        <div>
          <download-btn
            icon="apple"
            label="Download for"
            text="macOS"
            :href="downloadLink"
            meta="macOS 10.14 or higher"
          />
          <download-btn
            icon="setapp"
            label="Available on"
            text="Setapp"
            href="https://go.setapp.com/stp268?refAppID=379&utm_medium=available_on_setapp_button&utm_source=379&utm_campaign=https://mouseless.app/"
            :download="false"
          />
        </div>
      </app-section>
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
  apps: allApp {
    edges {
      node {
        title
      }
    }
  }
}
</static-query>

<script>
// import ProductHuntBar from '@/components/ProductHuntBar'
import DownloadBtn from '@/components/DownloadBtn'
import Navigation from '@/components/Navigation'
import AppSection from '@/components/AppSection'
import AppFooter from '@/components/AppFooter'
import Accordion from '@/components/Accordion'
import CountdownButton from '@/components/CountdownButton'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'
import { Grid, GridItem } from '@/components/Grid'

export default {
  components: {
    DownloadBtn,
    Navigation,
    AppSection,
    AppFooter,
    Accordion,
    CountdownButton,
    CallToAction,
    Testimonials,
    Grid,
    GridItem,
  },

  props: {
    navigationTheme: {
      default: 'dark',
      type: String,
    },
  },

  computed: {
    appsList() {
      return this.$static.apps.edges.map(edge => edge.node.title).join(', ')
    },
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss"></style>
