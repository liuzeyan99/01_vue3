import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';//为vue3项目特别更新的版本
import 'element-plus/dist/index.css';
import router from './router'

createApp(App).use(router).use(ElementPlus).mount('#app');
