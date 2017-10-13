import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import Events from '../events'

Events.schema = new SimpleSchema({
  owner: {
    type: String,
    label: 'The ID of the user this event belongs to.',
  },
  createdAt: {
    type: String,
    label: 'The date this event was created.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString()
    }
  },
  updatedAt: {
    type: String,
    label: 'The date this event was last updated.',
    autoValue() {
      if (this.isInsert || this.isUpdate) return (new Date()).toISOString()
    }
  },
  title: {
    type: String,
    label: 'The title of the event.'
  },
  body: {
    type: String,
    label: 'The body of the event.'
  },
})

Events.attachSchema(Events.schema)