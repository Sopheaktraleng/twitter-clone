import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../views/HomePage.vue'
import LoginPage from './../views/LoginPage.vue'
import SignIn from './../views/SignIn.vue'
const routes =[
    { path: '/', component: LoginPage},
    { path: '/home', component: HomePage},
    { path:'/signIn',component: SignIn}

]
const router = createRouter({
    history: createWebHistory(), 
    routes
})
export default router