<template>
<header class="navbar" :class="{ 'hide': $route.name==='home'}">
    <h1 class="logo">
      <router-link to="/">
        <img src="/images/logo-white.svg" height="44" />
      </router-link>
    </h1>
</header>
</template>

<script>
export default {
    data() {
        return {
            hideBar: true
        }
    }
}
</script>

<style scoped lang="stylus">
.navbar
  margin 0
  text-align center
  background #ff8e01;
  background -moz-linear-gradient(left, #ff8e01 0%, #ff3b32 100%)
  background -webkit-linear-gradient(left, #ff8e01 0%,#ff3b32 100%)
  background linear-gradient(to right, #ff8e01 0%,#ff3b32 100%)
  display table
  width 100%
  padding 0
  .logo
    display table
    margin 5px auto
    line-height 0
    img
      display block
      height 44px
  .menu
    float right
    margin 4px 0
    a
      display inline-block
      padding 6px
      margin 0 6px
      border-radius 3px
    a.v-link-active
      background #40b883
      color white
</style>
