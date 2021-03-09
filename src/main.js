import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './assets/global.css';
import "./assets/sass/imports/_collection.scss";
// import Vuesax from 'vuesax'
// import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
