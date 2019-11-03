import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import AddAdmin from "../components/AddAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/add-admin",
    name: "add-admin",
    component: AddAdmin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
