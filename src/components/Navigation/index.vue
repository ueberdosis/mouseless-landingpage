<template>
  <div class="navigation">
    <div class="navigation__inner">
      <g-link class="navigation__logo" to="/">
        <img class="navigation__icon" src="~@/assets/images/logo.png" alt="Icon">
        <img class="navigation__name" src="~@/assets/images/name.svg" alt="Mouseless">
      </g-link>
      <ul class="navigation__menu">
        <li class="navigation__item">
          <g-link class="navigation__link" to="/">
            Features
          </g-link>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" :href="downloadLink" download>
            <icon name="apple" />
            Download
          </a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" :href="gumroadLink" target="_blank">
            Buy
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
