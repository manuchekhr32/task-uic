<template>
  <div class="grid md:grid-cols-1-2max md:grid-rows-1 grid-cols-1-max grid-rows-2 justify-between text-black font-rubik text-15 items-center mt-6 gap-4">
    <div class="col-start-1 row-start-1">
      <span>{{ total }} tadan {{ (page - 1) * size + 1 }}-{{ size * page }} ko'rsatilmoqda</span>
    </div>

    <div class="middle gap-3 col-start-2 row-start-1">
      <label for="p_show">Ko'rsatish</label>
      <select id="p_show" v-model="size" class="ui-input h-8" @change="setSize">
        <option :value="i*10" v-for="i in 10" :key="i">{{ i*10 }}</option>
      </select>
    </div>

    <div class="flex gap-2 row-start-2 col-start-1 col-span-2 justify-center md:row-start-1 md:col-start-3">
      <button
        @click="setPage('prev')"
        :disabled="page === 1"
        :class="page === 1 ? 'disabled !bg-gray-blue !text-dark-silver' : ''"
        class="ui-input pagination__item middle w-8 h-8"
      >
        <i class="fa fa-chevron-left text-sm text-light-silver" aria-hidden="true"></i>
      </button>
      <button 
        v-for="p in pages-2 > page ? 2 : 4" :key="p" 
        @click="setPage(page + p - 1)"
        :class="page + p - 1 === page ? 'active' : ''"
        class="ui-input pagination__item middle"
      >
        {{ page + p - 1 }}
      </button>
      <div v-if="pages-2 > page" class="ui-input pagination__item middle">
        ...
      </div>
      <button 
        v-if="pages-2 > page"
        @click="setPage(pages)"
        :class="pages === page ? 'active' : ''"
        class="ui-input pagination__item middle"
      >
        {{ pages }}
      </button>
      <button 
        @click="setPage('next')"
        :disabled="page === pages"
        :class="page === pages ? 'disabled !bg-gray-blue !text-dark-silver' : ''"
        class="ui-input pagination__item middle"
      >
        <i class="fa fa-chevron-right text-sm text-light-silver" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
const props = defineProps<{ total: number }>();
const route = useRoute();
const router = useRouter();

const size = ref(+route.query.size! || 10);
const page = ref(+route.query.page! || 1);

const setSize = () => {
  router.push({ ...route, query: { ...route.query, size: size.value, } })
}

const setPage = (p: number | 'next' | 'prev') => {
  if (typeof p === 'number') page.value = p;
  if (p === 'prev') page.value--;
  if (p === 'next') page.value++;
  router.push({ ...route, query: { ...route.query, page: page.value, } })
}

const pages = computed(() => {
  return Math.ceil(props.total / size.value)
})

</script>

<style scoped>
  .pagination__item {
    @apply w-8 h-8 font-medium text-sm transition-colors duration-100;
  }
  .pagination__item:hover, .pagination__item.active {
    @apply border-primary text-primary;
  }
</style>