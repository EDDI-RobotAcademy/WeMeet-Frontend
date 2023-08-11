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
    }
}