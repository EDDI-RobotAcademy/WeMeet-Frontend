<template>
  <v-card v-if="board.hasOwnProperty('id')">
    <v-text-field label="title" v-model="board.contents.title"></v-text-field>
    <v-textarea label="content" v-model="board.contents.content"></v-textarea>
    <v-checkbox v-model="board.isPublic">isPublic</v-checkbox>
  </v-card>
  <v-btn @click="submit">submit</v-btn>
  <v-btn @click="submit">modify</v-btn>
  {{board}}
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const route = useRoute()
const boardId = route.params.boardId
const category = route.params.category

const board = reactive({
})
onMounted(()=> {
  axiosInstance.springAxiosInst.get(`/board/${category}/${boardId}`)
    .then((res)=> {
      Object.assign(board, res.data)
    })
})

const submit= ()=> {
  axiosInstance.springAxiosInst.put(`/board/${category}/${boardId}`, board)
    .then(()=> {
      router.push(`/board/${boardId}`)
    })
}
</script>

<style scoped>

</style>