<script setup>
import LayoutNav from "./components/LayoutNav.vue"
import LayoutHeader from "./components/LayoutHeader.vue"
import LayoutFooter from "./components/LayoutFooter.vue"
import LayoutFixed from "./components/LayoutFixed.vue"

import { useCategoryStore } from "@/stores/category.js"
import { onMounted } from "vue"

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>


<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口 -->
  <!-- 添加key 破坏复用机制 触发生命周期钩子 -->
  <!-- <RouterView :key="$route.fullPath"></RouterView> -->
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>
