<template>
  <v-btn @click="goToFormPage">게시글 작성</v-btn>
</template>

<script setup>
import router from "@/router";

// eslint-disable-next-line no-undef
const props = defineProps({
  category: String,
  moimId: {
    type: Number
  }
});

const goToFormPage =()=> {
  if(props.category==="moim") {
    router.push(`/board/form/moim/${props.moimId}`)
  } else {
    router.push(`/board/form/${props.category}`)
  }
}
</script>

<style scoped>

</style>