<template>
  <div>
    <h1>Login page</h1>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from "@vue/runtime-core";
import { AxiosInstance } from "axios";
const $axios: AxiosInstance = inject('$axios')!;

</script>