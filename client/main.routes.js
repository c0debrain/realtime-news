export default [
  {
    path: '/',
    name: 'home',
    component: '/imports/ui/pages/HomePage.vue',
  },
  // Coverages
  {
    path: '/coverages',
    component: '/imports/ui/pages/CoveragesPage.vue',
    redirect: { name: 'coverages-list' },
    // Nested routes
    children: [
      {
        path: '/coverages',
        name: 'coverages-list',
        component: '/imports/ui/pages/CoveragesListPage.vue',
      },
      {
        path: '/coverages/detail',
        name: 'coverages-detail',
        component: '/imports/ui/pages/CoveragesDetailPage.vue',
      },
      {
        path: 'event',
        name: 'event-detail',
        component: '/imports/ui/pages/EventPage.vue',
      },
    ],
  },
  // Authentication
  {
    path: '/login',
    component: '/imports/ui/pages/AuthPage.vue',
    redirect: { name: 'login' },
    // Nested routes
    children: [
      {
        path: '/login',
        name: 'login',
        component: '/imports/ui/modules/Login.vue',
      },
      {
        path: '/register',
        name: 'register',
        component: '/imports/ui/modules/Register.vue',
      },
      {
        path: '/forgot-password',
        name: 'forgot-password',
        component: '/imports/ui/modules/ForgotPassword.vue',
      },
      {
        path: '/new-password',
        name: 'new-password',
        component: '/imports/ui/modules/NewPassword.vue',
      },
    ],
  },
];
