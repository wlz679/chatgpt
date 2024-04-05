import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "./store/pinia"; // 引入 Pinia 实例
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import router from "./router"; // 引入路由配置文件
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import * as dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/zh-cn";

dayjs.extend(customParseFormat);
dayjs.locale("zh-cn");

const app = createApp(App);

app.use(pinia).use(ElementPlus).use(router);
app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
