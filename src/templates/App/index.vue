<template>
  <Layout navigation-theme="bright">
    <app-section>
      <h1>
        {{ app.title }}
      </h1>
      <shortcut-list :sets="app.sets" />
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
