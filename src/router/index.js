import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'

const routers = [
    {
      path: "/",
      name: "home",
      component: Homepage
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: ()=>import('../views/User/ProfilePage.vue')
    },
    {
      path: "/visitorProtocol",
      name: "login and register",
      component: ()=>import('../views/Login/LoginPage.vue'),
      children: [
        {
          path: 'login',
          component: ()=>import('../components/Login/LoginComponent.vue')
        },
        {
          path: 'register',
          component: ()=>import('../components/Login/RegisterComponent.vue')
        },
      ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router
