<template>
  <div>
    <Header />
  </div>
  <div class="container">
    <div class="subMenu"><SubHeader /></div>
    <div class="main">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "./Header/index.vue";
import SubHeader from "./SubHeader/index.vue";
</script>
<style scoped lang="scss">
.container {
  display: flex;
}
.main {
  flex: 1;
  margin-top: 70px;
}
.subMenu {
  width: 200px;
  margin-right: 10px;
}
</style>
