<template>
  <div class="event-page">
    <header class="event-header">
        <div class="event-box-stream">
          <div class="event-content uk-flex uk-flex-center uk-flex-wrap-around hide">
            <div class="uk-width-1-2 uk-card uk-card-body uk-card-small">
              <iframe class="event-video-stream" width="560" height="420" src="https://www.youtube.com/embed/Bh5LRSZNuT4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="event-video-playlist uk-width-1-5 uk-card uk-card-body uk-card-small uk-margin-left">
                <h5 class="uk-heading-line uk-text-left"><span>Outros vídeos</span></h5>
                <ul class="uk-list">
                    <li>
                        <img src="/images/thumb.png" width="80" height="80" />
                        <h3>Lorem ipsum it dollor summy bussines on the table</h3>
                        <span>Cobertura Nome</span>
                    </li>
                    <li>
                      <img src="/images/thumb.png" width="80" height="80" />
                      <h3>Lorem ipsum it dollor summy bussines on the table</h3>
                      <span>Cobertura Nome</span>
                    </li>
                    <li>
                      <img src="/images/thumb.png" width="80" height="80" />
                      <h3>Lorem ipsum it dollor summy bussines on the table</h3>
                      <span>Cobertura Nome</span>
                    </li>
                    <li>
                      <img src="/images/thumb.png" width="80" height="80" />
                      <h3>Lorem ipsum it dollor summy bussines on the table</h3>
                      <span>Cobertura Nome</span>
                    </li>
                </ul>
            </div>

          </div>
          <div class="event-cover-image">
              <div class="content">
                <h2 class="event-name">
                  <router-link to="/coverages/event">Brasileirão 2016</router-link>
                </h2>
              </div>
              <img class="image-cover" src="/images/cover.png" width="100%" />
          </div>
        </div>
    </header>
    <div class="event-content uk-flex uk-flex-center uk-flex-wrap-around uk-background-muted uk-height-medium">
        <div class="timeline-container uk-width-1-2 uk-card uk-card-body uk-card-small">
            <h2 class="uk-heading-line uk-text-left"><span>Timeline</span></h2>
            <timeline></timeline>
        </div>
        <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left">
            Sidebar
        </div>
    </div>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';

export default {
  data() {
    return {
      buttonLabel: 'Click me!',
    }
  },
  meteor: {
    data: { }
  },
  components: {
    Timeline,
  }
};
</script>


<style scoped lang="stylus">
.event-page
  width 100%
  display table
  .event-video-playlist
    padding 20px 0
    li
      margin-bottom 15px
      img
        float left
        margin-right 10px
        border 1px solid #e5e5e5
        border-radius 3px
      h3
        margin 0
        font-size 15px
        color #FF6C15
      span
        font-size 10px
        color #666
        text-transform uppercase
        letter-spacing 0.06em

  .event-cover-image
    max-height 220px
    position relative
    &:after
      position absolute
      left 0
      bottom 0
      width 100%
      height 180px
      content ""
      z-index 9
      background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 100%);
      background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.82) 100%);
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.82) 100%);
    .content
      position relative
      width 1180px
      height 220px
      position absolute
      left 50%
      margin-left -590px!important
    .event-name
      position absolute
      left 0
      bottom 0
      color #fff
      z-index 10
      font-size 52px
      text-shadow 1px 1px 2px rgba(0,0,0,.8)
      font-weight 100
      text-align left
      padding 20px
      letter-spacing -0.06em
      line-height 46px
      a
        color #fff
        font-family "Proxima Nova Soft"
        &:hover
          color #fff
  .event-video-stream
    margin 0 auto
    display table
    border-radius 5px
    width 100%
    height 420px
  .event-box-stream, .event-cover-image
    width 100%
    margin: 0;
    height auto
    overflow: hidden;
    .image-cover
      margin-top -80px
  .event-header
    width 100%
    background #fcfcfc
    box-shadow 0 5px 15px rgba(0,0,0,.05)
    margin-bottom 30px
    position relative
    z-index 990
  .timeline-container
    padding-top 0
    h2
      margin-bottom 20px
      color #212121
      font-weight 300
</style>
