<template>
  <nav>
    <div class="app-title">
      <img src="images/logo-white.svg" height="36" />
    </div>
    <router-link :to="{ name: 'home' }" exact>Home</router-link>
    <router-link :to="{ name: 'events' }">Events</router-link>
    <router-link :to="{ name: 'coverages' }">Coverages</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import "../style/imports"

nav
  background #ff8e01
  background -moz-linear-gradient(left, #ff8e01 0%, #ff3b32 100%)
  background -webkit-linear-gradient(left, #ff8e01 0%,#ff3b32 100%)
  background linear-gradient(to right, #ff8e01 0%,#ff3b32 100%)
  display flex
  flex-direction row
  align-items center
  color white
  padding-top 24px

  > *
    flex 0 0 auto

  a
    color white
    display inline-block
    padding 16px 28px
    border-radius 3px 3px 0 0

    &:hover
      background lighten(app-color, 10%)

    &.router-link-active
      background page-background
      color app-color

.app-title
  font-size 1.3rem
  padding 0 18px

</style>
