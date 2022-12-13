import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/styles/_theme.scss';
import 'bootstrap/dist/js/bootstrap.min';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {Toaster} from "@meforma/vue-toaster";

createApp(App)
    .use(Toaster, {
        position: 'top-right'
    })
    .component('fa-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
