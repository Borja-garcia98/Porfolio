import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ClickOutside } from "./directives/click-outside.js";
import { Plugin } from "vue-fragment";
import { IconsPlugin } from "@/plugins/icons-plugin";
import "./main.css";
import Embed from 'v-video-embed'



Vue.directive("click-outside", ClickOutside);
Vue.use(IconsPlugin);
Vue.use(Plugin);
Vue.config.productionTip = false;

// video youtube
Vue.use(Embed);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
