import { createRouter, createWebHistory } from 'vue-router'
import mainRouter from '@/router/main'
import userRouter from "@/router/user";
const routes = [  
  ...userRouter,
  ...mainRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
