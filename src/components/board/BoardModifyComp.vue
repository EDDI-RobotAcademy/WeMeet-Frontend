<template>
  <v-card v-if="board.hasOwnProperty('id')">
    <v-text-field label="title" v-model="board.title"></v-text-field>
    <v-textarea label="content" v-model="board.contents.content"></v-textarea>
    <v-checkbox v-model="board.isPublic">isPublic</v-checkbox>
  </v-card>
  <v-btn @click="requestModify">modify</v-btn>
  {{board}}
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const route = useRoute()
const boardId = route.params.boardId

const board = reactive({
})
onMounted(()=> {
  axiosInstance.springAxiosInst.get(`/board/${boardId}`)
    .then((res)=> {
      Object.assign(board, res.data)
    })
})

const requestModify= ()=> {
  axiosInstance.springAxiosInst.put(`/board/${boardId}`, board)
    .then(()=> {
      router.push(`/board/${boardId}`)
    })
}
</script>

<style scoped>

</style>