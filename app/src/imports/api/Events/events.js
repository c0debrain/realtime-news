import { Mongo } from 'meteor/mongo'

const Events = new Mongo.Collection('events')

Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

export default Events