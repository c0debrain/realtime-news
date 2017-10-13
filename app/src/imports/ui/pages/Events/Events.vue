<template>
  <div class="events">
    <header>
    	<h4>Eventos</h4>
    </header>
    <div class="events-item" v-for="event in events" :key="event._id" @click="handleeventDetails(event._id)">
    	<h2>{{ event.title }}</h2>
    	<p>{{ event.body }}</p>
    </div>
  </div>
</template>

<script>
	import Events from '../../../api/Events/events'
  export default {
    name: 'app-events',
    methods: {
			handleEventsDetails (id) {
        this.$router.push({
          name: 'event-details',
          params: { eventId: id }
        })
      },
    },
    meteor: {
      subscribe: {
        'events': [],
      },
      events() {
        return Events.find({})
      },
    }
  }
</script>

<style lang="stylus" scoped>
.events
  padding 20px 60px
  header
  	h4
  		font-size 32px
  		margin-bottom 20px
  		display flex
  .events-item
  	margin-bottom 20px
</style>
