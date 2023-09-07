<template>
  <div>
    <p>여행지 선택</p>
    <v-select label="국가" :items="countries" v-model="options.country"
              @update:modelValue="getCityList(options.country)"></v-select>
    <v-text-field type="text" v-if="addCountry" v-model="options.country"></v-text-field>
    <p>도시 선택</p>
    <v-select label="도시" :items="cities" v-model="options.city"
              @update:modelValue="getTravelOptions(options.country, options.city)"></v-select>
    <v-text-field type="text" v-if="addCity" v-model="options.city"></v-text-field>

    <v-btn @click="submitOption(options)">post</v-btn>
    <p>공항 선택</p>
    <v-select label="공항" :items="airports" v-model="options.departureAirport"></v-select>

    <p>옵션</p>
    <v-btn @click="addOption">옵션 추가</v-btn>
    <v-card v-for="o in options.additionalOptions" :key="o">
      <v-text-field type="text" v-model="o.optionName"> 옵션 이름</v-text-field>
      <v-text-field type="number" v-model="o.optionPrice"> 옵션 가격</v-text-field>
      <v-btn @click="deleteOption(o.optionName)">옵션 삭제</v-btn>
    </v-card>
    {{ options }}
  </div>
</template>

<script setup>

import {onMounted, reactive, ref} from "vue";
import axiosInstance from "@/utility/axiosInstance";

const options = reactive({
  country: "",
  city: "",
  departureAirport: "",
  additionalOptions: []
})
const countries = reactive(["추가하기"])
var cities = reactive(["추가하기"])
onMounted(() => {
  axiosInstance.springAxiosInst.get("/travel/country/list")
    .then((res) => {
      console.log(res)
      countries.push(...res.data)
    })
  getAirports()
})
const addCountry = ref(false)
const getCityList = (country) => {
  if (country === "추가하기") {
    addCountry.value = true
    options.country = ""
  } else {
    addCountry.value = false
    cities = reactive(["추가하기"])
    axiosInstance.springAxiosInst.get("/travel/city/list", {params: {country: country}})
      .then((res) => {
        cities.push(...res.data)
      })
  }
}

const addCity = ref(false)
const getTravelOptions = (country, city) => {
  if (city === "추가하기") {
    addCity.value = true
    options.city = ""
  } else {
    addCity.value = false
    options.additionalOptions = reactive([])
    axiosInstance.springAxiosInst.get("/travel/option/list", {params: {country: country, city: city}})
      .then((res) => {
        options.additionalOptions.push(...res.data)
      })

  }
}

const airports = reactive([])
const getAirports = () => {
  axiosInstance.springAxiosInst.get("/travel/airport/list")
    .then((res) => {
      airports.push(...res.data)
    })
}

const submitOption = ((payload) => {
  axiosInstance.springAxiosInst.post("/travel", payload)
    .then((res) => {
      options.additionalOptions = reactive([])
      options.additionalOptions.push(...res.data.additionalOptions)
      alert("정상입력 되었습니다.")
    })
})

const addOption = (() => {
  options.additionalOptions.push({
    id: Number,
    optionName: "",
    optionsPrice: 0
  })
})

const deleteOption = ((optionName) => {
  options.additionalOptions = options.additionalOptions.filter((o) => o.optionName !== optionName)
})
</script>

<style scoped>

</style>