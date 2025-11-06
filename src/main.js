import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 懒加载插件
import { lazyPlugin } from './directives'

// 全局组件插件
import { componentPlugin } from '@/components/index'

import App from './App.vue'
import router from './router'

// 初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')