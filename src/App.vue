<template>
  <el-config-provider :locale="locale">
    <router-view
      v-if="fullScreens.includes(route.path)"
      :key="route.fullPath"
    ></router-view>

    <Layout v-else>
      <router-view :key="route.fullPath"></router-view>
    </Layout>
  </el-config-provider>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Layout from "./components/Layout/index.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { useRoute } from "vue-router";
const route = useRoute();
const locale = ref(zhCn);

const fullScreens = ["/login", "/register"];
</script>
<style scoped lang="scss">
.container {
  display: flex;
}
.main {
  flex: 1;
}
.subMenu {
  width: 200px;
}
</style>
