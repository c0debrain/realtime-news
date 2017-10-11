import Vue from 'vue'

import isUser from './modules/is-user'

import NotFound from './ui/pages/NotFound/NotFound.vue'
import Documents from './ui/pages/Documents/Documents.vue'
import DocumentDetails from './ui/pages/Documents/DocumentsDetails.vue'
import Home from './ui/pages/Home/Home.vue'
import Auth from './ui/layout/Auth.vue'
import Login from './ui/pages/Auth/Login.vue'
import Register from './ui/pages/Auth/Register.vue'
import ForgotPassword from './ui/pages/Auth/ForgotPassword.vue'
import ResetPassword from './ui/pages/Auth/ResetPassword.vue'

import Dashboard from './ui/layout/Dashboard.vue'
import DashboardTimeline from './ui/pages/Dashboard/Timeline/Timeline.vue'
import DashboardDocuments from './ui/pages/Dashboard/Documents/Documents.vue'
import DashboardDocumentsNew from './ui/pages/Dashboard/Documents/DocumentsNew.vue'
import DashboardDocumentsEdit from './ui/pages/Dashboard/Documents/DocumentsEdit.vue'
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
    path: '/documents',
    name: 'app-documents',
    component: Documents,
    beforeEnter: (to, from, next) => {
      isUser().then(response => {
        response ? next() : next({name: 'login'})
      })
    }
  },
  {
    path: '/documents/:documentId',
    name: 'app-documents-details',
    component: DocumentDetails,
    beforeEnter: (to, from, next) => {
      isUser().then(response => {
        response ? next() : next({name: 'login'})
      })
    }
  },
  // Auth
  {
    path: '/login',
    component: Auth,
    redirect: { name: 'login' },
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword
      },
      {
        path: '/reset-password/:token',
        name: 'reset-password',
        component: ResetPassword
      }
    ]
  },
  {
    path: '/timeline',
    component: Dashboard,
    redirect: { name: 'dashboard' },
    beforeEnter: (to, from, next) => {
      isUser().then(response => {
        response ? next() : next({name: 'login'})
      })
    },
    children: [
      {
        path: '/timeline',
        name: 'dashboard-timeline',
        component: DashboardTimeline
      },
      {
        path: '/dashboard/documents',
        name: 'dashboard-documents',
        component: DashboardDocuments
      },
      {
        path: '/dashboard/documents/new',
        name: 'dashboard-documents-new',
        component: DashboardDocumentsNew
      },
      {
        path: '/dashboard/documents/:documentId/edit',
        name: 'dashboard-documents-edit',
        component: DashboardDocumentsEdit
      },
      {
        path: '/dashboard/users',
        name: 'dashboard-users',
        component: DashboardUsers
      },
      {
        path: '/dashboard/users/:userId/edit',
        name: 'dashboard-users-edit',
        component: DashboardUsersEdit
      }
    ]
  }
]
