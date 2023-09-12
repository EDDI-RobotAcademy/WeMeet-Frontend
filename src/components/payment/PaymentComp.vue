<template>
  <v-btn @click="requestPay('danal_tpay')"> 카드 결제하기</v-btn>
  <v-btn @click="requestPay('tosspay')"> 토스페이로 결제하기</v-btn>
  <v-btn @click="requestPay('kakaopay')">카카오페이로 결제하기</v-btn>

</template>

<script setup>
/* global IMP */
import axiosInstance from "@/utility/axiosInstance";
import {useRoute} from "vue-router";
import {computed, defineEmits, defineProps} from "vue";
import router from "@/router";

const route = useRoute()
const moimId = route.params.moimId

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'getOptions'])
const paymentInfo = computed({
  totalPrice: Number,
  amountInstallment: Number,
  numInstallments: Number,

  get() {
    return props.modelValue
  },
  set(paymentInfo) {
    emit('update:modelValue', paymentInfo)
  },
})
const requestPay = (pg) => {
  const customer_uid = self.crypto.randomUUID()
  const merchant_uid = self.crypto.randomUUID()
  const pgProvider = pg
  const payMethod = "card"
  const name = "get-moim"

  const springPayload = {
    customer_uid,
    pgProvider,
    payMethod,
    merchant_uid
  }
  axiosInstance.springAxiosInst.post(`/payment/moim/${moimId}`, springPayload)
    .then(()=>{
      IMP.request_pay({
        customer_uid: customer_uid,
        pg: pgProvider,
        pay_method: payMethod,
        merchant_uid: merchant_uid,
        name: name,
        // amount: paymentInfo.value.totalPrice,
        amount: paymentInfo.value.amountInstallment
      }, (rsp) => {
        console.log(rsp.success)
        if (rsp.success) {
          alert("결제가 정상적으로 요청 되었습니다.")
          router.push(`/moim/${moimId}`)
        } else {
          alert(rsp.error_msg)
        }
      })
    })

}
</script>

<style scoped>

</style>