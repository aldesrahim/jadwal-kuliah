<script setup>
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
import {onMounted, provide} from 'vue'

const props = defineProps({
  id: {
    default: 'scheduleAccordion'
  },
  data: {
    type: Array,
    required: true
  }
})

function scrollToElement() {
  const [el] = document.querySelectorAll('[data-is-today="true"]');
  if (el) {
    window.scrollTo(0, el.offsetTop - 85)
  }
}

provide('accordionId', props.id)
onMounted(() => {
  setTimeout(() => {
    scrollToElement()
  }, 1500)
})
</script>
<template>
  <div class="accordion" :id="id">
    <AccordionItem
        v-for="item in data"
        :key="item.id"
        :id="item.id"
        :expanded="item.isToday"
        :data-is-today="item.isToday"
    >
      <template #header>
        {{ item.dateReadable }}
      </template>

      <ul>
        <li v-for="schedule in item.schedules">
          <div>
            <span class="lead d-block fw-bold">{{ schedule.name }}</span>
            <span>{{ schedule.description }}</span>
          </div>
        </li>
      </ul>
    </AccordionItem>
  </div>
</template>

<style scoped>
.accordion .accordion-item[data-is-today="true"] {
  border: 2px solid var(--bs-light);
}
</style>