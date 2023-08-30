<template>
  <div>
    <FormComp></FormComp>
    <v-btn @click="requestCreateMoim(moimInfo)">create Moim</v-btn>
  </div>
</template>

<script>
import FormComp from "@/components/moimComp/formComp/FormComp.vue";
import axiosInstance from "@/utility/axiosInstance";
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

    const requestCreateMoim = (payload)=>{
      return axiosInstance.springAxiosInst.post("/moim", payload)
        .then(()=> {

        })
        .catch()
    }
    return {
      moimInfo,
      requestCreateMoim
    }
  }
}
</script>

<style scoped>

</style>