// import {
//     REQUEST_USER_LIST_TO_SPRING,
//     REQUEST_USER_TO_SPRING
// } from './mutation-types'

import axiosInst from '@/utility/axiosInstance'

export default {
    requestSignUpToSpring(_, payload) {
        const {nickname, name, email, password} = payload
        return axiosInst.springAxiosInst.post('/user/sign-up', {nickname, name, email, password})
        .then((res) => {
            if(res.data == true){
                alert('회원가입에 성공하였습니다.')
                return res.data
            }else{
                alert('회원가입에 실패하였습니다.')
                return res.data
            }             
        })
        .catch(() => {
            alert('회원가입 도중 문제가 생겼습니다.')            
            console.error();
        })
    },
    requestCheckNicknameToSpring(_, payload) {
        const {nickname} = payload
        return axiosInst.springAxiosInst.get('/user/check-nickname', {nickname})
        .then((res) => {
            if(res) {
                console.log(res.data)
                return res.data
            }
        })
        .catch (() =>{
            console.error
        })
    },
    requestCheckEmailToSpring(_, payload) {
        const {email} = payload
        return axiosInst.springAxiosInst.get('/user/check-email', {email})
        .then((res) => {
            if(res) {
                console.log(res.data)
                return res.data
            }
        })
        .catch (() =>{
            console.error
        })
    },
    requestLoginToSpring(_, payload) {
        const { email, password } = payload;
        return axiosInst.springAxiosInst.post('/user/sign-in', { email, password })
            .then((res) => {
                if (res.data.accessToken) {
                    const accessTokenKey = process.env.VUE_APP_ACCESS_TOKEN_KEY;
                    sessionStorage.setItem(accessTokenKey, res.data.accessToken);
                    alert('로그인 성공!');
                } else {
                    alert('이메일과 비밀번호를 다시 확인해주세요!');
                }
            })
            .catch((error) => {
                alert('로그인 도중 문제가 생겼습니다.');
                console.error(error);
            });
    },
    async requestGoogleOauthRedirectUrlToSpring() {
        return axiosInst.springAxiosInst.get('/oauth/google')
          .then(res=> {
              window.location.href=res.data
          })
    },
    // eslint-disable-next-line no-unused-vars
    async requestJwtOauthGoogleToSpring(_, code) {
        return axiosInst.springAxiosInst.get("/oauth/google-login", {params: {code: code}})
    }
}