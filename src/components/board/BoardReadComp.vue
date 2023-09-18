<template>
<div>{{board.value}}</div>
  <v-btn @click="router.push(`/board/modify/${board.value.id}`)"> modify</v-btn>
  <v-btn @click="deleteBoard">delete</v-btn>
</template>

<script setup>
import {useRoute} from "vue-router";
import axiosInstance from "@/utility/axiosInstance";
import {onMounted, reactive} from "vue";
import router from "@/router";

const route = useRoute()
const boardId = route.params.boardId

const props = defineProps({
  category: String,
});

const board = reactive({

})
onMounted(()=> {
  console.log(props.category)
  axiosInstance.springAxiosInst.get(`/board/${boardId}`)
    .then((res)=> {
      board.value = res.data
    })
})

const deleteBoard =()=> {
  axiosInstance.springAxiosInst.delete(`/board/${boardId}`)
    .then(()=>{
      router.go(-1)
    })
}
</script>

<style scoped>

</style>