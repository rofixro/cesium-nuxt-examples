import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入组件库
import FlButton from '../packages'

createApp(App).use(store).use(router).use(FlButton).mount('#app')

