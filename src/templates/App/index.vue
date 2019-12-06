<template>
  <Layout navigation-theme="bright">
    <app-section>
      <div class="app-page">
        <h1>
          {{ app.title }}
        </h1>
        <p v-if="app.description">
          {{ app.description }}
        </p>
        <div class="app-page__hint">
          <g-image class="app-page__flag" src="~/assets/images/UK.png" />
          <div>
            The following shortcuts are optimized for english keyboard layouts.
            <g-link to="/">
              Mouseless
            </g-link>
            converts these shortcuts to your currently used keyboard.
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
