import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import IntroducePublisher from '../views/IntroducePublisher.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/wylim',
    name: 'introducepublisher',
    component: IntroducePublisher,
  },
  {
    path: '/ywlee',
    name: 'introducedesigner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/IntroduceDesigner.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
