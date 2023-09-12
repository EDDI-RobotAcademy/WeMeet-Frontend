<template>
  <div>
    <v-col>
      <v-row>
        <v-spacer/>
        <v-col cols="10">
          <MoimBasicComp v-model="basicInfo"></MoimBasicComp>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-col cols="10">
          <ParticipantsComp v-model="participantsInfo"></ParticipantsComp>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-col cols="10">
          <DestinationComp v-model="destinationInfo"></DestinationComp>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-col cols="10">
          <StateComp v-model="stateInfo"></StateComp>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-col cols="10">
          <OptionComp v-model="optionsInfo"></OptionComp>
        </v-col>
        <v-spacer/>
      </v-row>

      <v-row>
        <v-spacer>
          <v-col cols="10">
            {{ paymentInfo.totalPrice }}
          </v-col>
        </v-spacer>
      </v-row>
      <v-row>
        <v-btn @click="submit">submit</v-btn>
      </v-row>
    </v-col>
  </div>
</template>

<script setup>
import MoimBasicComp from "@/components/moimComp/formComp/MoimBasicComp.vue";
import {reactive, ref, watch} from "vue";
import ParticipantsComp from "@/components/moimComp/formComp/ParticipantsComp.vue";
import DestinationComp from "@/components/moimComp/formComp/DestinationComp.vue";
import axiosInstance from "@/utility/axiosInstance";
import OptionComp from "@/components/moimComp/formComp/OptionComp.vue";
import StateComp from "@/components/moimComp/formComp/StateComp.vue";
import {addDay, addMonth} from "@/util/dateUtil"
import router from "@/router";

const basicInfo = reactive({
  title: "",
  content: "",
})
const participantsInfo = reactive({
  maxParticipants: 10,
  minParticipants: 2
})
const destinationInfo = reactive({
  country: "",
  city: "",
  departureAirport: ""
})
let optionsInfo = reactive([])
const stateInfo = reactive({
  startDate: new Date(),
  taxxingPeriod: 7,
  runwayPeriod: 3,
  takeoffPeriod: 7,
  runwayStartDate: addDay(new Date(), 7),
  takeoffStartDate: addMonth(addDay(new Date(), 7), 3),
  departureDate: ref(addDay(addMonth(addDay(new Date(), 7), 3), 7)),
  returnDate: ref(addDay(addMonth(addDay(new Date(), 7), 3), 9))
})

const paymentInfo = reactive({
  totalPrice: 0
})
watch(optionsInfo, ()=> {
  paymentInfo.totalPrice = optionsInfo.reduce((acc, option)=>{return acc += option.optionPrice}, 0)
})

const submit = () => {
  const payload = {basicInfo, participantsInfo, destinationInfo, optionsInfo, stateInfo, paymentInfo}
  console.log(payload)
  axiosInstance.springAxiosInst.post("/moim", payload)
    .then((res) => {
      router.push(`/moim/${res.data.id}/join/payment`)
    })
}
</script>

<style scoped>

</style>