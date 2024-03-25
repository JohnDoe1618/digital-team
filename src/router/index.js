import AboutUsComp from '@/pages/AboutUsComp.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "home",
        component: AboutUsComp,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
