// import { defineStore, acceptHMRUpdate } from "pinia";
// import { useStorage } from "@vueuse/core";
// import { login } from "@/api/user";
// import { handle_err } from "@/utils/function";

// /**
//  * Simulate a login
//  */

// export const useUserStore = defineStore({
//   id: "user",
//   state: () => ({
//     name: useStorage("username", ""),
//     token: useStorage("token", ""),
//     // isAdmin: useStorage("admin", false),
//   }),

//   actions: {
//     logout() {
//       this.$patch({
//         name: "",
//         token: "",
//         // isAdmin: false,
//       });

//       // we could do other stuff like redirecting the user
//     },

//     /**
//      * Attempt to login a user
//      */
//     async login(params: any) {
//       return new Promise((resolve) => {
//         login(params)
//           .then((res) => {
//             if (res.Code == 0) {
//               this.$patch({
//                 name: params.UserName,
//                 token: "Bearer " + res.Data.Token,
//                 // isAdmin: res.Data.Role == "admin",
//               });
//             }
//             resolve(res);
//           })
//           .catch((err) => {
//             console.log(err);
//             handle_err(err);
//           });
//       });
//     },
//   },
// });

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
// }
