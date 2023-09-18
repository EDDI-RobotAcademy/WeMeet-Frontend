<template>
  <div>
    <v-card>
      <v-card v-for="comment in commentList" :key="comment.id">
        {{comment}}
      </v-card>
    </v-card>
    <CommentWriteComp></CommentWriteComp>
  </div>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import {useRoute} from "vue-router";
import CommentWriteComp from "@/components/board/comment/CommentWriteComp.vue";

const route = useRoute()
const boardId = route.params.boardId

const commentList = reactive([])

onMounted(()=> {
  axiosInstance.springAxiosInst.get(`/comment/list/board/${boardId}`)
    .then(res=>{
      commentList.push(res.data)
    })
})
</script>

<style scoped>

</style>