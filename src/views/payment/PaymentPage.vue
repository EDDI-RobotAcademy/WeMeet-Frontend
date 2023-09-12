<template>
<PaymentComp v-model="paymentInfo"></PaymentComp>
</template>

<script setup>
/* global IMP */
import PaymentComp from "@/components/payment/PaymentComp.vue";
import {onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import axiosInstance from "@/utility/axiosInstance";

IMP.init("imp82167178")
const route = useRoute()
const moimId = route.params.moimId
const paymentInfo = reactive({
  totalPrice: ref(),
  amountInstallment: ref(),
  numInstallments: ref()
})
onMounted(()=> {
  axiosInstance.springAxiosInst.get(`/payment/moim/${moimId}`)
    .then((res)=> {
      paymentInfo.totalPrice = res.data.totalPrice
      paymentInfo.amountInstallment = res.data.amountInstallment
      paymentInfo.numInstallments = res.data.numInstallments
    })
})

</script>

<style scoped>

</style>