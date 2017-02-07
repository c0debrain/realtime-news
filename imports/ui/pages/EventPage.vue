<template>
  <div class="event-page">
    <div class="uk-flex uk-flex-center uk-flex-wrap-around uk-background-muted uk-height-medium">
        <div class="uk-width-1-2 uk-card uk-card-body uk-card-small">
            <timeline></timeline>
        </div>
        <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left">
            Sidebar
        </div>
    </div>
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


<style scoped lang="stylus">
.event-page
  display table
  width 100%
  padding 40px 0
</style>
