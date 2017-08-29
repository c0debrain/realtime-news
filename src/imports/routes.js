import Vue from 'vue'

import NotFound from './ui/NotFound.vue'
import Home from './ui/Home.vue'
import Items from './ui/Items.vue'
import Notes from './ui/Notes.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/shop', name: 'shop', component: Items },
  { path: '/notes', name: 'notes', component: Notes, meta: { showCart: true } },
  { path: '*', name: 'not-found', component: NotFound },
]
