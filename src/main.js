import { createApp, onMounted } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引入初始化的样式文件
import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//引入懒加载指令插件并且注册
import { lazyPlugin } from './directives'
//引入全局组件插件
import { componentPlugin } from './components'
// 导入mock数据文件
import './mock/mockServer'
import './apis/mockdate'
const app = createApp(App)
const pinia= createPinia()
//注册持久性插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
