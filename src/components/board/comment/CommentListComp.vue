<template>
  <div>
    <v-card>
      <v-card v-for="comment in commentList" :key="comment.id">
        {{comment}}
        {{ comment.writer.id }}
        <v-btn v-if="comment.writer.id===userId" @click="deleteComment(comment.id)">delete</v-btn>
      </v-card>
    </v-card>
    <CommentWriteComp></CommentWriteComp>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import {useRoute} from "vue-router";
import CommentWriteComp from "@/components/board/comment/CommentWriteComp.vue";
import {useStore} from "vuex";

const route = useRoute()
const boardId = route.params.boardId
const store = useStore()
const userId = computed(()=> {
  return store.state.userModule.user.id
})

const commentList = reactive([])

onMounted(()=> {
  getCommentList()
})

const getCommentList = ()=> {
  return axiosInstance.springAxiosInst.get(`/comment/list/board/${boardId}`)
    .then(res=>{
      commentList.push(...res.data)
    })
}

const deleteComment = (commentId)=> {
  console.log(commentId)
  axiosInstance.springAxiosInst.delete(`/comment/${commentId}`)
    .then(()=>{
      commentList.length = 0
      return getCommentList()
    })
}
</script>

<style scoped>

</style>