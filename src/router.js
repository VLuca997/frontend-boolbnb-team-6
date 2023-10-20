import {createRouter, createWebHistory} from "vue-router";

import HomePage from './pages/HomePage.vue';
import SearchPage from './pages/SearchPage.vue';
import ApartmentPage from './pages/ApartmentPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'home',
        component: HomePage
        },
        {
        path:'/search',
        name: 'search',
        component: SearchPage,
        props: true,
        },
        {
        path:'/apartment/:slug',
        name: 'apartment',
        component: ApartmentPage,
        }
    ],
});

export default router;
