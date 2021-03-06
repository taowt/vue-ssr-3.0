import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import importModules from '../utils/import-modules';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      ...importModules(require.context('./routes', false, /\.js$/), 'array')
    ]
  });
}
