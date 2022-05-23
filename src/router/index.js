import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/proyectos",
    component: () => import("@/views/proyectos"),
  },
  {
    path: "/manualIdentidad",
    component: () => import("@/views/manualIdentidad"),
  },
  {
    path: "/sobreMi",
    component: () => import("@/views/sobreMi"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
