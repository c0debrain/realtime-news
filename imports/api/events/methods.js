import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Events } from './events.js';

// Insert Event
export const insertEvent = new ValidatedMethod({
  name: 'Events.methods.insert',
  validate: new SimpleSchema({
    createdAt: { type: Date },
    status: { type: Boolean },
    name: { type: String },
    thumb_image: {
      type: Object,
      minCount: 1,
      maxCount: 6,
      optional: true
    },
    "thumb_image.lastModifiedDate": {
        type: Date
    },
    "thumb_image.name": {
        type: String
    },
    "thumb_image.uid": {
        type: Number
    },
    "thumb_image.type": {
        type: String
    },
    "thumb_image.size": {
        type: Number
    },
    "thumb_image.base64": {
        type: String
    },
    cover_image: {
      type: Object,
      minCount: 1,
      maxCount: 6,
      optional: true
    },
    "cover_image.lastModifiedDate": {
        type: Date
    },
    "cover_image.name": {
        type: String
    },
    "cover_image.uid": {
        type: Number
    },
    "cover_image.type": {
        type: String
    },
    "cover_image.size": {
        type: Number
    },
    "cover_image.base64": {
        type: String
    }
  }).validator(),
  run(event) {
    try {
      // if (!this.userId()) {
      //   throw new Meteor.Error('500', 'Must be logged in to add new products.');
      // }
      return Events.insert(event);
    } catch (exception) {
      throw new Meteor.Error('500', exception.message);
    }
  }
});

// Remove Events
export const removeEvent = new ValidatedMethod({
  name: 'Events.methods.remove',
  validate: new SimpleSchema({
    _id: { type: String }
  }).validator(),
  run(event) {
    try {
      // if (!this.userId()) {
      //   throw new Meteor.Error('500', 'Must be logged in to add new products.');
      // }
      Events.remove(event._id);
    } catch (exception) {
      throw new Meteor.Error('500', exception.message);
    }
  }
});

// Edit Events
export const editEvent = new ValidatedMethod({
  name: 'Events.methods.edit',
  validate: new SimpleSchema({
    _id: { type: String },
    updatedAt: { type: Date },
    status: { type: Boolean },
    name: { type: String },
    version: { type: Number },
    url: { type: String },
    events_categoriesId: { type: String },
    thumb_image: {
      type: Object,
      minCount: 1,
      maxCount: 6,
      optional: true
    },
    "thumb_image.lastModifiedDate": {
        type: Date
    },
    "thumb_image.name": {
        type: String
    },
    "thumb_image.uid": {
        type: Number
    },
    "thumb_image.type": {
        type: String
    },
    "thumb_image.size": {
        type: Number
    },
    "thumb_image.base64": {
        type: String
    },
    cover_image: {
      type: Object,
      minCount: 1,
      maxCount: 6,
      optional: true
    },
    "cover_image.lastModifiedDate": {
        type: Date
    },
    "cover_image.name": {
        type: String
    },
    "cover_image.uid": {
        type: Number
    },
    "cover_image.type": {
        type: String
    },
    "cover_image.size": {
        type: Number
    },
    "cover_image.base64": {
        type: String
    }
  }).validator(),
  run(event) {
    Events.update(event._id, {
      $set: {
        updatedAt: new Date(),
        status: event.status,
        name: event.name,
        thumb_image: {
          lastModifiedDate: event.thumb_image.lastModifiedDate,
          name: event.thumb_image.name,
          type: event.thumb_image.type,
          size: event.thumb_image.size,
          uid: event.thumb_image.uid,
          base64: event.thumb_image.base64
        },
        cover_image: {
          lastModifiedDate: event.cover_image.lastModifiedDate,
          name: event.cover_image.name,
          type: event.cover_image.type,
          size: event.cover_image.size,
          uid: event.cover_image.uid,
          base64: event.cover_image.base64
        },
       }
    });
  }
});
