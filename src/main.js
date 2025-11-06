import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 懒加载插件
import { lazyPlugin } from './directives'

// 全局组件插件
import { componentPlugin } from '@/components/index'

// pinia持久化插件
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// 初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')