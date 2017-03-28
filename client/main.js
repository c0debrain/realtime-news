// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from '/imports/routes';

import FacebookOAuthInit from '/imports/facebook';

// App layout
import App from '/imports/ui/App.vue';

// App start
Meteor.startup(() => {
  FacebookOAuthInit();
  new Vue({
    router: routerFactory.create(),
    render: h => h(App),
  }).$mount('app');
});
