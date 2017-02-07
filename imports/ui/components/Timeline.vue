<template>
<section class="timeline">

    <header class="timeline-header">
        <input class="uk-input" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Enter new message" />
    </header>

    <div class="timeline-content">
        <ul class="messages-list uk-list">
            <li class="message-item" v-for="message in messages">
                <h4 contenteditable="true">{{ message.title }}</h4>
                <span>{{ message.createdAt }}</span>
                <button @click="removeMessage(message._id)">
                <svg class="icon">
                  <use xlink:href="#close" />
                </svg>
            </button>
            </li>
        </ul>
    </div>

    <div v-if="!$subReady.messages">
        Loading...
    </div>

</section>
</template>

<script>
import {
    Messages
} from '../../api/messages/messages.js';

export default {
    name: 'timeline',
    data: () => ({
        newMessage: '',
        messages: [],
    }),
    meteor: {
        subscribe: {
            'messages': [],
        },
        messages() {
            return Messages.find({}, {
                sort: {
                    createdAt: -1
                },
            });
        },
    },
    methods: {
        sendMessage() {
            Meteor.call('addMessage', this.newMessage);
            this.newMessage = '';
        },
        removeMessage(_id) {
            Meteor.call('removeMessage', _id);
        },
    },
};
</script>

<style scoped lang="stylus">
.timeline
  max-width 768px
  margin 0 auto
  .timeline-header
    input
      width 100%
      box-sizing border-box
      padding 10px
      border solid 1px #ccc
      border-radius 3px
      margin-top 15px
      font-size 18px
      margin-bottom 10px
      border-radius 4px
      color #27AE60
      &:hover,  &:active, &:focus
        border-color #27AE60
        background #fff
        box-shadow 0 0 2px 1px rgba(35, 145, 82, 0.37)

   .timeline-content
     .messages-list
       margin 4px 2px
       color #666
       margin 0
       padding 0
       .message-item
         position relative
         margin 0
         padding 15px 0
         transition all 0.2s ease-in-out
         border-radius 3px
         border-bottom 1px solid #e5e5e5
         &:hover
           background #f8f8f8
           button
             opacity 1
         h4
           margin-bottom 5px
         button
           border none
           border-radius 3px
           position absolute
           right 0
           top 20px
           width 22px
           height 22px
           border-radius 50%
           background rgb(236, 88, 88)
           color #fff
           padding 0
           opacity 0
           transition all 0.2s ease-in-out
           cursor pointer
           svg
            width 22px
            height 22px
            fill #fff!important
          .content
             flex auto 1 1

</style>
