<!-- 升级plus -->
<template>
  <div class="common-container">
    <h2>ChatGPT Plus 代充、代升级以及成品号购买 – 正规充值，被封可退钱</h2>
    <div class="content">
      <div>
        <section id="section1" style="height: 800px">第一部分的内容...</section>
        <section id="section2" style="height: 800px">第二部分的内容...</section>
        <section id="section3" style="height: 800px">第三部分的内容...</section>
      </div>

      <el-anchor>
        <el-anchor-link
          href="#section1"
          title="1. ChatGPT Plus 升级服务介绍"
          @click.native.prevent="scrollToSection('section1')"
        >
          <template #sub-link>
            <el-anchor-link href="#section1-1">
              1.1 为什么买 GPT-4 呢？
            </el-anchor-link>
            <el-anchor-link href="#section1-2">
              1.2 ChatGPT Plus 升级服务
            </el-anchor-link>
          </template>
        </el-anchor-link>
        <el-anchor-link
          href="#section2"
          title="2. ChatGPT Plus 售前介绍"
          @click.native.prevent="scrollToSection('section2')"
        >
          <template #sub-link>
            <el-anchor-link href="#section2-1">
              2.1 ChatGPT Plus产品权益介绍
            </el-anchor-link>
            <el-anchor-link href="#section2-2">
              2.2 ChatGPT Plus 适合什么用户？
            </el-anchor-link>
          </template>
        </el-anchor-link>
        <el-anchor-link
          href="#section3"
          title="3. ChatGPT Plus 售中介绍"
          @click.native.prevent="scrollToSection('section3')"
        >
          <template #sub-link>
            <el-anchor-link href="#section3-1">
              3.1 ChatGPT Plus成品号购买
            </el-anchor-link>
            <el-anchor-link href="#section3-2">
              3.2 ChatGPT Plus 代充升级
            </el-anchor-link>
          </template>
        </el-anchor-link>
        <el-anchor-link
          href="#section4"
          title="4. ChatGPT Plus 售后保障"
          @click.native.prevent="scrollToSection('section4')"
        >
          <template #sub-link>
            <el-anchor-link href="#section4-1">
              4.1 GPT Plus 会员被封包补
            </el-anchor-link>
            <el-anchor-link href="#section4-2">
              4.2 ChatGPT 账号防封技巧
            </el-anchor-link>
            <el-anchor-link href="#section4-3"> 4.3 用户好评 </el-anchor-link>
            <el-anchor-link href="#section4-4"> 4.4 升级后续 </el-anchor-link>
          </template>
        </el-anchor-link>
        <el-anchor-link
          href="#section5"
          title="5. ChatGPT 普通账号和 Plus 会员差别"
          @click.native.prevent="scrollToSection('section5')"
        >
        </el-anchor-link>
        <el-anchor-link
          href="#section6"
          title="6. ChatGPT Plus 如何续费会员？"
          @click.native.prevent="scrollToSection('6')"
        >
          <template #sub-link>
            <el-anchor-link href="#section6-1">
              6.1 ChatGPT Plus 续费首先点击左下角的 Renew Plus
            </el-anchor-link>
            <el-anchor-link href="#section6-2">
              6.2 ChatGPT Plus 续费，然后点击弹窗里的 支付和管理订阅
            </el-anchor-link>
            <el-anchor-link href="#section6-3">
              6.3 ChatGPT Plus 续费的价格
            </el-anchor-link>
          </template>
        </el-anchor-link>
      </el-anchor>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import anchorLocale from "../../.vitepress/i18n/component/anchor.json";
// import { useLang } from "~/composables/lang";

// const lang = useLang();
// const locale = computed(() => anchorLocale[lang.value]);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
}
</style>
