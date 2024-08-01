import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue';
import gameMode from './pages/gameMode.vue';
import home from './pages/home.vue';
import '../assets/main.css';
import "./tailwind.css";


const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', redirect: '/Home' },{path:'/Home',component : home},{path:'/Game',component : gameMode}],
})

createApp(App).use(router).mount('#app')
