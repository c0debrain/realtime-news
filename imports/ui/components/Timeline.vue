<template>
  <section class="timeline">

      <header class="timeline-header">
        <div class="uk-card uk-card-default uk-card-body">
          <transition name="fade">
            <div v-if="profile">
              Perfil
            </div>
          </transition>
          <input class="uk-input" v-model="newMessage" @focus="showProfile" placeholder="Share a news, photo or video" />
          <div class="timeline-actions">

            <button type="button" class="button-icon" @click.prevent="showProfile">
              <span uk-icon="icon: camera;"></span>
            </button>

            <button type="submit" @click.prevent="sendMessage" class="uk-button button-confirm">publicar</button>
          </div>
        </div>
      </header>

      <div class="timeline-content">
          <ul class="messages-list uk-list">
              <li class="message-item" v-for="message in messages">
                  <h4>{{ message.title }}</h4>
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
        profile: false
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
        showProfile() {
          console.log(this.profile);
        },
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
  width 100%
  .timeline-header
    cursor pointer
    .uk-card
      padding 10px
      border-radius 3px
      transition all 0.2s ease-in-out
    .timeline-actions
      border-top 1px solid #e5e5e5
      padding-top 10px
    .button-icon
      border none
      background none
      float left
      cursor pointer
      font-size 15px
      color #666
      padding 5px
      padding 6px 12px
      margin 3px 0px
      span
        transform scale(1.2,1.2)
      &:hover
        color #FF6C15
        span
          color #FF6C15
          transform scale(1.4,1.4)
      &:last-child
        right 32px
    .button-confirm
      float right
    span
      color #666
      transition all 0.2s ease-in-out
    input
      width 100%
      box-sizing border-box
      padding 10px 0
      border none
      margin 0
      font-size 18px
      margin-bottom 10px
      color #212121
      cursor pointer

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
