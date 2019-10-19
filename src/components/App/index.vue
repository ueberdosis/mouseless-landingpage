<template>
  <div>
    <mailchimp-subscribe
      login="ueber"
      data-center="us17"
      user-id="1bc6d9d915dfd1f9d0950399d"
      list-id="603ad75049"
    >
      <template v-slot="{ subscribe, setEmail, error, success }">
        <form @submit.prevent="subscribe">
          <input type="text" @input="setEmail($event.target.value)" />
          <button type="submit">
            Submit
          </button>
          <div v-if="error">
            {{ error }}
          </div>
          <div v-if="success">
            YAY!
          </div>
        </form>
      </template>
    </mailchimp-subscribe>
  </div>
</template>

<script>
import MailchimpSubscribe from '@/components/MailchimpSubscribe'

export default {
  components: {
    MailchimpSubscribe,
  }
}
</script>
