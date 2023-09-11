<template>
<div>{{board}}</div>
</template>

<script setup>
import {useRoute} from "vue-router";
import axiosInstance from "@/utility/axiosInstance";
import {onMounted, reactive} from "vue";

const route = useRoute()
const boardId = route.params.boardId

const props = defineProps({
  category: String,
});

const board = reactive({

})
onMounted(()=> {
  axiosInstance.springAxiosInst.get(`/board/${props.category}/${boardId}`)
    .then((res)=> {
      board.value = res.data
    })
})
</script>

<style scoped>

</style>