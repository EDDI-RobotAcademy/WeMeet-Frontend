<template>
  <div>
    <FormComp></FormComp>
  </div>
</template>

<script>
import FormComp from "@/components/moimComp/formComp/FormComp.vue";
import {reactive} from "vue";

export default {
  name: "MoimFormPage",
  components: {FormComp},
  setup() {
    const moimInfo = reactive({
      title: "title",
      maxNumOfUsers: 10,
      minNumOfUsers: 3
    })


    return {
      moimInfo,
    }
  }
}
</script>

<style scoped>

</style>