import { createWebHistory, createRouter } from 'vue-router'

import BookDetails from '../views/books/BookDetails.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/books/:id', name: 'BookDetails', component: BookDetails }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router