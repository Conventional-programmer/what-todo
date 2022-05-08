import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TodoItems from '@/pages/TodosPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: TodoItems
  },
  {
    path: '/category/:id',
    name: 'todos',
    component: () => import ('../pages/TodosPage.vue')
  },
  {
    path: '/todo/:id',
    name: 'todo',
    component: () => import ('../pages/TodoPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
