<template>
  <BoardListComp :board-list="boardList"></BoardListComp>
  <v-btn @click="()=> router.push(`/board/${category}/write`)">글 쓰기</v-btn>
</template>

<script setup>
import BoardListComp from "@/components/board/BoardListComp.vue";
import {onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import {useRoute} from "vue-router";
import router from "@/router";

const route = useRoute()
const category = route.params.category

const boardList = reactive([])
onMounted(() => {
  axiosInstance.springAxiosInst.get(`/board/list/${category}`, {params: {page: 0, size: 20}})
    .then((res)=> {
      boardList.push(...res.data)
    })
})
</script>

<style scoped>

</style>