import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import pinia from './store/userStore.js'
import router from './router/index.js'
import '@fortawesome/fontawesome-free/css/all.css';


createApp(App).use(router).mount('#app').use(pinia)