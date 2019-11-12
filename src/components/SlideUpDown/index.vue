<script>
import gsap from 'gsap'

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
        gsap.set(container, { overflow: 'visible', opacity: 1, height: 'auto' })
        gsap.from(container, this.duration / 1000, { opacity: 0, height: 0 })
      } else {
        gsap.set(container, { overflow: 'hidden', opacity: 1 })
        gsap.to(container, this.duration / 1000, { opacity: 0, height: 0 })
      }
    },
  },
}
</script>
