<template>
  <Layout>
    <app-section>
      <h1>
        {{ app.title }}
      </h1>
      <div v-for="set in app.sets" :key="set.id">
        <h3>
          {{ set.title }}
        </h3>
        <div v-for="(shortcut, index) in set.shortcuts" :key="index">
          <span>
            {{ shortcut.title }}
          </span>
          <span>
            {{ shortcut.keys }}
          </span>
        </div>
      </div>
    </app-section>
  </Layout>
</template>

<script>
import AppSection from '@/components/AppSection'

export default {
  components: {
    AppSection,
  },

  computed: {
    app() {
      return this.$context.app
    },
  },
}
</script>
