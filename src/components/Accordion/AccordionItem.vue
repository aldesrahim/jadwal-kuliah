<script setup>
import {computed, inject} from 'vue'

const props = defineProps({
  id: {
    required: true
  },
  expanded: {
    type: Boolean,
    default: false
  }
})
const accordionId = inject('accordionId')
const headingId = computed(() => `${accordionId}-${props.id}-heading`)
const collapseId = computed(() => `${accordionId}-${props.id}-collapse`)
</script>
<template>
  <div class="accordion-item" :id="id">
    <div class="accordion-header" :id="headingId">
      <button
          class="accordion-button"
          :class="{ 'collapsed': !expanded }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#${collapseId}`"
          :aria-expanded="expanded"
          :aria-controls="collapseId"
      >
        <slot name="header"/>
      </button>
    </div>

    <div
        :id="collapseId"
        class="accordion-collapse collapse"
        :class="{ 'show': expanded }"
        :aria-labelledby="headingId"
        :data-bs-parent="`#${accordionId}`"
    >
      <div class="accordion-body">
        <slot />
      </div>
    </div>
  </div>
</template>