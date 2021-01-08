import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Blog.vue')
    },
    {
        path: '/label',
        name: 'Label',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Label.vue')
    },
    {
        path: '/classification',
        name: 'Classification',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Classification.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
