<template>
  <div class="timeline">
    <h2>Timeline</h2>

    <input v-model="newPost" @keyup.enter="sendPost" placeholder="Enter new post" />

    <div v-if="!$subReady.posts">
      Loading...
    </div>

    <div class="post" v-for="post in posts">
      <span class="content">{{ post.title }}</span>
      <button @click="removePost(post._id)">x</button>
    </div>
  </div>
</template>

<script>

import { Posts } from '../../api/collections.js';

export default {
  name: 'timeline',
  data: () => ({
    newPost: '',
    posts: [],
  }),
  meteor: {
    subscribe: {
      'posts': [],
    },
    posts() {
      return Posts.find({}, {
        sort: { date: -1 },
      });
    },
  },
  methods: {
    sendPost() {
      Meteor.call('addPost', this.newPost);
      this.newPost = '';
    },
    removePost(_id) {
      Meteor.call('removePost', _id);
    },
  },
};
</script>

<style scoped lang="stylus">
.timeline
  max-width 768px
  margin 40px auto
h2
  text-align left
  font-size 32px
  color #212121

input
  width 100%
  box-sizing border-box
  padding 10px 22px
  border solid 1px #ccc
  border-radius 3px
  margin-top 15px
  font-size 24px
  margin-bottom 10px
  border-radius 4px
  color #27AE60
  &:hover,  &:active, &:focus
    border-color #27AE60
    background #f8f8f8
.post
  margin 4px 2px
  display flex
  flex-direction row
  color #666
  margin-top 5px
  padding-top 5px
  button
    background #f4f4f4
    color #212121
    border 1px solid #ccc
    border-radius 3px
    float right
   .content
      flex auto 1 1

</style>
