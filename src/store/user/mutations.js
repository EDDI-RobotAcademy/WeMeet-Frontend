import {
  REQUEST_USER_LIST_TO_SPRING,
  REQUEST_USER_TO_SPRING,
  SET_ACCESS_TOKEN,
  SET_SIGNIN,
  SET_USER
} from './mutation-types'
import axiosInst from "@/utility/axiosInstance";

export default {
  [REQUEST_USER_LIST_TO_SPRING](state, receiveData) {
    state.user = receiveData
  },
  [REQUEST_USER_TO_SPRING](state, receiveData) {
    state.user = receiveData
  },
  [SET_ACCESS_TOKEN](state, receiveData) {
    state.accessToken = receiveData
  },
  [SET_USER](state, receiveData) {
    state.user = receiveData
  },
  [SET_SIGNIN](state, receiveData) {
    if (receiveData) {
      axiosInst.springAxiosInst.defaults.headers.common.Authorization = `Bearer ${receiveData}`
      localStorage.setItem("isLogin", true)
    } else {
      delete axiosInst.springAxiosInst.defaults.headers.common.Authorization
      localStorage.clear()
    }
  }
}