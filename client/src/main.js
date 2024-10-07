import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css';
import router from './router';
import pinia from './pinia';
const app=createApp(App)
createApp(App).mount('#app')
app.use(router)
app.use(pinia)
app.mount('#app')
