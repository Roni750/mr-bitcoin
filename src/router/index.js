import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import Stats from '../pages/Stats.vue'
import AvgBlockSize from '../pages/stats/AvgBlockSize.vue'
import MarketPriceHistory from '../pages/stats/MarketPriceHistory.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/contact',
            name: 'contacts',
            component: ContactIndex,
        },
        {
            path: '/stats',
            name: 'stats',
            component: Stats,
            children: [
                {
                    path: 'marketpricehistory',
                    component: MarketPriceHistory,
                },
                {
                    path: 'avgblocksize',
                    component: AvgBlockSize,
                }
            ]
        },
        {
            path: '/contact/:id',
            name: 'details',
            component: ContactDetails,
        },
        {
            path: '/contact/edit/:id?',
            name: 'edit',
            component: ContactEdit,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/AboutView.vue'),
        },
    ],
}
const router = createRouter(routerOptions)

export default router
