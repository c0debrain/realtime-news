import { Meteor } from 'meteor/meteor';
import { Events } from './events.js';

Meteor.methods({
  addEvent(event) {
    Events.insert({
      name: event,
      createdAt: new Date(),
    });
  },
  removeEvent(_id) {
    Categories.remove(_id);
  },
});
