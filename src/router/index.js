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
    },
    {
      path: "/settings",
      name: "settings",
      component: ()=>import('../views/Settings/SettingsPage.vue'),
      children: [
        {
          path: "",
          component: ()=>import('../views/Settings/Navigation/Main.vue')
        },
        {
          path: "user",
          component: ()=>import('../views/Settings/Navigation/User.vue')
        },
        {
          path: "user/profile",
          component: ()=>import('../views/Settings/User/ProfileSettings.vue')
        },
        {
          path: "user/password",
          component: ()=>import('../views/Settings/User/PasswordSettings.vue')
        },
        {
          path: "user/security",
          component: ()=>import('../views/Settings/User/SecuritySettings.vue')
        },
      ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router
