<template>
  <div>
    <v-card>
      <v-card-title>계획 설정</v-card-title>
      <v-text-field type="number" label="taxxing 기간(일)" v-model="stateInfo.taxxingPeriod"
                    :rules="[rules.taxxingRules.minRule, rules.taxxingRules.maxRule]"></v-text-field>
      <v-text-field type="number" label="runway 기간(월)" v-model="stateInfo.runwayPeriod"
                    :rules="[rules.runwayRules.minRule, rules.runwayRules.maxRule]"></v-text-field>
      <v-date-picker v-model="stateInfo.departureDate" label="여행 출발 일"></v-date-picker>
      {{ stateInfo }}
    </v-card>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import { VDatePicker } from "vuetify/labs/components";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])

const stateInfo = computed({
  startDate: Date,
  runwayStartDate: Date,
  takeoffStartDate: Date,
  departureDate: Date,
  taxxingPeriod: Number,
  runwayPeriod: Number,
  takeoffPeriod: Number,
  get() {
    return props.modelValue
  },
  set(destinationInfo) {
    emit('update:modelValue', destinationInfo)
  },
})

const rules = {
  taxxingRules: {
    minRule: (period) => period >= 7 || "taxxing기간은 최소 7일이어야 합니다.",
    maxRule: (period) => period <= 31 || "taxxing기간은 최대 31일까지 입니다."
  },
  runwayRules: {
    minRule: (period) => period >= 3 || "runway기간은 최소 3개월이어야 합니다.",
    maxRule: (period) => period <= 18 || "runway기간은 최대 18개월까지 입니다."
  },
  takeoffRules: {
    minRule: (period) => period >= 7 || "takeoff기간은 최소 7일이어야 합니다.",
    maxRule: (period) => period <= 31 || "takeoff기간은 최대 31일까지 입니다.",
    taxxingReLativeRule: (period) => period >= stateInfo.value.taxxingPeriod || "takeoff기간은 taxxing기간보다 길어야 합니다."
  }
}
</script>

<style scoped>

</style>