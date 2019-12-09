<template>
  <div class="testimonials">
    <div class="testimonials__header">
      <h2>
        Feedback
        <a href="https://www.producthunt.com/posts/mouseless" target="_blank">
          <g-image class="testimonials__ratings" src="~/assets/images/producthuntratings.svg" />
        </a>
      </h2>
      <p>
        Our users love Mouseless. Here’s what they are saying:
      </p>
    </div>
    <slider>
      <div
        class="testimonials__item"
        :key="index"
        v-for="(item, index) in items"
        slot="slide"
      >
        <g-image class="testimonials__image" :src="item.avatar" v-if="item.avatar" />
        <div class="testimonials__content">
          <div class="testimonials__text" :class="{ small: item.text.length > 100 }">
            {{ item.text }}
          </div>
        </div>
        <div class="testimonials__title small">
          {{ item.title }}
        </div>
      </div>
    </slider>
  </div>
</template>

<script>
import collect from 'collect.js'
import Slider from '@/components/Slider'

export default {
  components: {
    Slider,
  },

  data() {
    return {
      items: collect([
        {
          avatar: require('~/assets/images/avatars/fallback.png'),
          text: 'I love everything about your product. The simple problem you’re solving so beautifully. The care, with which the assets (the app icon 🥰) as well as the animations and basically everything else is designed. Amazing work!!!!!!!!!!!!!!!!!!!!!!!!!!',
          title: 'Ruben Alexander Dreymann',
        },
        {
          avatar: require('~/assets/images/avatars/fallback.png'),
          text: 'Just bought your wonderful app.',
          title: 'Emil S. Zakhariev',
        },
        {
          avatar: require('~/assets/images/avatars/fallback.png'),
          text: 'Solllid.',
          title: 'Brian Roach',
        },
        {
          avatar: require('~/assets/images/avatars/fallback.png'),
          text: "Just purchased Mouseless and am loving it so far, have already mastered a few of the apple commands that I didn't know existed.",
          title: 'Crystal Lin',
        },
        {
          avatar: require('~/assets/images/avatars/thomaschretien.jpg'),
          text: 'Mouseless.app looks so organic This is the way software should be designed. @_philippkuehn and @hanspagel are peaking in terms of product design. It seemed natural for me to feature them, one more time, in the Hall of Fame of pages.xyz',
          title: 'Thomas Chrétien, pages.xyz',
        },
        {
          avatar: require('~/assets/images/avatars/davidhill.jpg'),
          text: "Snapped up a bunch of deals from independent creatives yesterday! One of my early faves is mouseless.app It's already taught me lots of new shortcuts and is always just there in the menu bar.",
          title: 'David Hill, Designer',
        },
        {
          avatar: require('~/assets/images/avatars/temirlannugmanov.jpg'),
          text: 'Found on @producthunt & bought mouseless.app by @hanspagel & @_philippkuehn on on @Gumroad. Must train my meatsticks to never use the trackpad',
          title: 'Temirlan Nugmanov',
        },
        {
          avatar: require('~/assets/images/avatars/marckoehlbrugge.jpg'),
          text: 'This is such a great idea for an app. Instant buy 👍',
          title: 'Marc Köhlbrugge, wip.chat',
        },
        {
          avatar: require('~/assets/images/avatars/brianlovin.jpg'),
          text: "I'm also very much into the design of mouseless.app + 1 for yellow + 1 for that custom scroll bar + 1 for that app icon + 1 for charging for useful software 👏 @juliusgehrig + @_philippkuehn ",
          title: 'Brian Lovin, GitHub',
        },
        {
          avatar: require('~/assets/images/avatars/jamesm.jpg'),
          text: 'Such a great little app! Insta-buy. 🙌',
          title: 'James M, Wireframe',
        },
        {
          avatar: require('~/assets/images/avatars/suryaanand.jpg'),
          text: 'Wow, such a great experience so far. I already learned a lot of shortcuts. It would be a game-changer!',
          title: 'Surya Anand, Designcode.io',
        },
        {
          avatar: require('~/assets/images/avatars/erikspiekermann.jpg'),
          text: 'Need this',
          title: 'Erik Spiekermann, Typomaniac',
        },
        {
          avatar: require('~/assets/images/avatars/diogoredin.jpg'),
          text: 'I have been wanting to train keyboard shortcuts for so long. Congrats @hanspagel, great product 🎉 Will definitely buy it. floatie.app/mouseless',
          title: 'Diogo Redin, Talkdesk',
        },
        {
          avatar: require('~/assets/images/avatars/fallback.png'),
          text: "Really love the sets, I'm already learning and remembering new tricks after just a couple days.",
          title: 'Happy customer',
        },
      ]).shuffle().toArray(),
    }
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
