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

const { db, storage } = run();

const vuetify = createVuetify({
    components,
    directives,
    icons,
})

// Регестрируем глобально
const __app__ = createApp(App).mixin({
    beforeCreate() {
        this.__$db__ = db;
        this.__$storage__ = storage;
    }
})

__app__
    .use(router)
    .use(vuetify)
    .mount('#app');

export {
    db,
    storage,
}
