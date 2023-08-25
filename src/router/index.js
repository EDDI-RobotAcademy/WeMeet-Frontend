import { createRouter, createWebHistory } from 'vue-router'
import mainRouter from '@/router/main'
import userRouter from "@/router/user";
import moimRouter from "@/router/moim";
const routes = [  
  ...userRouter,
  ...mainRouter,
  ...moimRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
