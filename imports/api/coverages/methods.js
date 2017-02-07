import { Meteor } from 'meteor/meteor';
import { Coverages } from './coverages.js';

Meteor.methods({
  addCoverage(coverage) {
    Coverages.insert({
      name: coverage,
      createdAt: new Date(),
    });
  },
  removeCoverage(_id) {
    Coverages.remove(_id);
  },
});
