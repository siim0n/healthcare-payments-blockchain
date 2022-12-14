import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Splash from '../views/Splash.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash
    },
    {
      path: '/patient',
      name: 'patient',
      component: Home
    },
    {
      path: '/provider',
      name: 'provider',
      component: Home
    },
    {
      path: '/payer',
      name: 'payer',
      component: Home
    },
    {
      path: '/paid',
      name: 'paid',
      component: Home
    }  
  ]
})

export default router
