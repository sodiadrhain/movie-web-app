import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import Movie from '../components/movie/MovieItem.vue';

// Defining necessary routes and creating export file
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
