import { Meteor } from 'meteor/meteor';
import { Messages } from './messages.js';

Meteor.methods({
  addMessage(message) {
    Messages.insert({
      title: message,
      createdAt: new Date(),
    });
  },
  removeMessage(_id) {
    Messages.remove(_id);
  },
});
