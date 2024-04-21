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
  {
    path: "/buyGpt",
    component: () => import("../views/gptPlus/buyGpt.vue"),
  },
  {
    path: "/accountBan",
    component: () => import("../views/accountBan/index.vue"),
  },
  {
    path: "/accountRegister",
    component: () => import("../views/accountRegister/index.vue"),
  },
  {
    path: "/commonQuestion",
    component: () => import("../views/commonQuestion/index.vue"),
  },
  {
    path: "/android",
    component: () => import("../views/android/index.vue"),
  },
];

export default commonRoutes;
