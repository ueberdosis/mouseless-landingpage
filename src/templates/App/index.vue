<template>
  <Layout navigation-theme="bright">
    <app-section>
      <div class="app-page">
        <h1>
          Keyboard Shortcuts for {{ app.title }}
        </h1>
        <p v-if="app.description">
          {{ app.description }}
        </p>
        <div class="app-page__hint">
          <div>
            All listed keyboard shortcuts are optimized for the English keyboard layout.
            <!-- eslint-disable-next-line -->
            <g-link to="/">Mouseless</g-link> is clever enough to
            show the exact keys according to your layout.
          </div>
        </div>
      </div>
    </app-section>
    <app-section>
      <div class="app-page">
        <shortcut-list :sets="app.sets" />
      </div>
    </app-section>
  </Layout>
</template>

<script>
import AppSection from '@/components/AppSection'
import ShortcutList from '@/components/ShortcutList'

export default {
  components: {
    AppSection,
    ShortcutList,
  },

  computed: {
    app() {
      return this.$context.app
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
