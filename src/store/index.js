import userModule from './user/UserModule'
import moimModule from './moim/MoimModule'
import { createStore } from 'vuex'

export default createStore({
  modules: {
    userModule: userModule,
    moimModule: moimModule
  }
})
