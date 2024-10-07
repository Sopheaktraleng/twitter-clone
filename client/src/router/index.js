import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../views/HomePage.vue'
import LoginPage from './../views/LoginPage.vue'
import SignIn from './../views/SignIn.vue'
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
    { path: '/home', component: HomePage},

]
const router = createRouter({
    history: createWebHistory(), 
    routes
})
export default router