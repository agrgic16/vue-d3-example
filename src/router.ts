import Vue from 'vue';
import Router from 'vue-router';
import Home from './modules/Home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:parent_id',
      name: 'selected-parent',
      component: Home,
    },
    {
      path: '/:parent_id/:dashboard_id',
      name: 'selected-dashboard',
      component: Home,
    },
  ],
});
