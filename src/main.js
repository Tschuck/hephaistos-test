import Vue from 'vue';
import DoorsWizard from '@olymp/product-wizard';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(DoorsWizard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
