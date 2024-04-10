import { RouteRecordRaw } from "vue-router";

const commonRoutes: RouteRecordRaw[] = [
  { path: "/", name: "home", redirect: "/home" },
  {
    path: "/home",
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/buyGptPLus",
    component: () => import("../views/gptPlus/buyPlus.vue"),
  },
];

export default commonRoutes;
