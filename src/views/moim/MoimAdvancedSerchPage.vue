<template>
  <div>
    <v-row>
      <v-col>
        <DestinationSerch v-model="filter"></DestinationSerch>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <PriceSearch v-model="filter"></PriceSearch>
        </v-row>
        <v-row>
          <DateSearch v-model="filter"></DateSearch>
        </v-row>
      </v-col>
      <v-col>
        {{ moimList }}
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import {inject, reactive, ref} from "vue";
import DestinationSerch from "@/components/moimComp/serchComp/advancedSerch/DestinationSerch.vue";
import axiosInstance from "@/utility/axiosInstance";
import PriceSearch from "@/components/moimComp/serchComp/advancedSerch/PriceSearch.vue";
import DateSearch from "@/components/moimComp/serchComp/advancedSerch/DateSearch.vue";
import {addDay, addMonth} from "@/util/dateUtil";

const filter = reactive({
  country: ref(),
  city: ref(),
  departureAirport: ref(),

  rangeTotalPrice: reactive([0, 100]),
  rangeNumOfInstallment: reactive([3, 18]),
  rangeInstallment: reactive([0, 20]),

  travelDates: reactive([addMonth(new Date(), 3), addMonth(addDay(new Date, 3), 3)]),
})

const page = ref(0)
const size = ref(10)
const moimList = reactive([])

const emitter = inject("emitter")
emitter.on('requestSearch', () => {
  const payload = {...filter, page: page.value, size: size.value}
  payload.rangeTotalPrice = payload.rangeTotalPrice.join(",")
  payload.rangeNumOfInstallment = payload.rangeNumOfInstallment.join(",")
  payload.rangeInstallment = payload.rangeInstallment.join(",")
  payload.travelDates = [payload.travelDates[0].toISOString(), payload.travelDates[1].toISOString()].join(",")

  axiosInstance.springAxiosInst.get("/moim/list/advanced-search", {params: payload})
    .then((res) => {
      moimList.length = 0
      moimList.push(...res.data.content)
    })
})
</script>

<style scoped>

</style>