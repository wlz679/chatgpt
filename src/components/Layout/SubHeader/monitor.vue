<!-- YourComponent.vue -->
<template>
  <!-- 监测平台子菜单 -->
  <el-menu
    :default-active="activeMenu"
    :collapse-transition="false"
    :default-openeds="openeds"
    @select="handleMenuSelect"
  >
    <el-sub-menu index="maintain">
      <template #title>数据维护</template>
      <el-menu-item index="deviceManage">设备管理</el-menu-item>
      <el-menu-item index="pointManage">点位管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="visualization">
      <template #title>数据可视化</template>
      <el-menu-item index="oneMap">一张图</el-menu-item>
      <el-sub-menu index="trend">
        <template #title>指标趋势</template>
        <el-menu-item index="pointMetrics">点位维度</el-menu-item>
        <el-menu-item index="deviceMetrics">设备维度</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="analyze">
        <template #title>数据分析</template>
        <el-menu-item index="table">表格数据</el-menu-item>
        <el-menu-item index="samePointDiffTime"
          >同点位不同时间分析</el-menu-item
        >
        <el-menu-item index="customTime">自由选择统计周期</el-menu-item>
        <!-- <el-menu-item index="diffPoint">不同点位比较</el-menu-item> -->
        <el-menu-item index="stream">干管液位上下游分析</el-menu-item>
        <el-menu-item index="maxValue">液位最值分析</el-menu-item>
        <el-menu-item index="density">液位概率密度图</el-menu-item>
        <el-menu-item index="correlation">液位相关性分析</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="device">
      <template #title>设备维护</template>
      <!-- <el-menu-item index="deviceControl">设备控制</el-menu-item> -->
      <el-menu-item index="warningSettings">报警设置</el-menu-item>
      <el-menu-item index="warningHistory">报警列表</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="record">
      <template #title>记录管理</template>
      <el-menu-item index="checkRecord">校核记录</el-menu-item>
      <el-menu-item index="brokenRecord">故障记录</el-menu-item>
      <el-menu-item index="maintenanceRecord">维护记录</el-menu-item>
      <el-menu-item index="operationRecord">运行记录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const activeMenu = ref();

// 默认展开的菜单
const openeds = [
  "maintain",
  "visualization",
  "trend",
  "analyze",
  "device",
  "record",
];

const pathMap = {
  deviceManage: "/monitor/maintain/deviceManage",
  pointManage: "/monitor/maintain/point",
  oneMap: "/monitor/visualization/map",
  pointMetrics: "/monitor/visualization/trend/point",
  deviceMetrics: "/monitor/visualization/trend/device",
  table: "/monitor/visualization/analyze/table",
  samePointDiffTime: "/monitor/visualization/analyze/samePointDiffTime",
  customTime: "/monitor/visualization/analyze/customTime",
  diffPoint: "/monitor/visualization/analyze/diffPoint",
  stream: "/monitor/visualization/analyze/stream",
  maxValue: "/monitor/visualization/analyze/maxValue",
  density: "/monitor/visualization/analyze/density",
  correlation: "/monitor/visualization/analyze/correlation",
  deviceControl: "/monitor/device/deviceControl",
  warningSettings: "/monitor/device/warningSettings",
  warningHistory: "/monitor/device/warningHistory",
  checkRecord: "/monitor/record/check",
  brokenRecord: "/monitor/record/broken",
  maintenanceRecord: "/monitor/record/maintenance",
  operationRecord: "/monitor/record/operation",
};

const initActiveMenu = () => {
  setTimeout(() => {
    Object.entries(pathMap).forEach(([key, value]) => {
      if (route.path.startsWith(value)) {
        activeMenu.value = key;
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

<style scoped lang="scss">
.el-menu {
  height: 100%;
}
</style>
