import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { run } from './api';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as icons from '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const {db, storage} = run();

const vuetify = createVuetify({
    components,
    directives,
    icons,
})

// Регестрируем глобально
const app = createApp(App).mixin({
    beforeCreate() {
        this.$db = db;
        this.$storage = storage;
    }
})

app
    .use(router)
    .use(vuetify)
    .mount('#app');
