<template>
  <div class="app-home">
    <img src="/images/logo.svg" height="100" />
    <div class="buttons">
      <el-button type="primary" @click="goRegister">Cadastrar</el-button>
      <el-button type="outline" @click="goLogin">Entrar</el-button>
    </div>
    <a href="https://github.com/alexandesigner/realtime-news"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" target="_blank"></a>
  </div>
</template>

<script>
  export default {
    name: 'app-home',
    methods: {
      goRegister () {
        this.$router.push({name:'auth-register'})
      },
      goLogin () {
        this.$router.push({name:'auth-login'})
      }
    }
  }
</script>

<style lang="stylus" scoped>
.app-home
  display flex
  align-items center
  justify-content center
  flex-direction column
  height 100%
  .buttons
    margin-top 20px
    display flex
    align-items center
    justify-content center
    .el-button
      font-weight bold
  img
    margin 0 auto
</style>
