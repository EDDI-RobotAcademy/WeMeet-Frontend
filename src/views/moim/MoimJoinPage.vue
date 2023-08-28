<template>
<div>
  <p>상세내역 및 약관</p>
  <p>결제</p>
  {{moim}}
  <v-btn @click="requestJoin">join</v-btn>
</div>
</template>

<script setup>
import {useStore} from "vuex";
import axiosInstance from "@/utility/axiosInstance";
import {computed} from "vue";
import router from "@/router";

const store = useStore();
const moim = computed(()=>store.state.moimModule.moim)
const requestJoin = (async ()=> {
  return axiosInstance.springAxiosInst.post(`/moim/${moim.value.id}/user`)
    .then(() => {
      console.log(moim.value.id)
      router.push(`/moim/${moim.value.id}`)
    })
})
</script>

<style scoped>

</style>