import GoogleRedirectView from "@/views/sign/oauth/GoogleRedirectView.vue";

const userRouter = [
  {
    path: '/login/oauth2/code/google',
    name: 'GoogleRedirectView',
    component: GoogleRedirectView
  },
]
export default userRouter