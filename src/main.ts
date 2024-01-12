import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import '~/assets/styles/index.scss'

const app = createApp(App)//根组件
app.use(router)//路由
app.mount('#app')//容器
