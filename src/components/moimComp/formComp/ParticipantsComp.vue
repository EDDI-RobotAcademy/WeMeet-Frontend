<template>
<v-card>
  <v-card-title>참여자 설정</v-card-title>
  <v-text-field v-model="participantsInfo.maxParticipants">최대 참여 가능 인원</v-text-field>
  <v-text-field v-model="participantsInfo.minParticipants">최소 참여 필요 인원</v-text-field>
</v-card>

</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const participantsInfo = computed({
  get() {
    return props.modelValue
  },
  set(participantsInfo) {
    emit('update:modelValue', participantsInfo)
  },

})
</script>

<style scoped>

</style>