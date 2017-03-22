// Import the router
import {RouterFactory, nativeScrollBehavior} from 'meteor/akryum:vue-router2';

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
});

// Not found
import NotFoundPage from '/imports/ui/pages/NotFoundPage.vue';

RouterFactory.configure(routerFactory => {
  routerFactory.addRoute({
    path: '*',
    component: NotFoundPage,
  });
}, -1);

export default routerFactory;
