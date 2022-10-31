import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/styles/_theme.scss';
import 'bootstrap/dist/js/bootstrap.min';

createApp(App).use(router).mount('#app')
