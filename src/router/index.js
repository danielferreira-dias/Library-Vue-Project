import { createWebHistory, createRouter } from 'vue-router'

import BookDetails from '../views/books/BookDetails.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import AddNewBook from '../views/AddNewBook.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/books/:id', name: 'BookDetails', component: BookDetails, props: true },
    { path: '/newBook', name: 'New Book', component: AddNewBook },
    // redirect
    { path: '/all-books', redirect: '/Home', component: Home },
    // Catch all 404
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router