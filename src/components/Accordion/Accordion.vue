<script setup>
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
import {provide} from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})

provide('accordionId', props.id)
</script>
<template>
  <div class="accordion" :id="id">
    <AccordionItem
        v-for="(item, key) in data"
        :key="(item.id ?? key)"
        :id="(item.id ?? key)"
        :expanded="item.expanded ?? false"
    >
      <template #header>
        <template v-html="item.header" />
      </template>

      <template v-html="item.body" />
    </AccordionItem>
  </div>
</template>