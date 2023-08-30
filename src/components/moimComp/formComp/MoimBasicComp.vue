<template>
<div>
  <v-card>
    <v-card-title>기본 정보</v-card-title>
    <v-text-field v-model="basicInfo.title"> 제목 </v-text-field>
    <v-text-field v-model="basicInfo.content"> 내용 </v-text-field>
  </v-card>
</div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const basicInfo = computed({
  title: String,
  content: String,
  get() {
    return props.modelValue
  },
  set(basicInfo) {
    emit('update:modelValue', basicInfo)
  },

})
</script>

<style scoped>

</style>