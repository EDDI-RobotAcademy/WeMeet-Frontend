<template>
  <div>
    <MoimList :title="title" :moimList="moimList"></MoimList>
  </div>
</template>

<script>
import axiosInstance from "@/utility/axiosInstance";
import {reactive} from "vue";
import MoimList from "@/components/moimForm/MoimList.vue";

export default {
  name: "RecentMoim",
  components: {MoimList},

  async setup() {
    const title = "Recent MOIM"
    const moimList = reactive([])
    const requestRecentMoim = async ()=> {
      return await axiosInstance.springAxiosInst.get("/moim/list", {params: {page: 0, size: 4}})
        .then((res)=> {
          console.log(res.data["MoimList"])
          return res.data["MoimList"]
        })
    }
    moimList.push(...await requestRecentMoim())
    return {
      moimList,
      title
    }
  }
}

</script>

<style scoped>

</style>