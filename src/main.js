import Vue from 'vue';
import App from './App.vue';
//Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router';
//Vuex
import Vuex from 'vuex';
import store from './store.js';

AOS.init();
Vue.use(Vuex);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')