import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './assets/global.css';
import "./assets/sass/styles.scss";
import "./assets/bootstrap-grid.css";
// import Vuesax from 'vuesax'
// import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
