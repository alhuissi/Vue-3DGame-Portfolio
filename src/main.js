import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from "./store/store";
import VueMeta from "vue-meta";
import vuescroll from 'vuescroll';
import VueSweetalert2 from 'vue-sweetalert2';
import i18n from './i18n'

const options = {
  confirmButtonColor: '#12dcc7',
  cancelButtonColor: '#ff7674',
};

Vue.config.productionTip = false
Vue.use(VueMeta);
Vue.use(vuescroll);
Vue.use(VueSweetalert2, options);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
