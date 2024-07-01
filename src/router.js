import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AboutUs from './views/AboutUs.vue';
import Projects from './views/Projects.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: AboutUs, name: 'AboutUs' },
  { path: '/projects', component: Projects, name: 'Projects' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;