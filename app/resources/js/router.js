import Vue from "vue";
import Router from "vue-router";
import Auth from "./pages/auth.vue";
import Dashboard from "./pages/dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Auth",
      component: Auth
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    }
  ]
});
