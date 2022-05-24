import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import CityPage from "@/pages/CityPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/city/:name",
            name: "details",
            component: CityPage,
        },
        {
            path: '/:catchAll(.*)*',
            name: "PageNotFound",
            component: NotFoundPage,
        },
    ]
})

createApp(App).use(router).mount('#app')
