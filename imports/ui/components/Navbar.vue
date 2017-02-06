<template>
  <header class="navbar">
    <h1 class="logo">
      <img src="/images/logo.svg" height="38" />
    </h1>
    <nav class="menu">
      <router-link :to="{ name:'home' }" exact>Home</router-link>
      <router-link :to="{ name:'posts' }">Posts</router-link>
    </nav>
  </header>
</template>

<style scoped lang="stylus">
.navbar
  margin 0
  text-align center
  box-shadow 0 0 12px -2px rgba(0, 0, 0, 0.28)
  display table
  width 92%
  padding 15px 4%
  .logo
    float left
    margin 0
    line-height 0
    img
      display block
  .menu
    float right
  a
    display inline-block
    padding 6px
    margin 0 6px
    border-radius 3px
  a.v-link-active
    background #40b883
    color white
</style>
