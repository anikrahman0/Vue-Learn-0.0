import {createRouter, createWebHistory} from "vue-router";


import home from '../components/Home.vue';

import about from '../components/About.vue';

import notfound from '../components/NotFound.vue';


const routes =[
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/:pathMatch(.*)*',
        component: notfound
    }
];

const router = createRouter({
    history:createWebHistory(),
    linkExactActiveClass:'active',
    routes,
});

export default router;