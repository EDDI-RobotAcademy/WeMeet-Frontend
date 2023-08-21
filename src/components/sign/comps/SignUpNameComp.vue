<template>
  <v-col cols="8">
    <v-text-field v-model="name" label="name" variant="underlined" hide-details="auto" class="mt-4"
                  :rules="[rules.required]"/>
  </v-col>
</template>

<script setup>
import {defineProps, defineEmits, computed} from 'vue';
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const name = computed({
  get() {
    return props.modelValue
  },
  set(name) {
    emit('update:modelValue', name)
  },

})
const rules = {
  required: name => !!name || "이름을 작성해 주세요."
}

</script>

<style scoped>

</style>