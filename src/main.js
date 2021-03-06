import Vue from "vue";
import App from "./App.vue";
import "./plugins/element";
import store from "./plugins/store";
import router from "./plugins/router";
import { RestifyConfig } from "vue-restify";

RestifyConfig.set('origin', 'http://localhost:8000');

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
