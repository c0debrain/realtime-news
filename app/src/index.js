if (Meteor.isClient) {
  import './imports/client'
} else if (Meteor.isServer) {
  import './imports/server'
}
