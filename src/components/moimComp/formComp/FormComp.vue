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
          <OptionComp v-model="optionsInfo"></OptionComp>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-row>
        <v-btn @click="submit">submit</v-btn>
      </v-row>
    </v-col>
  </div>
</template>

<script setup>
import MoimBasicComp from "@/components/moimComp/formComp/MoimBasicComp.vue";
import {reactive} from "vue";
import ParticipantsComp from "@/components/moimComp/formComp/ParticipantsComp.vue";
import DestinationComp from "@/components/moimComp/formComp/DestinationComp.vue";
import axiosInstance from "@/utility/axiosInstance";
import OptionComp from "@/components/moimComp/formComp/OptionComp.vue";

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
  city: ""
})
let optionsInfo = reactive([])

const submit = () => {
  const payload = {basicInfo, participantsInfo, destinationInfo, optionsInfo}
  console.log(payload)
  axiosInstance.springAxiosInst.post("/moim", payload)
    .then((res) => {
      console.log(res)
    })
}
</script>

<style scoped>

</style>