import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import QuestionView from '../views/QuestionView.vue'
import ResultView from '@/views/ResultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/assessment',
    name: 'assessment',
    component: () => import('../views/AssessmentView.vue')
  },
  // {
  //   path: 'dimension',
  //   name: 'dimension',
  //   component: () => import('../views/DimensionView.vue')
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // component: () => import( '../views/DashboardView.vue')
    component: DashboardView
  },
  {
    path: '/question',
    name: 'question',
    component: QuestionView
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
