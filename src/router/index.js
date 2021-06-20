import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ComponentInclude from '../views/ComponentInclude.vue';
import IframeInclude from '../views/IframeInclude.vue';
import JsInclude from '../views/JsInclude.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/component',
    name: 'component',
    component: ComponentInclude,
  },
  {
    path: '/js',
    name: 'js',
    component: JsInclude,
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: IframeInclude,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
