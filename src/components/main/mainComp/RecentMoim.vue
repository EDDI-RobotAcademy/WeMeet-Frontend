<template>
  <div>
    <MoimList :title="title" :moimList="moimList"></MoimList>
  </div>
</template>

<script>
import axiosInstance from "@/utility/axiosInstance";
import {reactive} from "vue";
import MoimList from "@/components/moimComp/MoimList.vue";

export default {
  name: "RecentMoim",
  components: {MoimList},

  async setup() {
    const title = "Recent MOIM"
    const moimList = reactive([])
    const requestRecentMoim = async ()=> {
      return await axiosInstance.springAxiosInst.get("/moim/list", {params: {page: 0, size: 4}})
        .then((res)=> {
          return res.data
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