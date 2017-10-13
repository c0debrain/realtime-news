import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Events from '../events'

Meteor.publish('events', function() {
  return Events.find({ owner: this.userId })
});

Meteor.publish('events.view', function eventsView(eventId) {
  check(eventId, String)
  return Events.find({ _id: eventId, owner: this.userId })
})
