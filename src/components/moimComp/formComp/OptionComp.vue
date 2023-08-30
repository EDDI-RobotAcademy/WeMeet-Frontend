<template>
  <div>
    <v-card>
      <v-card-title>옵션 정보</v-card-title>
        <div v-for="o in options" :key="o" style="display: flex">
          <v-checkbox @update:modelValue="addOption(o)"></v-checkbox>
          <div style="float: left">
            {{o.optionName}}
          </div>
          <div style="float: right;">
            {{o.optionPrice}}
          </div>
        </div>
    </v-card>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps, inject, reactive} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])
const optionsInfo = computed({
  country: "",
  city: "",
  get() {
    return props.modelValue
  },
  set(destinationInfo) {
    emit('update:modelValue', destinationInfo)
  },
})

let options = reactive([])
const emitter = inject('emitter')
emitter.on('getOption', (o) => {
  options.length = 0
  options.push(...o)
})
emitter.on('deleteOption', () => {
  options.length = 0
})

const addOption = (option)=> {
  if(optionsInfo.value.some((oldO)=>oldO.id===option.id)) {
    const tmpArr = optionsInfo.value.filter((oldO)=>oldO.id!==option.id)
    optionsInfo.value.length = 0
    optionsInfo.value.push(...tmpArr)
  } else {
    optionsInfo.value.push(option)
  }
}
</script>

<style scoped>

</style>