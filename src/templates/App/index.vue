<template>
  <Layout navigation-theme="bright">
    <app-section>
      <div class="app-page">
        <h1>
          {{ app.title }}
        </h1>
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
