import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as icons from '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    icons,
})

const app = createApp(App);

app
    .use(router)
    .use(vuetify)
    .mount('#app');
