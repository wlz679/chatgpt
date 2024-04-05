import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// // 全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log(from);

//   sessionStorage.setItem(
//     "redirectPath",
//     JSON.stringify({
//       path: to.path,
//       query: to.query,
//     })
//   );

//   if (Token) {
//     next();
//   } else {
//     next();
//   }
// });

export default router;
