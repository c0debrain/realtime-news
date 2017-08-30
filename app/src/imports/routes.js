import Vue from 'vue'

import NotFound from './ui/pages/NotFound.vue'
import Home from './ui/pages/Home.vue'
import Events from './ui/pages/Events.vue'
import Coverages from './ui/pages/Coverages.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/events', name: 'events', component: Events },
  { path: '/coverages', name: 'coverages', component: Coverages },
  { path: '*', name: 'not-found', component: NotFound }
]
