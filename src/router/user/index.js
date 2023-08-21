import GoogleRedirectView from "@/views/sign/oauth/GoogleRedirectView.vue";
import KakaoRedirectView from "@/views/sign/oauth/KakaoRedirectView.vue";
import SignIn from '../../views/sign/SignIn.vue'
import SignUp from '../../views/sign/SignUp.vue'

const userRouter = [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
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