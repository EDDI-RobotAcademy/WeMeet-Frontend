<template>
<div>
  {{moim}}
  <!--<JoinBtn v-if="!(user.id in moim.participants.map((participant)=>participant.id))"></JoinBtn>-->
  <JoinBtn></JoinBtn>
 <BoardFormBtn category="moim" :moimId="moim.id"></BoardFormBtn>
</div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import JoinBtn from "@/components/moimComp/moimComp/JoinBtn.vue";
import BoardFormBtn from "@/components/board/comp/BoardFormBtn.vue";

export default {
  name: "MoimInfoComp",
  components: {BoardFormBtn, JoinBtn},
  setup() {
    const store = useStore()
    const moim = computed(()=>store.state.moimModule.moim)
    const user = computed(()=>store.state.userModule.user)

    return {
      user,
      moim
    }
  }
}
</script>

<style scoped>

</style>