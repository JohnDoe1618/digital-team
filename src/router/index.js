import ChatsPage from '@/pages/ChatModule/ChatsPage.vue';
import ContractsPage from '@/pages/ContractsModule/ContractsPage.vue';
import MainPage from '@/pages/DashboardModule/MainPage.vue';
import ProjectsPage from '@/pages/ProjectsModule/ProjectsPage.vue';
import RequestsPage from '@/pages/RequestsModule/RequestsPage.vue';
import ResultSearchPage from '@/pages/SearchModule/ResultSearchPage.vue';
import SettingsPage from '@/pages/SettingsModule/SettingsPage.vue';
import TeamPage from '@/pages/TeamModule/TeamPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "main",
        component: MainPage,
    },
    {
        path: "/requests",
        name: "requests",
        component: RequestsPage,
    },
    {
        path: "/chats",
        name: 'chat',
        component: ChatsPage,
    },
    {
        path: "/contracts",
        name: "contract",
        component: ContractsPage,
    },
    {
        path: "/projects",
        name: "project",
        component: ProjectsPage,
    },
    {
        path: "/team",
        name: "developers",
        component: TeamPage,
    },
    {
        path: "/settings",
        name: "settings",
        component: SettingsPage,
    },
    {
        path: "/resultSearching",
        name: "searchingResult",
        compoenent: ResultSearchPage,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
