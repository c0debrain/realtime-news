import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import rateLimit from '../../modules/rate-limit'
import Events from './events'

// Insert
export const insertEvent = new ValidatedMethod({
  name: 'Events.methods.insert',
  validate: new SimpleSchema({
    createdAt: {
      type: Date,
      label: 'The date this event was created.',
    },
    owner: {
      type: String,
      label: 'The ID of the user this event belongs to.',
    },
    title: {
      type: String,
      label: 'The title of the event.',
    },
    body: {
      type: String,
      label: 'The body of the event.',
    }
  }).validator(),
  run(args) {
    try {
      return Events.insert({ owner: this.userId, ...args })
    } catch (exception) {
      throw new Meteor.Error('500', exception.message)
    }
  }
})

// Update
export const updateEvent = new ValidatedMethod({
  name: 'Events.methods.update',
  validate: new SimpleSchema({
    _id: { type: String },
    updatedAt: {
      type: Date,
      label: 'The date this event was created.',
    },
    owner: {
      type: String,
      label: 'The ID of the user this event belongs to.',
    },
    title: {
      type: String,
      label: 'The title of the event.',
    },
    body: {
      type: String,
      label: 'The body of the event.',
    }
  }).validator(),
  run(args) {
    try {
      const eventId = args._id
      return Events.update(eventId, {
        $set: {
          updatedAt: new Date(),
          owner: args.owner,
          title: args.title,
          body: args.body
        }
      })
    } catch (exception) {
      throw new Meteor.Error('500', exception.message)
    }
  }
})

// Remove
export const removeEvent = new ValidatedMethod({
  name: 'Events.methods.remove',
  validate: new SimpleSchema({
    _id: { type: String }
  }).validator(),
  run(id) {
    try {
      return Events.remove(id)
    } catch (exception) {
      throw new Meteor.Error('500', exception.message)
    }
  }
})

rateLimit({
  methods: [
    'Events.methods.insert',
    'Events.methods.update',
    'Events.methods.remove'
  ],
  limit: 5,
  timeRange: 1000,
})
