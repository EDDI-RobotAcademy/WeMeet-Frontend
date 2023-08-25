<template>
<div>
  {{moim}}
<JoinBtn v-if="!(user.id in moim.participants.map((participant)=>participant.id))"></JoinBtn>
</div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import JoinBtn from "@/components/moimForm/moimComp/JoinBtn.vue";

export default {
  name: "MoimInfoComp",
  components: {JoinBtn},
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