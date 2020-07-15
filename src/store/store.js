import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerIsVisible: true
  },
  mutations: {
    esconder(state) {
      state.headerIsVisible = false;
    },
    mostrar(state) {
      state.headerIsVisible = true;
    }
  },
  actions: {},
  getters: {
    visible: state => state.headerIsVisible
  }
});
