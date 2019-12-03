<template>
  <Layout>
    <app-section color="yellow">
      <banner>
        <h1>
          Unleash your keyboard’s superpower
        </h1>
        <p>
          Wading through shortcuts, and it’s too hard to remember any?
          Get those keystrokes ingrained in your muscle memory for good.
        </p>
        <countdown-button />
      </banner>
    </app-section>

    <app-section show-wave>
      <demo-video />
    </app-section>

    <app-section id="features">
      <split>
        <template v-slot:text>
          <h2>
            Interactive Training
          </h2>
          <p>
            A session takes less than 5 minutes and covers about 10 shortcuts.
            Apply your new skills right away to reinforce your learning experience.
          </p>
        </template>
        <template v-slot:media>
          <img class="rounded-image" src="~@/assets/images/keys.png" alt="">
        </template>
      </split>
    </app-section>

    <app-section>
      <split flipped>
        <template v-slot:text>
          <h2>
            Boost your productivity
          </h2>
          <p>
            Stop chasing your mouse and save up to 8 days a year.
            Surely, you’ll find something better to do with your time.
          </p>
        </template>
        <template v-slot:media>
          <video
            class="rounded-image"
            src="@/assets/videos/coffee.mp4"
            playsinline
            autoplay
            muted
            loop
          />
        </template>
      </split>
    </app-section>

    <app-section>
      <blob-text>
        <p>
          <span class="yellow">Mouseless</span> caters shortcuts for your favorite apps
          in bite-sized exercises to you.
        </p>
        <p>
          Interactive drills <span class="yellow">train the muscle-memory</span>
          <img class="brain" src="@/assets/images/brain.svg" alt="">required
          to have your fingers flying across the keyboard.
        </p>
      </blob-text>
    </app-section>

    <app-section>
      <split>
        <template v-slot:text>
          <h2>
            Need to cheat?
          </h2>
          <p>
            Look up a shortcut within your current app.
            Works with every app you’ve ever installed.
          </p>
        </template>
        <template v-slot:media>
          <video
            class="rounded-image"
            src="@/assets/videos/menubar.mp4"
            playsinline
            autoplay
            muted
            loop
            poster="~@/assets/images/menubar.png"
          />
        </template>
      </split>
    </app-section>

    <app-section>
      <split flipped>
        <template v-slot:text>
          <h2>
            All your favorites in one place
          </h2>
          <p>
            Cover the basics with shortcuts for macOS or let your fingers fly
            in one of the 14 apps and tools you already love.
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
          <feature-item title="1.000+ Shortcuts" icon="database">
            With our database you’ve got more than 1.000 keyboard commands at your fingertips,
            subdivided by app and category.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Keyboard Optimization" icon="globe">
            Mouseless translates shortcuts to the language requirements of your keyboard.
          </feature-item>
        </grid-item>
        <grid-item :options="{ medium: '4/12'}">
          <feature-item title="Offline Support" icon="offline">
            No Wi-fi – no problem.
            Mouseless runs just as smoothly in a rustic cabin as on a plane.
          </feature-item>
        </grid-item>
      </grid>
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
              Nope, not for now. But <a href="mailto:support@mouseless.app">give us a shout</a>
              and we’ll consider it.
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
  </Layout>
</template>

<script>
import Banner from '@/components/Banner'
import AppSection from '@/components/AppSection'
import DemoVideo from '@/components/DemoVideo'
import FlippingLogos from '@/components/FlippingLogos'
import Split from '@/components/Split'
import FeatureItem from '@/components/FeatureItem'
import Accordion from '@/components/Accordion'
import CountdownButton from '@/components/CountdownButton'
import CallToAction from '@/components/CallToAction'
import BlobText from '@/components/BlobText'
import { Grid, GridItem } from '@/components/Grid'

export default {
  components: {
    Banner,
    AppSection,
    DemoVideo,
    FlippingLogos,
    Split,
    FeatureItem,
    CountdownButton,
    Accordion,
    CallToAction,
    BlobText,
    Grid,
    GridItem,
  },
}
</script>