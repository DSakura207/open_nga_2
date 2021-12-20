import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './assets/utils/DateFormat'
import Clipboard from 'v-clipboard3';

createApp(App)
    .use(ElementPlus, {locale: zhCn,})
    .use(Clipboard)
    .use(store).use(router).mount('#app')
