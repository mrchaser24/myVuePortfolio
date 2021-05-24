//Vue Router
// import { Router } from 'express';
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Header from '../router';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: () => import('../views/Contact')
    },
    {
        path: '/Projects',
        name: 'Project',
        component: () => import('../views/Project')
    },
    {
        path: '/Blogs',
        name: 'Blog',
        component: () => import('../views/Blog')
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;