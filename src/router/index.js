import { createRouter, createWebHistory } from 'vue-router'
import mainRouter from '@/router/main'
import userRouter from "@/router/user";
import moimRouter from "@/router/moim";
import adminRouter from "@/router/admin";
import paymentRouter from "@/router/payment";
import boardRouter from "@/router/board";
const routes = [  
  ...userRouter,
  ...mainRouter,
  ...moimRouter,
  ...adminRouter,
  ...paymentRouter,
  ...boardRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
