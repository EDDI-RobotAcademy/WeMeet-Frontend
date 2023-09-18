<template>
  <VDatePicker v-model="filter.travelDates" range multi-calendars inline auto-apply></VDatePicker>
  {{filter}}
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import VDatePicker from "@vuepic/vue-datepicker";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])
const filter = computed({
  travelDates: Array,

  get() {
    return props.modelValue
  },
  set(filter) {
    emit('update:modelValue', filter)
  },
})


</script>

<style scoped>

</style>