<template>
  <v-col>
    <v-row>
      <v-range-slider v-model="filter.rangeTotalPrice"
                      label="totalPrice" :min="rangeTotalPrice[0]" :max="rangeTotalPrice[1]" thumb-label="always"
                      step="1" @update:focused="()=>emitter.emit('requestSearch')"></v-range-slider>
    </v-row>
    <v-row>
      <v-range-slider v-model="filter.rangeNumOfInstallment" label="NumOfInstallment" :min="rangeNumOfInstallment[0]"
                      :max="rangeNumOfInstallment[1]"
                      thumb-label="always" step="1"
                      @update:focused="()=>emitter.emit('requestSearch')"></v-range-slider>
    </v-row>
    <v-row>
      <v-range-slider v-model="filter.rangeInstallment" label="installment" :min="rangeInstallment[0]"
                      :max="rangeInstallment[1]" thumb-label="always"
                      @update:focused="()=>emitter.emit('requestSearch')"
                      step="1"></v-range-slider>
    </v-row>
  </v-col>
</template>

<script setup>
import {computed, defineEmits, defineProps, inject, reactive} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])
const filter = computed({
  rangeTotalPrice: Array,

  RangeNumOfInstallment: Array,

  RangeInstallment: Array,
  get() {
    return props.modelValue
  },
  set(filter) {
    emit('update:modelValue', filter)
  },
})

const rangeTotalPrice = [0, 1200]
const rangeNumOfInstallment = [3, 18]
const rangeInstallment = [0, 100]

const emitter = inject("emitter")
</script>

<style scoped>

</style>