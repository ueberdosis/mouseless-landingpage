<template>
  <div class="split">
    <div class="split__text">
      <slot name="text" />
    </div>
    <div class="split__media">
      <slot name="media" />
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
