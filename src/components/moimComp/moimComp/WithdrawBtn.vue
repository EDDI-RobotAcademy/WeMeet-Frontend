<template>
  <div>
    <v-btn @click="withdraw">
      withdraw
    </v-btn>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const store = useStore()
const moim = computed(() => store.state.moimModule.moim)
const getJoinable = (async () => axiosInstance.springAxiosInst.delete(`/moim/${moim.value.id}/user`))
const withdraw = (async () => getJoinable()
    .then(() => {
      router.push(`/`)
    })
)
</script>

<style scoped>

</style>