<template>
  <div class="home-page">
    <div class="inner">
      <router-link to="/" class="logo">
        <img src="/images/logo.svg" width="380" />
      </router-link>
      <div class="buttons">
        <router-link to="/coverages" class="uk-button uk-button-default">
          Coverages
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonLabel: 'Click me!',
    }
  }
};
</script>

<style scoped lang="stylus">
.home-page
  display table
  width 100%
  height 100%
  position relative
  padding 40px 0
  .inner
    display table-cell
    vertical-align middle
  .logo
    display table
    margin 20px auto
  .buttons
    display table
    width 100%
    position relative
    text-align center
    a
      padding 0 10px
      line-height 38px
      display inline-block
      border-radius 3px
      background #fff
      border-radius 28px
      &:hover
        border-color #27AE60
        color #27AE60
</style>
