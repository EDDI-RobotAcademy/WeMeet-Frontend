<template>
<div>
  {{moim}}
  <!--<JoinBtn v-if="!(user.id in moim.participants.map((participant)=>participant.id))"></JoinBtn>-->
  <JoinBtn></JoinBtn>
  <WithdrawBtn></WithdrawBtn>
</div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onMounted, reactive} from "vue";
import JoinBtn from "@/components/moimComp/moimComp/JoinBtn.vue";
import WithdrawBtn from "@/components/moimComp/moimComp/WithdrawBtn.vue";
import {useRoute} from "vue-router";
import axiosInstance from "@/utility/axiosInstance";

const store = useStore()
const user = computed(() => store.state.userModule.user)

const route = useRoute()
const moimId = route.params.moimId
const moim = reactive({})
onMounted(()=> {
  requestMoimInfo()
})

const requestMoimInfo = ()=> {
  axiosInstance.springAxiosInst.get(`/moim/${moimId}`)
    .then(res=>{
      Object.assign(moim, res.data)
    })
}
</script>

<style scoped>

</style>