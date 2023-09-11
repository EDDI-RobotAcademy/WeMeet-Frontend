<template>
<div>
  <p>상세내역 및 약관</p>

  <v-btn @click="goToPaymentPage">지금 결제하기</v-btn>
  <v-btn @click="requestJoin">나중에 결제하기</v-btn>
  {{moim}}

</div>
</template>

<script setup>
import {useStore} from "vuex";
import axiosInstance from "@/utility/axiosInstance";
import {computed, onMounted} from "vue";
import router from "@/router";
import {useRoute} from "vue-router";

const store = useStore();
const moim = computed(()=>store.state.moimModule.moim)
onMounted(()=> {
  const route = useRoute()
  const moimId = route.params.moimId
  store.dispatch("moimModule/requestMoimInfo", moimId)
})
const requestJoin = (async ()=> {
  return axiosInstance.springAxiosInst.post(`/moim/${moim.value.id}/user`)
    .then(() => {
      console.log(moim)
      router.push(`/moim/${moim.value.id}`)
    })
})
const goToPaymentPage = ()=> {
  return axiosInstance.springAxiosInst.post(`/moim/${moim.value.id}/user`)
    .then(() => {
      console.log(moim)
      router.push(`/moim/${moim.value.id}/join/payment`)
    })
}
</script>

<style scoped>

</style>