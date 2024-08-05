import {createRouter, createWebHashHistory } from 'vue-router'
// router 类型声明

const routes = [
  { path: '/',
    component: () => import('@/views/HomeView.vue')
  },
  { path: '/home',
    component: () => import('@/views/HomeView.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { router }