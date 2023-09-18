<template>
<BoardWriteComp @submit="submit"></BoardWriteComp>
</template>

<script setup>
import BoardWriteComp from "@/components/board/BoardWriteComp.vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const props = defineProps({
  category: String

})

const submit= (payload)=> {
  payload.category = props.category
  axiosInstance.springAxiosInst.post(`/board/${props.category}`, payload)
    .then((res)=>{
      router.push(`/board/${res.data.board.id}`)
    })
}
</script>

<style scoped>

</style>