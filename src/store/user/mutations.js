import {
    REQUEST_USER_LIST_TO_SPRING,
    REQUEST_USER_TO_SPRING
} from './mutation-types'
export default {
    [REQUEST_USER_LIST_TO_SPRING] (state, receiveData) {
        state.user = receiveData
    },
    [REQUEST_USER_TO_SPRING] (state, receiveData) {
        state.user = receiveData
    }
}