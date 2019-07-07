import Vue from 'vue';
import Router from 'vue-router';
import Home from './modules/Home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chart/bar',
      name: 'chart-bar',
      component: () => import('./modules/BarChart/BarChart.vue'),
    },
  ],
});
