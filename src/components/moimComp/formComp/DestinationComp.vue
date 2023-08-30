<template>
<v-card>
  <v-card-title>
    여행지 정보
  </v-card-title>
  <v-select :items="countries" v-model="destinationInfo.country" @update:modelValue="getCities(destinationInfo.country)">여행 국가</v-select>
  <v-select :items="cities" v-model="destinationInfo.city" @update:modelValue="()=>emit('getOptions', destinationInfo.city)">여행 도시</v-select>
</v-card>
</template>

<script setup>
import {computed, defineEmits, defineProps, onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])
const destinationInfo = computed({
  country: "",
  city: "",
  get() {
    return props.modelValue
  },
  set(destinationInfo) {
    emit('update:modelValue', destinationInfo)
  },
})
const countries = reactive([])
onMounted(()=> {
  axiosInstance.springAxiosInst.get("/travel/country/list")
    .then((res)=> {
      countries.push(...res.data)
    })
})
const cities = reactive([])
const getCities = (country)=> {
  axiosInstance.springAxiosInst.get("/travel/city/list", {params: {country: country}})
    .then((res)=> {
      cities.push(...res.data)
    })
}

</script>

<style scoped>

</style>