<template>
  <div class="app">
    <!-- <product-hunt-bar /> -->
    <header class="app__header">
      <navigation :theme="navigationTheme" />
    </header>
    <main class="app__content">
      <slot />

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
                Gmail, Slack, Adobe XD, Figma, Sketch, VS Code, Bear,
                Google Docs, iA Writer, Notion, Things, Trello, Chrome, Finder, Firefox, macOS.
              </p>
              <p>
                However, the menu bar dropdown supports every app that is currently open.
              </p>
            </accordion>
            <accordion title="Do you offer a trial?">
              <p>
                We didn't implement a trial yet, but no worries - feel free to purchase the app.
                If it's not for you send a short message. We'll refund your order.
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
                is required too. Don’t worry – we don’t record your screen.
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
                Hm, we might.
                <a href="mailto:support@mouseless.app">Get in touch</a> so we know how to improve!
              </p>
            </accordion>
            <accordion title="Can I ditch my mouse for good?">
              <p>
                Noooooo! Mouseless is not about getting rid of your mouse –
                you’ll always need it! But you’ll spend less time with mouse clicking.
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
import Accordion from '@/components/Accordion'
import CountdownButton from '@/components/CountdownButton'
import CallToAction from '@/components/CallToAction'
import { Grid, GridItem } from '@/components/Grid'

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
    Accordion,
    CountdownButton,
    CallToAction,
    Grid,
    GridItem,
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./app.scss"></style>
