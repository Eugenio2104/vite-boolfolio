import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'
import Project from './pages/Project.vue'
import Error404 from './pages/Error404.vue'


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404,
    },
  ]


});


export { router };