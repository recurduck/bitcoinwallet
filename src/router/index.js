import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/home-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/signup-page.vue')
  },
  {
    path: '/chart',
    name: 'ChartPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/chart-page.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact-page.vue')
  },
  {
    path: '/contact/:id',
    name: 'ContactDetailsPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact-details-page.vue')
  },
  {
    path: '/contact/edit/:id?',
    name: 'ContactEditPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact-edit-page.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
