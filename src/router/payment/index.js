import PaymentPage from "@/views/payment/PaymentPage.vue";

const paymentRouter = [
  {
    path: "/moim/:moimId/join/payment",
    name: "Payment",
    component: PaymentPage,
    props: true
  },

]
export default paymentRouter