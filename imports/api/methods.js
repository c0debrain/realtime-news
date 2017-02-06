import { Meteor } from 'meteor/meteor';
import { Posts } from './collections.js';

Meteor.methods({
  addPost(post) {
    Posts.insert({
      title: post,
      createdAt: new Date(),
    });
  },
  removePost(_id) {
    Posts.remove(_id);
  },
});
