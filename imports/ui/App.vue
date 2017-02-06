<template>
  <main class="app">
    <navbar></navbar>
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from '/imports/ui/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>
