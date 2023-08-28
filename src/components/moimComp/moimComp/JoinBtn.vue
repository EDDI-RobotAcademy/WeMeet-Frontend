<template>
<div>
  <v-btn @click="join">
    join
  </v-btn>
</div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const store = useStore()
const moim = computed(()=>store.state.moimModule.moim)
const getJoinable = (async ()=> axiosInstance.springAxiosInst.get(`/moim/${moim.value.id}/joinable`))
const join = (async ()=> getJoinable()
  .then(()=> {
    router.push(`/moim/${moim.value.id}/join`)
  })
  .catch(()=> {
    alert("빈 자리가 없어 해당 MOIM에 참여할 수 없습니다.")
  }))

</script>

<style scoped>

</style>