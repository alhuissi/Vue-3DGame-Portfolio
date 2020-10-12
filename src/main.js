import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from "./store/store";
import VueMeta from "vue-meta";
import VueSwal from 'vue-swal'
import vuescroll from 'vuescroll';
import i18n from './i18n'

Vue.use(VueSwal)
Vue.config.productionTip = false
Vue.use(VueMeta);
Vue.use(vuescroll);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
