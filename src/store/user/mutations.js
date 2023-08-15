import {
    REQUEST_USER_LIST_TO_SPRING,
    REQUEST_USER_TO_SPRING, SET_ACCESS_TOKEN, SET_USER
} from './mutation-types'
export default {
    [REQUEST_USER_LIST_TO_SPRING] (state, receiveData) {
        state.user = receiveData
    },
    [REQUEST_USER_TO_SPRING] (state, receiveData) {
        state.user = receiveData
    },
    [SET_ACCESS_TOKEN] (state, receiveData) {
        state.accessToken = receiveData
    },
    [SET_USER] (state, receiveData) {
        state.user = receiveData
    }
}