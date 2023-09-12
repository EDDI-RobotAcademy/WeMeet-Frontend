<template>
<v-card>
  <v-card-title>
    여행지 정보
  </v-card-title>
  <v-select :items="countries" v-model="destinationInfo.country"
            @update:modelValue="getCities(destinationInfo.country)">여행 국가
  </v-select>
  <v-select :items="cities" v-model="destinationInfo.city"
            @update:modelValue="getAirportList(destinationInfo.country, destinationInfo.city)">여행 도시
  </v-select>
  <v-select :items="airportList" v-model="destinationInfo.departureAirport"
            @update:modelValue="getOption(destinationInfo.country, destinationInfo.city, destinationInfo.departureAirport)"></v-select>
</v-card>
</template>

<script setup>
import {computed, defineEmits, defineProps, inject, onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])
const destinationInfo = computed({
  country: "",
  city: "",
  departureAirport: "",
  get() {
    return props.modelValue
  },
  set(destinationInfo) {
    emit('update:modelValue', destinationInfo)
  },
})
const countries = reactive([])
onMounted(() => {
  axiosInstance.springAxiosInst.get("/travel/country/list")
    .then((res) => {
      countries.push(...res.data)
    })
})
const emitter = inject('emitter')

let cities = reactive([])
const getCities = (country) => {
  axiosInstance.springAxiosInst.get("/travel/city/list", {params: {country: country}})
    .then(async (res) => {
      emitter.emit('deleteOption')
      cities.length = 0
      destinationInfo.value.city = ''
      cities.push(...res.data)
    })
}
const airportList = reactive([])
const getOption = async (country, city, airport) => {

  return await axiosInstance.springAxiosInst.get("/travel/option/list", {
    params: {
      country: country,
      city: city,
      airport: airport
    }
  })
    .then((res) => {
      emitter.emit('getOption', res.data)
    })
}

const getAirportList = async (country, city) => {
  return axiosInstance.springAxiosInst.get("/travel/airport/list", {params: {country: country, city: city}})
    .then((res) => {
      airportList.length = 0
      airportList.push(...res.data)
    })
}
</script>

<style scoped>

</style>