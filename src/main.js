/* import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
 */

import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false




new Vue({
  router,
  vuetify,
  axios,
  VueAxios,
  


  render: h => h(App)
}).$mount('#app');