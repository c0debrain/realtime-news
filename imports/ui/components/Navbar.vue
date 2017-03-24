<template>
<header class="uk-navbar uk-navbar-container navbar" :class="{ 'hide': $route.name === 'home'}">
    <div class="uk-navbar-left">
      <span class="back-to-home" uk-icon="icon: arrow-left;ratio: 2" @click="goBack"></span>
    </div>
    <div class="uk-navbar-center">
      <h1 class="logo">
        <img src="/images/logo-white.svg" width="170" height="44" />
      </h1>
    </div>
    <!-- <div class="uk-navbar-right">
      ...
    </div> -->
</header>
</template>

<script>
export default {
    data() {
        return {
            hideBar: true
        }
    },
    methods: {
      goBack() {
        history.back()
      }
    }
}
</script>
