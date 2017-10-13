import Vue from 'vue'

import isUser from './modules/is-user'

import NotFound from './ui/pages/NotFound/NotFound.vue'
import Events from './ui/pages/Events/Events.vue'
import EventDetails from './ui/pages/Events/EventDetails.vue'
import Home from './ui/pages/Home/Home.vue'
import Auth from './ui/layout/Auth.vue'
import Login from './ui/pages/Auth/Login.vue'
import Register from './ui/pages/Auth/Register.vue'
import ForgotPassword from './ui/pages/Auth/ForgotPassword.vue'
import ResetPassword from './ui/pages/Auth/ResetPassword.vue'

import Dashboard from './ui/layout/Dashboard.vue'
import DashboardTimeline from './ui/pages/Dashboard/Timeline/Timeline.vue'
import DashboardEvents from './ui/pages/Dashboard/Events/Events.vue'
import DashboardEventsNew from './ui/pages/Dashboard/Events/EventsNew.vue'
import DashboardEventsEdit from './ui/pages/Dashboard/Events/EventsEdit.vue'
import DashboardUsers from './ui/pages/Dashboard/Users/Users.vue'
import DashboardUsersEdit from './ui/pages/Dashboard/Users/UsersEdit.vue'

export default [
  { 
    path: '*', 
    name: 'not-found', 
    component: NotFound 
  },
  {
    path: '/',
    name: 'app-home',
    component: Home
  },
  {
    path: '/eventos',
    name: 'app-events',
    component: Events,
    beforeEnter: (to, from, next) => {
      isUser().then(response => {
        response ? next() : next({name: 'auth-login'})
      })
    }
  },
  {
    path: '/eventos/:eventId',
    name: 'app-event-details',
    component: EventDetails,
    beforeEnter: (to, from, next) => {
      isUser().then(response => {
        response ? next() : next({name: 'auth-login'})
      })
    }
  },
  // Auth
  {
    path: '/login',
    component: Auth,
    redirect: { name: 'auth-login' },
    children: [
      {
        path: '/login',
        name: 'auth-login',
        component: Login
      },
      {
        path: '/cadastro',
        name: 'auth-register',
        component: Register
      },
      {
        path: '/recuperar-senha',
        name: 'auth-forgot-password',
        component: ForgotPassword
      },
      {
        path: '/nova-senha/:token',
        name: 'auth-reset-password',
        component: ResetPassword
      }
    ]
  },
  {
    path: '/timeline',
    component: Dashboard,
    redirect: { name: 'dashboard-timeline' },
    beforeEnter: (to, from, next) => {
      isUser().then(response => {
        response ? next() : next({name: 'auth-login'})
      })
    },
    children: [
      {
        path: '/timeline',
        name: 'dashboard-timeline',
        component: DashboardTimeline
      },
      {
        path: '/dashboard/eventos',
        name: 'dashboard-events',
        component: DashboardEvents
      },
      {
        path: '/dashboard/eventos/novo',
        name: 'dashboard-events-new',
        component: DashboardEventsNew
      },
      {
        path: '/dashboard/eventos/:eventoId/editar',
        name: 'dashboard-events-edit',
        component: DashboardEventsEdit
      },
      {
        path: '/dashboard/usuarios',
        name: 'dashboard-users',
        component: DashboardUsers
      },
      {
        path: '/dashboard/usuarios/:userId/editar',
        name: 'dashboard-users-edit',
        component: DashboardUsersEdit
      }
    ]
  }
]
