import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/schedule/:id',
      name: 'schedule',
      component: ScheduleView,
      props: true
    },
    {
      path: '/404',
      component: NotFoundView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
