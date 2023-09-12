<template>
  <v-card>
    <v-text-field label="title" v-model="board.contents.title"></v-text-field>
    <v-textarea label="content" v-model="board.contents.content"></v-textarea>
    <v-checkbox v-model="board.isPublic">isPublic</v-checkbox> <v-btn @click="submit">submit</v-btn>
  </v-card>
</template>

<script setup>
import {reactive, ref} from "vue";

const board = reactive({
  contents: reactive({
    title: ref(),
    content: ref()
  }),
  isPublic: ref(true)
})

const emit = defineEmits(["submit"])
const submit = ()=> {
  emit("submit", board)
}
</script>

<style scoped>

</style>