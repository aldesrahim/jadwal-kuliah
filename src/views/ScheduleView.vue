<script setup>
import MainLayout from '@/components/MainLayout.vue'
import ScheduleError from '@/components/Schedule/ScheduleError.vue'
import ScheduleAccordion from '@/components/Schedule/ScheduleAccordion.vue'
import {useSchedule} from '@/composables/useSchedule.js';
import {ref, watch, inject} from 'vue';

const props = defineProps({
  id: {
    required: true,
    type: String,
  }
})
const {data: scheduleData} = inject('scheduleData')
const scheduleId = ref(props.id)
const {data, error, current} = useSchedule().fetchData(scheduleData, scheduleId)

watch(props, newProps => {
  scheduleId.value = newProps.id
})
</script>

<template>
  <ScheduleError v-if="error" />
  <MainLayout v-else>
    <template #header>
      <h1 class="display-2">
        {{ current ? current.name : '' }}
      </h1>
    </template>

    <ScheduleAccordion :data="data ?? []" />
  </MainLayout>
</template>