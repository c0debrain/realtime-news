// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from '/imports/routes';

// App layout
import App from '/imports/ui/App.vue';

// App start
Meteor.startup(() => {
  // Start the router
  new Vue({
    router: routerFactory.create(),
    render: h => h(App),
  }).$mount('app');
});
