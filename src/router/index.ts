import { createRouter, createWebHashHistory,} from 'vue-router'

const router = createRouter({
    history:  createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/components/card1.vue')
        }, {
            path: '/plus',
            component: () => import('@/components/card2.vue')
        },  {
            path: '/control2',
            component: () => import('@/components/livepc.vue')
        }
    ]
})

export default router