<template>
  <BoardListComp :board-list="boardList"></BoardListComp>
  <BoardWriteBtn category="moim" :moimId="Number(moimId)"></BoardWriteBtn>

</template>

<script setup>
import BoardListComp from "@/components/board/BoardListComp.vue";
import {onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import {useRoute} from "vue-router";
import BoardWriteBtn from "@/components/board/comp/BoardFormBtn.vue";

const route = useRoute()
const moimId = route.params.moimId

const boardList = reactive([])
onMounted(() => {
  axiosInstance.springAxiosInst.get(`/board/list/moim/${moimId}`, {params: {page: 0, size: 20}})
    .then((res)=> {
      boardList.push(...res.data)
    })
})
</script>

<style scoped>

</style>