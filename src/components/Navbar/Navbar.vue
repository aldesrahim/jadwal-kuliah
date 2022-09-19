<script setup>
import NavbarItem from './NavbarItem.vue'
import NavbarBrand from './NavbarBrand.vue'
import {inject, onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {Collapse as bsCollapse} from 'bootstrap'

const route = useRoute()
const {data} = inject('scheduleData')
const bsNavbarEl = ref(null)

onMounted(() => {
  if (!bsNavbarEl.value) {
    bsNavbarEl.value = new bsCollapse('#navbar', {toggle: false})
  }
})

watch(route, () => {
  if (bsNavbarEl.value) {
    bsNavbarEl.value.hide()
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <NavbarBrand/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
              aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-uppercase" id="navbar">
        <ul class="navbar-nav ms-auto">
          <NavbarItem
              v-for="(detail, id) in data"
              :to="{ name: 'schedule', params: { id: id } }"
          >
            {{ detail.name }}
          </NavbarItem>
        </ul>
      </div>
    </div>
  </nav>
</template>