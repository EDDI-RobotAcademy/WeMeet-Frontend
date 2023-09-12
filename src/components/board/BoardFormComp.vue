<template>
  <v-card>
    <v-text-field label="title" v-model="boardInfo.contents.title"></v-text-field>
    <v-textarea label="content" v-model="boardInfo.contents.content"></v-textarea>
    <v-checkbox v-model="boardInfo.isPublic">isPublic</v-checkbox> <v-btn @click="submit">submit</v-btn>
  </v-card>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const boardInfo = reactive({
  category: "MOIM",
  contents: reactive({
    title: ref(),
    content: ref()
  }),
  isPublic: ref(true)
})

const route = useRoute()
const moimId = route.params.moimId
const submit = ()=> {
  axiosInstance.springAxiosInst.post(`/board/moim/${moimId}`, boardInfo)
    .then((res)=> {
      router.push(`/board/${res.data.id}`)
    })
}
</script>

<style scoped>

</style>