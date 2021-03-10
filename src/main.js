import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(ElementPlus).mount('#app')
