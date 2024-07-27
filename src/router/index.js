import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/LoginPage'
import HomePage from '@/views/HomePage'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: LoginPage
        },
        {
            path: '/HomePage',
            component: HomePage
        }
    ]
})



export default router