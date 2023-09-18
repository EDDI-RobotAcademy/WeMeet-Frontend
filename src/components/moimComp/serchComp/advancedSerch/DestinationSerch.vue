<template>
<div>
  <v-row>
    <v-select label="country" v-model=destination.country :items="countryList" @update:modelValue="getCityList"></v-select>
    <v-select label="city" v-model="destination.city" :items="cityList" @update:modelValue="getDepartureAirportList"></v-select>
    <v-select label="departureAirport" v-model="destination.departureAirport" :items="departureAirportList" @update:modelValue="()=>emitter.emit('requestSearch')"></v-select>
  </v-row>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps, inject, onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])
const destination = computed({
  country: String,
  city: String,
  departureAirport: String,
  get() {
    return props.modelValue
  },
  set(destination) {
    emit('update:modelValue', destination)
  },
})

const countryList = reactive([])

onMounted(()=>{
  axiosInstance.springAxiosInst.get("/travel/country/list")
    .then((res)=> {
      countryList.length = 0
      countryList.push(...res.data)
    })
})
const emitter = inject("emitter")
const cityList = reactive([])

const getCityList = ()=> {
  axiosInstance.springAxiosInst.get("/travel/city/list", {params: {country: destination.value.country}})
    .then((res)=> {
      cityList.length = 0
      destination.value.city = null
      destination.value.departureAirport = null
      cityList.push(...res.data)
      emitter.emit("requestSearch")
    })
}
const departureAirportList = reactive([])
const getDepartureAirportList = ()=> {
  axiosInstance.springAxiosInst.get("/travel/airport/list", {params: {country: destination.value.country, city: destination.value.city}})
    .then((res)=> {
      destination.value.departureAirport = null
      departureAirportList.length = 0
      departureAirportList.push(...res.data)
      emitter.emit("requestSearch")
    })
}
</script>

<style scoped>

</style>