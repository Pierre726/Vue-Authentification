import { createRouter, createWebHistory } from 'vue-router'
import WelcomeLogin from '../views/WelcomeLogin.vue'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: WelcomeLogin
    },

    {
      path: '/signup',
      name: 'Sign up now',
      component: () => import('../views/RegisterPage.vue')
    },

    {
      path: '/change-password',
      name: 'ChangePassword',
      component: () => import('../views/ChangePassword.vue')
    },

    {
      path: '/protecte-page',
      name: 'protected',
      component: () => import('../views/ProtectedPage.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  let isAuthenticated = false
  const config= {
  headers:{
  Authorization:'Bearer ' + localStorage.getItem('token')
  }
 };
 const url='http://localhost:8000/api/me';
 axios 
 .get(url, config) 
 .then(res=>{
  console.log(res)
  if(res.status === 200){
    isAuthenticated= true
    if (!isAuthenticated && to.name !== 'login' && to.name !== 'signup') {
      // redirect the user to the login page
       return { name: 'login' }
    }
  }
 })
 .catch(err=> {
  console.log(err)
  return { name: 'login' }
 })

})


export default router
