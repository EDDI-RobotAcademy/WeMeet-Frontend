<template>
<div>{{board.value}}</div>
  <v-btn @click="router.push(`/board/${board.value.category}/modify/${board.value.id}`)"> modify</v-btn>
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
  axiosInstance.springAxiosInst.get(`/board/${props.category}/${boardId}`)
    .then((res)=> {
      board.value = res.data
    })
})
</script>

<style scoped>

</style>