<template>
  <v-card>
    <v-row v-for="b in props.boardList" :key="b.id">
      <v-card @click="()=>router.push(`/board/${b.id}`)">{{b}}</v-card>
    </v-row>
  </v-card>

</template>

<script setup>
import {onMounted, reactive} from "vue";
import axiosInstance from "@/utility/axiosInstance";
import router from "@/router";

const props = defineProps({
  boardList: Array
});

</script>

<style scoped>

</style>