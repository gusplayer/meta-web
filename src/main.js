// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/es";
import VueAnalytics from "vue-analytics";

Vue.use(ElementUI, { locale });
Vue.use(VueAnalytics, { id: "UA-98864338-1", router });
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
