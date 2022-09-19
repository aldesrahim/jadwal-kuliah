<script setup>
import {RouterLink} from 'vue-router';

const props = defineProps(['to'])
</script>

<template>
  <li class="nav-item">
    <RouterLink class="nav-link" :to="to">
      <slot />
    </RouterLink>
  </li>
</template>