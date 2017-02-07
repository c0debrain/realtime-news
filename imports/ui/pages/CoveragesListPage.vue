<template>
  <div class="coverages-list">
    <div class="uk-flex uk-flex-center uk-child-width-expand@s" uk-grid>
        <div class="coverage-item uk-card uk-card-default uk-card-body">
          <router-link to="/coverages/event">
              <figure class="event-thumb">
                <span class="event-label event-live">ON</span>
                <img src="/images/thumb.png" alt="Event Name" width="285" height="285"  />
              </figure>
              <h3 class="event-title">Event Name</h3>
          </router-link>
        </div>
        <div class="coverage-item uk-card uk-card-default uk-card-body uk-margin-left">
          <router-link to="/coverages/event">
              <figure class="event-thumb">
                <span class="event-label event-live">ON</span>
                <img src="/images/thumb.png" alt="Event Name" width="285" height="285"  />
              </figure>
              <h3 class="event-title">Event Name</h3>
          </router-link>
        </div>
        <div class="coverage-item uk-card uk-card-default uk-card-body uk-margin-left">
          <router-link to="/coverages/event">
              <figure class="event-thumb">
                <span class="event-label event-live">ON</span>
                <img src="/images/thumb.png" alt="Event Name" width="285" height="285"  />
              </figure>
              <h3 class="event-title">Event Name</h3>
          </router-link>
        </div>
        <div class="coverage-item uk-card uk-card-default uk-card-body uk-margin-left">
          <router-link to="/coverages/event">
              <figure class="event-thumb">
                <span class="event-label event-live">ON</span>
                <img src="/images/thumb.png" alt="Event Name" width="285" height="285"  />
              </figure>
              <h3 class="event-title">Event Name</h3>
          </router-link>
        </div>
        <div class="coverage-item uk-card uk-card-default uk-card-body uk-margin-left">
          <router-link to="/coverages/event">
              <figure class="event-thumb">
                <span class="event-label event-end">OFF</span>
                <img src="/images/thumb.png" alt="Event Name" width="285" height="285"  />
              </figure>
              <h3 class="event-title">Event Name</h3>
          </router-link>
        </div>
    </div>
  </div>
</template>

<style  lang="stylus">
  .coverages-list
    max-width 1280px
    margin 40px auto
    .coverage-item
      border-radius 3px
      padding 0
      a
        text-decoration none
        display block
        transition all 0.2s ease-in-out
        &:hover
          text-decoration none
          .event-title
            color #27AE60
          .event-thumb
            img
              transform scale(1.1,1.1)
    .event-label
      position absolute
      left -34px
      top 8px
      transform rotate(-35deg)
      padding 1px 46px
      font-weight bold
      z-index 9
      background #f8f8f8
      font-size 12px
      color #212121
    .event-live
      background #27AE60
      color #fff
    .event-end
      background rgb(236, 88, 88)
      color #fff
    .event-thumb
      overflow hidden
      margin 0
      position relative
      img
        display block
        width 100%
        transition all 0.2s ease-in-out
    .event-title
      margin 0
      padding 10px
      font-size 18px
      transition all 0.2s ease-in-out
</style>
