import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/styles/variables.scss";`, // 可选，引入一些全局的 Sass 变量
        },
      },
    },
    base: "/",
    // 配置path，需要安装和引入
    resolve: {
      // 配置路径别名
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/v2": {
          target: env.VITE_BASE_API,
          changeOrigin: true,
        },
        // "/attachments": {
        //   target: env.VITE_BASE_API,
        //   changeOrigin: true,
        // },
      },
    },
    build: {
      sourcemap: true,
      assetsDir: "static/img/", // 指定生成静态资源的存放路径
      target: "esnext",
      minify: "esbuild", // 混淆器，terser构建后文件体积更小
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              const arr = id.toString().split("node_modules/")[1].split("/");
              switch (arr[0]) {
                case "@naturefw": // 自然框架
                case "@popperjs":
                case "@vue":
                // eslint-disable-next-line no-fallthrough
                case "element-plus": // UI 库
                case "@element-plus": // 图标
                  return "_" + arr[0];
                // break
                default:
                  return "__vendor";
                // break
              }
            }
          },
          chunkFileNames: "static/js1/[name]-[hash].js",
          entryFileNames: "static/js2/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  });
};
