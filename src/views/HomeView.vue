<script setup>
import MainLayout from '@/components/MainLayout.vue'
import {inject} from 'vue';

const {data} = inject('scheduleData')
</script>

<template>
  <MainLayout>
    <template #header>
      <p class="lead">
        Hai 👋,<br> selamat datang di aplikasi
      </p>
      <h1 class="display-2">
        Jadwal Kuliah
      </h1>
    </template>

    <p class="lead font-serif my-4">
      Memudahkan kamu jika kamu mau lihat jadwal perkuliahan. Kalo kelas kamu mau ditambah di aplikasi ini, bisa chat aku di
      <a href="https://instagram.com/fxkinglegend" target="_blank">Instagram</a>
    </p>

    <div class="d-flex flex-wrap gap-2 gap-lg-3">
      <RouterLink
          role="button"
          class="btn btn-outline-light"
          v-for="(detail, id) in data"
          :to="{ name: 'schedule', params: { id: id } }"
      >
        {{ detail.name }}
      </RouterLink>
    </div>
  </MainLayout>
</template>