<template>
<div>
  {{moim}}
<!--<JoinBtn v-if="!(user.id in moim.participants?.map((user)=>user.id))"></JoinBtn>-->
</div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
// import JoinBtn from "@/components/moimForm/moimComp/JoinBtn.vue";

export default {
  name: "MoimInfoComp",
  // components: {JoinBtn},
  setup() {
    const store = useStore()
    const moim = computed(()=>store.state.moimModule.moim)
    const user = computed(()=>store.state.userModule.user)
    console.log(user.value.id in moim.value.participants.map(participant=>participant.id))

    return {
      user,
      moim
    }
  }
}
</script>

<style scoped>

</style>