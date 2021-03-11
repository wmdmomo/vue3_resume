import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(ElementPlus).mount('#app')
