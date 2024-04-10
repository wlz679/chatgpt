<!-- 头部 -->
<template>
  <div class="header">
    <el-carousel
      height="400px"
      style="width: 50%; position: relative"
      motion-blur
      :interval="5000"
    >
      <el-carousel-item
        v-for="item in data"
        :key="item.src"
        @click="handleClick(item)"
      >
        <el-image :src="item.src" fit="contain"></el-image>
        <div class="desc">{{ item.desc }}</div>
      </el-carousel-item>
    </el-carousel>

    <div class="center">
      <el-card class="card">
        <el-image
          src="https://chatgpt123.com/wp-content/uploads/2023/08/WX20230802-104416@2x.png"
          fit="contain"
        ></el-image>
        <div class="title">ChatGPT打不开？看这篇就够了！</div>
      </el-card>
      <el-card class="card">
        <img
          src="https://img1.baidu.com/it/u=3703549214,2901691142&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
          alt=""
        />
      </el-card>
    </div>
    <div class="right">right</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import router from "@/router";

const data = ref([
  {
    src: "https://pic.rmb.bdstatic.com/bjh/events/fe7fa2b2e1d3ac7e0f20f01bab7ecf109908.jpeg",
    title: "图片1",
    desc: "GPT3.5开户、升级4.0",
    type: "buyPlus",
  },
  {
    src: "https://chatgpt123.com/wp-content/uploads/2023/12/1712719857-DALL%C2%B7E-2024-04-10-11.13.13-Refine-the-right-side-watercolor-illustration-for-GPT-Plus-in-a-dark-style-transforming-it-into-a-horizontal-banner-with-a-16_9-aspect-ratio.-Adapt-t-1.webp",
    title: "图片1",
    desc: "GPT成品号购买",
    type: "product",
  },

  {
    src: "https://pic.rmb.bdstatic.com/bjh/events/26a4024f314f622e0aed9bfb027400008138.png",
    title: "图片2",
    desc: "联系我们，交流玩法",
  },
]);

const handleClick = (row: any) => {
  if (row.type === "buyPlus") {
    router.push("/buyGptPLus");
  }
};
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
.desc {
  position: absolute;
  left: 20px;
  top: 20px;
  // text-align: center;
  color: #fff;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
}
.center {
  width: 25%;
  margin: 0 10px;
}
.card {
  position: relative;
  padding: 0 0 20px 0;
  height: 170px;
  &:first-of-type {
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    margin-top: -20px;
  }
}
.title {
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-weight: bold;
}
.right {
  width: 25%;
}
</style>
