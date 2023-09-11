<template>
  <v-card>
    <v-row v-for="b in boardList" :key="b.id">
      <v-card @click="()=>router.push(`/board/${b.id}`)">{{b}}</v-card>
    </v-row>
  </v-card>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const props = defineProps({
  category: String,
  moimId: {
    type: Number
  }
});

const boardList = reactive([])
onMounted(() => {
  if (props.category === "moim") {
    axiosInstance.springAxiosInst.get(`/board/list/moim/${props.moimId}`, {params: {page: 0, size: 20}})
      .then((res) => {
        boardList.push(...res.data)
      })
  }
})
</script>

<style scoped>

</style>