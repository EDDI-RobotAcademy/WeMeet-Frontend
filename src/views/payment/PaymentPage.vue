<template>
<PaymentComp v-model="paymentInfo"></PaymentComp>
</template>

<script setup>
/* global IMP */
import PaymentComp from "@/components/payment/PaymentComp.vue";
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import axiosInstance from "@/utility/axiosInstance";

IMP.init("imp82167178")
const route = useRoute()
const moimId = route.params.moimId
const paymentInfo = reactive({})
onMounted(()=> {
  axiosInstance.springAxiosInst.get(`/payment/moim/${moimId}`)
    .then((res)=> {
      paymentInfo.totalPrice = res.data.totalPrice
    })
})

</script>

<style scoped>

</style>