import Vue from 'vue'
import App from './App.vue'

//Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
