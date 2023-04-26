import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.less'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router/index'
import language from './js/language'
// @import 'ant-design-vue/dist/antd.less'

createApp(App)
.use(router)
.use(Antd)
.use(language.i18n)
.mount('#app')
