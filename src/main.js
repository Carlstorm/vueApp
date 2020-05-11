import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
// import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// import { db } from "../db"
//   console.log(db.collection("bruger").doc())
