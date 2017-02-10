<template>
  <div class="home-page">
    <div class="inner">
      <router-link to="/coverages" class="logo">
        <img src="/images/logo.svg" width="380" />
      </router-link>
    </div>
    <a href="https://github.com/alexandesigner/realtime-news"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
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
        border-color #FF6C15
        color #FF6C15
</style>
