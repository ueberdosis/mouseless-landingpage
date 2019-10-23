<script>
import { TweenLite } from 'gsap'

export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 200,
    },
  },

  data() {
    return {
      maxHeight: 0,
      offsetHeight: 0,
    }
  },

  render(createElement) {
    return createElement(
      'div',
      {
        ref: 'container',
        style: {
          height: 0,
          overflow: 'hidden',
        },
      },
      this.$slots.default,
    )
  },

  mounted() {
    this.render()
  },

  watch: {
    active() {
      this.render()
    },
  },

  methods: {
    render() {
      const { container } = this.$refs

      if (this.active) {
        TweenLite.set(container, { overflow: 'visible', opacity: 1, height: 'auto' })
        TweenLite.from(container, this.duration / 1000, { opacity: 0, height: 0 })
      } else {
        TweenLite.set(container, { overflow: 'hidden', opacity: 1 })
        TweenLite.to(container, this.duration / 1000, { opacity: 0, height: 0 })
      }
    },
  },
}
</script>
