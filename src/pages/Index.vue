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
        <countdown-button :show-price="false" />
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
  </Layout>
</template>

<script>
import Banner from '@/components/Banner'
import AppSection from '@/components/AppSection'
import DemoVideo from '@/components/DemoVideo'
import FlippingLogos from '@/components/FlippingLogos'
import Split from '@/components/Split'
import FeatureItem from '@/components/FeatureItem'
import CountdownButton from '@/components/CountdownButton'
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
    BlobText,
    Grid,
    GridItem,
  },

  metaInfo: {
    title: 'Mouseless',
  },
}
</script>
