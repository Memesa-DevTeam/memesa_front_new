import { createApp } from 'vue'
import './pc.css'
import 'ant-design-vue/dist/antd.less'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router/index'
// @import 'ant-design-vue/dist/antd.less'

createApp(App)
.use(router)
.use(Antd)
.mount('#app')
