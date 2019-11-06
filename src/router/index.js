import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import AddAdmin from "../components/AddAdmin.vue";
import CreateGame from "../components/CreateGame.vue";

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
  },
  {
    path: "/create-game",
    name: "create-game",
    component: CreateGame
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
