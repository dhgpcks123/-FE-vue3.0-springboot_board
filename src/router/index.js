import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import board from '../pages/board.vue'
import profile from '../pages/profile.vue'
import add from '@/pages/add.vue'
import edit from '@/pages/edit.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/board',
      name: 'board',
      component: board,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/board/:id',
      name: 'edit',
      component: edit
    }
  ]
})

export default router