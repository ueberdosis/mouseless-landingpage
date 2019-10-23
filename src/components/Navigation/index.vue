<template>
  <div class="navigation">
    <div class="navigation__inner">
      <div class="navigation__logo">
        <img class="navigation__icon" src="~@/assets/images/logo.png" alt="Icon">
        <img class="navigation__name" src="~@/assets/images/name.svg" alt="Mouseless">
      </div>
      <ul class="navigation__menu">
        <li class="navigation__item">
          <a class="navigation__link" href="#features">
            Features
          </a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" :href="downloadLink" download>
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
export default {

}
</script>

<style lang="scss" src="./style.scss"></style>
