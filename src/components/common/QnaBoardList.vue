<template>
  <BoardListComp :board-list="boardList"></BoardListComp>
  {{category}}
  <v-btn @click="()=> router.push(`/board/${category}/write`)">글 쓰기</v-btn>
</template>

<script setup>
import BoardListComp from "@/components/board/BoardListComp.vue";
import {computed, onMounted, onUpdated, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import {useRoute} from "vue-router";
import router from "@/router";

const route = useRoute()
const category = computed(()=>route.params.category)

const boardList = reactive([])

const getBoardList = ()=> {
  axiosInstance.springAxiosInst.get(`/board/list/${category.value}`, {params: {page: 0, size: 20}})
    .then((res)=> {
      boardList.length=0
      boardList.push(...res.data)
    })
}
onMounted(() => {
  getBoardList()
})
onUpdated(()=>{
  getBoardList()
})
</script>

<style scoped>

</style>