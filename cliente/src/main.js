import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/styles/_theme.scss';
import 'bootstrap/dist/js/bootstrap.min';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App).component('fa-icon', FontAwesomeIcon).use(router).mount('#app')
