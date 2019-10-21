<template>
  <mailchimp-subscribe
    login="ueber"
    data-center="us17"
    user-id="1bc6d9d915dfd1f9d0950399d"
    list-id="603ad75049"
  >
    <template v-slot="{ subscribe, setEmail, error, success }">
      <form class="newsletter-form" @submit.prevent="subscribe">
        <input class="newsletter-form__input" type="email" @input="setEmail($event.target.value)">
        <button class="newsletter-form__button" type="submit">
          Submit
        </button>
        <div class="newsletter-form__error" v-if="error">
          {{ error }}
        </div>
      </form>
    </template>
  </mailchimp-subscribe>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  components: {
    MailchimpSubscribe,
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
