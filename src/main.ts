import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// * css
import '@/assets/css/main.css'
import '@/assets/fontawesome/css/all.css'
import '@/assets/fontawesome/css/v4-shims.min.css'

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app')
