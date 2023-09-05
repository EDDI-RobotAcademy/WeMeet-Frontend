<template>
  <div>
    <MoimInfoComp/>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import MoimInfoComp from "@/components/moimComp/MoimInfoComp.vue";

export default {
  components: {MoimInfoComp},
  setup() {
    const store = useStore()
    const route = useRoute()
    const moimId = route.params.moimId
    onMounted(() => {
      store.dispatch("moimModule/requestMoimInfo", moimId)
    })
  }
}
</script>

<style scoped>

</style>