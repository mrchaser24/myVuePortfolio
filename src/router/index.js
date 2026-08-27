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
        component: Home,
        meta: { title: 'Chase Hermosisima | Software Engineer' }
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: () => import('../views/Contact'),
        meta: { title: 'Contact | Chase Hermosisima' }
    },
    {
        path: '/Projects',
        name: 'Project',
        component: () => import('../views/Project'),
        meta: { title: 'Projects | Chase Hermosisima' }
    },
    {
        path: '/Blogs',
        name: 'Blog',
        component: () => import('../views/Blog'),
        meta: { title: 'Writing | Chase Hermosisima' }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title || 'Chase Hermosisima | Software Engineer';
});

export default router;