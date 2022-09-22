<template>
  <div class="min-h-screen pb-5">
    <Header />
    <HeaderSub />

    <div class="middle px-4 mt-12">
      <div class="w-full max-w-1200">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Header from "@/components/Header/index.vue";
import HeaderSub from "@/components/Header/Sub.vue";
</script>