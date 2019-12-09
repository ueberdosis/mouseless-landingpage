<template>
  <div class="testimonials">
    <slider>
      <div
        class="testimonials__item"
        :key="index"
        v-for="(item, index) in items"
        slot="slide"
      >
        <g-image class="testimonials__image" :src="item.avatar" />
        <div class="testimonials__content">
          <div class="testimonials__text small">
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
import Slider from '@/components/Slider'

export default {
  components: {
    Slider,
  },

  data() {
    return {
      items: [
        {
          avatar: require('~/assets/images/avatars/brianlovin.jpg'),
          title: 'Brian Lovin, GitHub',
          text: 'OMG. Thi is the best app I’ve ever seen. It’s brilliant. It’s fantastic. OMG. Thi is the best app I’ve ever seen. It’s brilliant. It’s fantastic. OMG. Thi is the best app I’ve ever seen.',
        },
        {
          avatar: require('~/assets/images/avatars/brianlovin.jpg'),
          title: 'Brian Lovin, GitHub',
          text: 'OMG. Thi is the best app I’ve ever seen. It’s brilliant. It’s fantastic. OMG. Thi is the best app I’ve ever seen.',
        },
        {
          avatar: require('~/assets/images/avatars/brianlovin.jpg'),
          title: 'Brian Lovin, GitHub',
          text: 'OMG. Thi is the best app I’ve ever seen. It’s brilliant. It’s fantastic. OMG. Thi is the best app I’ve ever seen. It’s brilliant. It’s fantastic. OMG. Thi is the best app I’ve ever seen. It’s brilliant. It’s fantastic.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
