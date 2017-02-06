<template>
  <div class="home-page">
    <timeline></timeline>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';

export default {
  data() {
    return {
      buttonLabel: 'Click me!',
    }
  },
  meteor: {
    data: { }
  },
  components: {
    Timeline,
  }
};
</script>
