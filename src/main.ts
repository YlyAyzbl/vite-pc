import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'

// 引入elementUI
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
//注入
app.use(ElementUi)
app.use(router)
app.mount('#app')