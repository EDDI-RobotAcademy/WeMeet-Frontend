<template>
<BoardWriteComp @submit="submit"></BoardWriteComp>
</template>

<script setup>
import BoardWriteComp from "@/components/board/BoardWriteComp.vue";
import axiosInstance from "@/utility/axiosInstance";

const props = defineProps({
  category: String

})
const submit= (payload)=> {
  axiosInstance.springAxiosInst.post()
}
</script>

<style scoped>

</style>