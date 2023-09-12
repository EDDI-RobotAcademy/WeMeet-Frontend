<template>
<BoardWriteComp @submit="submit"></BoardWriteComp>
</template>

<script setup>
import BoardWriteComp from "@/components/board/BoardWriteComp.vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const props= defineProps({
  moimId: Number
})
const category = 'moim'
const submit= (payload)=> {
  payload.category = category
  axiosInstance.springAxiosInst.post(`/board/moim/${props.moimId}`, payload)
    .then((res)=> {
      router.push(`/board/${res.data.id}`)
    })
}
</script>

<style scoped>

</style>