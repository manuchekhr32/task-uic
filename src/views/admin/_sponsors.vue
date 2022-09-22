<template>
  <div class="overflow-x-auto">
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
          <td class="px-6" scope="row">{{ index+1 }}</td>
          <td class="!text-left" data-primary :title="row.full_name">
            <span class="line-clamp-2 font-medium text-15p">
              {{ row.full_name }}
            </span>
          </td>
          <td class="!w-max">{{ row.phone }}</td>
          <td>
            <span class="font-medium text-slate-700">
              {{ $filters.uzs(row.sum) }}
              <span class="text-silver">UZS</span>
            </span>
          </td>
          <td>
            <span class="font-medium text-slate-700">
              {{ $filters.uzs(row.spent) }}
              <span class="text-silver">UZS</span>
            </span>
          </td>
          <td>{{ $filters.dateFormat(row.created_at) }}</td>
          <td :class="$filters.statusColor(row.get_status_display)" class="!text-15p">
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

  <Pagination :total="59" />
</template>

<script setup lang="ts">
import Table from "@/components/UI/Table.vue";
import Pagination from "@/components/UI/Pagination.vue";
import { reactive } from "@vue/reactivity";

const rows = reactive([
  {
    "id": 591,
    "full_name": "Sint nihil non dignissimos natus explicabo Et quae dolores porro facere expedita eius et eligendi",
    "phone": "+998 (18) 382 01 93",
    "sum": 500000,
    "payment_type": [
      {
        "id": 44,
        "title": "Naqd pul"
      }
    ],
    "firm": "Dolor odit repellendus Sapiente aliquafa",
    "spent": 0,
    "created_at": "2022-09-10T21:24:34.187154+05:00",
    "get_status_display": "Moderatsiyada"
  },
  {
    "id": 590,
    "full_name": "Rahmonov Otabek Farhodjon o'g'li",
    "phone": "+998 (99) 862 41 22",
    "sum": 0,
    "payment_type": [
      {
        "id": 46,
        "title": "Pul ko‘chirish"
      }
    ],
    "firm": "",
    "spent": 0,
    "created_at": "2022-09-08T23:49:54.236924+05:00",
    "get_status_display": "Bekor qilingan"
  },
  {
    "id": 589,
    "full_name": "Iroda Abduraxmonova Yashin qizi",
    "phone": "+998 (99) 204 14 31",
    "sum": 5000000,
    "payment_type": [
      {
        "id": 46,
        "title": "Pul ko‘chirish"
      }
    ],
    "firm": "",
    "spent": 0,
    "created_at": "2022-09-05T11:18:58.264395+05:00",
    "get_status_display": "Yangi"
  },
  {
    "id": 588,
    "full_name": "Narziyeva Zuxro Amrullayevna",
    "phone": "+998 (91) 241 02 20",
    "sum": 13000000,
    "payment_type": [
      {
        "id": 46,
        "title": "Pul ko‘chirish"
      }
    ],
    "firm": "",
    "spent": 0,
    "created_at": "2022-09-01T21:39:10.549895+05:00",
    "get_status_display": "Tasdiqlangan"
  },
])


</script>