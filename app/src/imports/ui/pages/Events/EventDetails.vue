<template>
  <div class="events-details">
    <header>
    	<back-button></back-button>
    	<h2>Detalhes do Evento</h2>
    </header>
    <h4>{{ events[0].title }}</h4>
    <p>{{ events[0].body }}</p>
  </div>
</template>

<script>
	import BackButton from '../../../ui/components/BackButton/BackButton.vue'
	import Events from '../../../api/Events/events'
  export default {
    name: 'app-event-details',
    data: () => ({
    	users: [],
    	events: []
    }),
    meteor: {
      subscribe: {
        'events': [],
      },
      users() {
        return Meteor.users.find({})
      },
      events() {
        return Events.find({
          _id: this.$route.params.eventId
        });
      },
    },
    components: {
    	BackButton
    }
  }
</script>

<style lang="stylus" scoped>
.events-details
  text-align left
  padding 20px 60px
  header
  	padding 0 0 20px 0
  	h2
  		font-size 32px
  h4
  	font-size 18px
.button-back
	top 20px
	left 8px
</style>
