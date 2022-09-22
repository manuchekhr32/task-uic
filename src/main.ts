import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { dateFormat, uzs, statusColor } from './helpers/filters'
// * css
import '@/assets/css/main.css'
import '@/assets/fontawesome/css/all.css'
import '@/assets/fontawesome/css/v4-shims.min.css'

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.config.globalProperties.$filters = { dateFormat, uzs, statusColor };
app.mount('#app')
