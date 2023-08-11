import UserModule from './user/UserModule'
import { createStore } from 'vuex'

export default createStore({
  modules: {
    userModule: UserModule,
  }
})
