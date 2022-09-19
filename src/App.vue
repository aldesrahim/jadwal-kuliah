<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import {useSchedule} from '@/composables/useSchedule.js';
import {RouterView, useRouter} from 'vue-router'
import {provide} from 'vue';

provide('scheduleData', useSchedule().fetchMap())
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView/>
</template>