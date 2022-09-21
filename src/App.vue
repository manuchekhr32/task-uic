<template>
  <div class="bg-gray">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { provide } from "@vue/runtime-core";
import axios from "./plugins/axios";

provide('$axios', axios)
</script>

<style scoped>

</style>
