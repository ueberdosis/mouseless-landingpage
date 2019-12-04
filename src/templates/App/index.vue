<template>
  <Layout>
    <app-section>
      <h1>
        {{ app.title }}
      </h1>
      <div>
        {{ app.sets }}
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
