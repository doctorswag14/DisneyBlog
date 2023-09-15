import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import NewsPage from '../components/NewsPage.vue'
import ParksPage from '../components/ParksPage.vue'
import EntertainmentPage from '../components/EntertainmentPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  },
  {
    path: '/parks',
    name: 'parks',
    component: ParksPage
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: EntertainmentPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
