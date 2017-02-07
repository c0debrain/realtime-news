import { Meteor } from 'meteor/meteor';
import { Coverages } from './coverages.js';

Meteor.publish('coverages', function() {
  return Coverages.find();
});
