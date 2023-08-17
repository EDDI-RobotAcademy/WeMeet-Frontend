import GoogleRedirectView from "@/views/sign/oauth/GoogleRedirectView.vue";
import KakaoRedirectView from "@/views/sign/oauth/KakaoRedirectView.vue";


const userRouter = [
  {
    path: '/login/oauth2/code/google',
    name: 'GoogleRedirectView',
    component: GoogleRedirectView
  },
  {
    path: '/login/oauth2/code/kakao',
    name: 'KakaoRedirectView',
    component: KakaoRedirectView
  },
]
export default userRouter