import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'

const routers = [
    {
      path: "/",
      name: "home",
      component: Homepage
    },
    {
      path: "/profile",
      name: "profile",
      component: ()=>import('../views/User/ProfilePage.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router
