import { createStore } from 'vuex'

export const getters = {
  // getters 정의
}

export const mutations = {
  // mutations 정의
  fetch: jest.fn(),

}

export const actions = {
  requestSignUpToSpring: jest.fn((payload) => {
    const {nickname, name, email, password} = payload
    let user = new Object()
    user.id = 1
    user.nickname = 'test'
    user.name = 'tester'
    user.email = 'test@test.com'
    user.password = 'test@123'      
    return user
  }),

  requestLoginToSpring: jest.fn((_, payload) => {
    const { email, password } = payload;
    if (email === 'test@test.com' && password === 'test@123') {
      return Promise.resolve({ accessToken: 'mocked-access-token' });
    } else {
      return Promise.reject(new Error('Invalid credentials'));
    }
  })
}

export const state = {
  // state 정의
  users: [
    {
        userId: 1,
        nickname: 'test',
        name: 'test',
        email: 'test@test.com',
        password: 'test@123',
    },
  ],
  accessToken: null 
}

// __createMocks 함수를 직접 구현하거나 다른 방식으로 모킹하셔야 합니다.
export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {}}) {
  const mockGetters = Object.assign({}, getters, custom.getters)
  const mockMutations = Object.assign({}, mutations, custom.mutations)
  const mockActions = Object.assign({}, actions, custom.actions)
  const mockState = Object.assign({}, state, custom.state)

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    
    store: createStore({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    })
  }
}