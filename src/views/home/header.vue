<!-- 头部 -->
<template>
  <div class="header">
    <el-carousel height="400px" style="width: 50%" motion-blur>
      <el-carousel-item v-for="item in data" :key="item.src">
        <el-image :src="item.src" fit="contain"></el-image>
        <div class="desc">{{ item.desc }}</div>
      </el-carousel-item>
    </el-carousel>
    <div>center</div>
    <div>right</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const data = ref([
  {
    src: "https://pic.rmb.bdstatic.com/bjh/events/fe7fa2b2e1d3ac7e0f20f01bab7ecf109908.jpeg",
    title: "图片1",
    desc: "GPT3.5开户、升级4.0",
  },
  {
    src: "https://pic.rmb.bdstatic.com/bjh/events/26a4024f314f622e0aed9bfb027400008138.png",
    title: "图片2",
    desc: "联系我们，交流玩法",
  },
]);
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
