<template>
  <v-btn @click="goToFormPage">게시글 작성</v-btn>
</template>

<script setup>
import router from "@/router";

// eslint-disable-next-line no-undef
const props = defineProps({
  category: String,
  moimId: Number
});

const goToFormPage =()=> {
  if(props.category==="moim") {
    router.push(`/board/${props.category}/${props.moimId}/write`)
  } else {
    router.push(`/board/${props.category}/write`)
  }
}
</script>

<style scoped>

</style>