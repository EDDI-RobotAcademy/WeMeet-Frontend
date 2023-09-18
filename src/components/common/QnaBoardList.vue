<template>
  <BoardListComp :board-list="boardList"></BoardListComp>
  {{category}}
  <v-btn @click="()=> router.push(`/board/${category}/write`)" v-if="checkAdmin">글 쓰기</v-btn>
</template>

<script setup>
import BoardListComp from "@/components/board/BoardListComp.vue";
import {computed, onMounted, onUpdated, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import {useRoute} from "vue-router";
import router from "@/router";
import {useStore} from "vuex";

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

const store = useStore()
const userRole = computed(()=> {
  return store.state.userModule.user.roleType
})
const checkAdmin = computed(()=> {
  console.log(category.value)
  console.log(userRole.value)
  if(category.value === "faq") {
    if(userRole.value ==="ADMIN") {
      return true
    }
  }
  return false
})
</script>

<style scoped>

</style>