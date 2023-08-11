// import { shallowMount } from '@vue/test-utils'
// import SignUpFrom from '@/components/sign/SignUpFrom.vue'
// import { __createMocks as createBoardStoreMocks } from '@/store/user/__mocks__'


jest.mock("@/store/user/UserModule")
import { __createMocks as createUserStoreMocks } from '@/store/user/__mocks__'

// describe(SignUpFrom, () => {
//   it('renders props.msg when passed', ()=> {
//     let user = new Array()
//     user.id = 1
//     user.nickname = 'test'
//     user.name = 'tester'
//     user.email = 'test@test.com'
//     user.password = 'test@123'    

//     const wrapper = shallowMount(SignUpFrom, {
//       propsData: { users: user }
//     })
//     expect(wrapper.props().boards).toBe(board)
//   })
// })

describe('requestSignUpToSpring', () => {
  test('Spring에 게시물 작성 요청 검증', async () => {
    const storeMock = createUserStoreMocks()

    const nickname = "nickname"
    const name = "name"
    const email = "email"
    const password = "password"

    let user = new Object()
    user.id = 1
    user.nickname = 'test'
    user.name = 'tester'
    user.email = 'test@test.com'
    user.password = 'test@123'    

    await expect(storeMock.actions.requestSignUpToSpring({nickname, name, email, password})).toStrictEqual(user) 
  })
})