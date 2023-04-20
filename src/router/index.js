import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/home.vue'

const routers = [
    {
        path: "/",
        name: "home",
        component: ()=>import('@/views/home.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router
