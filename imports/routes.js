// Import the router
import {Router, nativeScrollBehavior} from 'meteor/akryum:vue-router2';

// Create router instance
const router = new Router({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
});

// Not found
import NotFoundPage from '/imports/ui/pages/NotFoundPage.vue';

Router.configure(router => {
  router.addRoute({
    path: '*',
    component: NotFoundPage,
  });
}, -1);

export default router;
