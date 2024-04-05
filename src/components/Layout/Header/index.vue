<!-- YourComponent.vue -->
<template>
  <div class="header">
    <div class="left">
      <div class="logo">
        <el-image :src="logoImg"></el-image>
        <!-- <h1 class="title">ChatGPT</h1> -->
      </div>
      <el-menu
        class="menu"
        :default-active="activeMenu"
        mode="horizontal"
        @select="handleMenuSelect"
      >
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="dynamic">最新动态</el-menu-item>
        <el-menu-item index="readme">用户必读</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import logoImg from "@/assets/logo.png";
import { useRouter, useRoute } from "vue-router";

const env = import.meta.env;

console.log("env.VITE_ENV", env.VITE_ENV);

const router = useRouter();
const route = useRoute();

const activeMenu = ref();

const pathMap = {
  home: "/home",
  dynamic: "",
  readme: "",
};

const initActiveMenu = () => {
  setTimeout(() => {
    Object.keys(pathMap).forEach((item) => {
      if (route.path.startsWith("/" + item)) {
        activeMenu.value = item;
      }
    });
    if (!activeMenu.value) {
      initActiveMenu();
    }
  }, 100);
};

const handleMenuSelect = (index: string) => {
  Object.entries(pathMap).forEach(([key, value]) => {
    if (key === index) {
      activeMenu.value = index;
      // 执行菜单选择后的逻辑
      router.push(value);
    }
  });
};

onMounted(() => {});

watch(
  () => route.path,
  () => {
    initActiveMenu();
  },
  {
    immediate: true,
  }
);
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px;
  margin-bottom: 10px;
  .left {
    flex: 1;
    display: flex;
  }
}
.logo {
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 140px;
  .title {
    font-size: 24px;
    margin-left: 8px;
  }
}
.menu {
  flex: 1;
}
:deep(.el-menu--horizontal.el-menu) {
  height: 70px;
  padding: 10px 0;
}
:deep(.el-menu--horizontal > .el-menu-item) {
  margin: 0 20px;
  font-size: 16px;
  letter-spacing: 1px;
}
</style>
