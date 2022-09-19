<script setup>
import MainLayout from '@/components/MainLayout.vue';
import {RouterLink} from 'vue-router'

</script>

<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        Nyari apaan bang ?
      </h1>
    </template>

    <RouterLink to="/" class="btn btn-primary">
      Kembali
    </RouterLink>
  </MainLayout>
</template>