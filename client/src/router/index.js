import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../views/HomePage.vue'
import LoginPage from './../views/LoginPage.vue'
import SignIn from './../views/SignIn.vue'
import ProfilePage from '@/views/ProfilePage.vue'
const routes =[
    { path: '/',
        component: LoginPage,
        children: [
            {
              path: '/login',
              component: SignIn
            },
          ]
    },
    { path: '/home', component: HomePage,
      children: [
        {
          path: '/profile',
          component: ProfilePage
        }
      ]
    },

]
const router = createRouter({
    history: createWebHistory(), 
    routes
})
export default router