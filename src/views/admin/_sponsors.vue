<template>
  <div v-if="loading" class="middle px-5 py-20">
    <i class="fa fa-spinner-third text-4xl text-primary animate-spin"></i>
  </div>

  <div v-else class="overflow-x-auto">
    <Table>
      <template #thead>
        <td data-orded>#</td>
        <td class="w-1/4 !text-left">F.I.Sh.</td>
        <td>Tel.raqami</td>
        <td>Homiylik summasi</td>
        <td>Sarflagan summa</td>
        <td>Sana</td>
        <td>Holati</td>
        <td>Amallar</td>
      </template>
      <template #tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td class="px-6" scope="row">
            {{ (page - 1) * size + index+1 }}
          </td>
          <td class="!text-left" data-primary :title="row.full_name">
            <span class="line-clamp-2 font-medium text-15p">
              {{ row.full_name }}
            </span>
          </td>
          <td class="!w-max">{{ row.phone }}</td>
          <td>
            <span class="font-medium text-slate-700">
              {{ uzs(row.sum) }}
              <span class="text-silver">UZS</span>
            </span>
          </td>
          <td>
            <span class="font-medium text-slate-700">
              {{ uzs(row.spent) }}
              <span class="text-silver">UZS</span>
            </span>
          </td>
          <td>{{ dateFormat(row.created_at) }}</td>
          <td :class="statusColor(row.get_status_display)" class="!text-15p">
            {{ row.get_status_display }}
          </td>
          <td>
            <button class="text-xl text-primary">
              <i class="fad fa-eye" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </template>
    </Table>
  </div>

  <Pagination v-if="!loading" :total="total" />
</template>

<script setup lang="ts">
import Table from "@/components/UI/Table.vue";
import Pagination from "@/components/UI/Pagination.vue";
import { ref } from "@vue/reactivity";
import { useFiltersMixin } from "../../mixins/filters";
import { computed, inject, onMounted, watch } from "@vue/runtime-core";
import { AxiosInstance } from "axios";
import { useRoute } from "vue-router";
const { dateFormat, uzs, statusColor } = useFiltersMixin();
const $axios: AxiosInstance = inject('$axios')!;
const route = useRoute();

const rows = ref([] as any[]);
const loading = ref(false);
const total = ref(0);

const page = computed(() => {
  return +route.query.page! || 1;
});
const size = computed(() => {
  return +route.query.size! || 10;
})

watch(route, () => {
  fetchRows();
})

const fetchRows = async () => {
  if (loading.value) return;
  loading.value = true;
  try {
    const { data } = await $axios.get(`/sponsor-list/?page=${page.value}&page_size=${size.value}`);
    rows.value = data.results;
    total.value = data.count
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
}

onMounted(() => {
  fetchRows();
})

</script>