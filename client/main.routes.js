export default [
  {
    path: '/',
    name: 'home',
    component: '/imports/ui/pages/HomePage.vue',
  },
  {
    path: '/posts',
    name: 'posts',
    component: '/imports/ui/pages/PostsPage.vue',
    redirect: { name: 'posts-list' },
    // Nested routes
    children: [
      {
        path: '/',
        name: 'posts-list',
        component: '/imports/ui/pages/PostsList.vue',
      },
      {
        path: 'detalhes',
        name: 'posts-detail',
        component: '/imports/ui/pages/PostsDetail.vue',
      },
    ],
  },
];
