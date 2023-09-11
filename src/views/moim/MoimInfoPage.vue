<template>
  <div>
    <MoimInfoComp/>
    <BoardListComp category="moim" :moimId="moimId"></BoardListComp>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import MoimInfoComp from "@/components/moimComp/MoimInfoComp.vue";
import BoardListComp from "@/components/board/BoardListComp.vue";

export default {
  components: {BoardListComp, MoimInfoComp},
  setup() {
    const store = useStore()
    const route = useRoute()
    const moimId = route.params.moimId
    onMounted(() => {
      store.dispatch("moimModule/requestMoimInfo", moimId)
    })
    return {
      moimId
    }
  }
}
</script>

<style scoped>

</style>