import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Authentication.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/sign-up/sign-in",
    name: "Authentication",
    // if you which to be  lazy-loaded when the route is visited.
    // component: () => import("../views/Authentication.vue"),
    component: Auth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
