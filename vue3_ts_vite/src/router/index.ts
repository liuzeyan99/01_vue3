import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//
import Layout from '../components/layout/index.vue';
// export const constantRoutes: Array<RouteRecordRaw> = [
//     {
//         path: '/redirect',
//         component: Layout,
//         meta: { hidden: true },
//         // children: [
//         //     {
//         //         path: '/redirect/:path(.*)',
//         //         // component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/Index.vue')
//         //     }
//         // ]
//     },
// ]
export const constantRoutes :Array<RouteRecordRaw> = [
    {
        path: '/redirect',
        component: Layout,
        meta: { hidden: true },
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect:'/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
                name: 'dashboard',
                meta:{
                    title: 'dashboard',
                    affix: true
                }
            }
        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: constantRoutes // routes报错提示  RouterOptions.routes: RouteRecordRaw[]
})
export default router;


