import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/home';
import login from "@/components/login";
import adminRouter from '../admin/router';
import {isAuthenticated} from "@/guards/auth-guard";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: login
    },
    {
        path: '/admin',
        beforeEnter: [isAuthenticated],
        ...adminRouter
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
