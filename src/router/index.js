import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstPage from './../components/FirstPage.vue'
import SecondPage from './../components/SecondPage.vue'

Vue.use(VueRouter)

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'first',
                component: FirstPage
            },
            {
                path: '/second',
                name: 'second',
                component: SecondPage
            }
        ]
    })
}