export {};
declare global {
  const ElMessage: typeof import("element-plus")["ElMessage"];
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare const AMap: any;
