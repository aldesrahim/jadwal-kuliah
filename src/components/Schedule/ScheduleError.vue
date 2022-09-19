<script setup>
import MainLayout from '@/components/MainLayout.vue'
</script>
<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        Oops, terjadi kesalahan
      </h1>
    </template>

    <p class="lead font-serif">
      Sepertinya terjadi kesalahan saat mengambil jadwal, mungkin karena server sedang tidak terjangkau atau jadwal yang kamu cari belum terdaftar di aplikasi ini.
    </p>
    <p class="lead font-serif">
      Kalo kamu mau daftarin jadwal kelas kamu di aplikasi ini, kamu bisa hubungi aku via <a href="https://instagram.com/fxkinglegend" target="_blank">Instagram</a>.
    </p>

    <RouterLink
        role="button"
        class="btn btn-primary mt-1"
        :to="{ name: 'home' }"
    >
      Kembali
    </RouterLink>
  </MainLayout>
</template>