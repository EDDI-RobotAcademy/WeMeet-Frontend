jest.mock("@/store/user/UserModule")
import { __createMocks as createUserStoreMocks } from '@/store/user/__mocks__'

describe('requestSignUpToSpring', () => {
  test('should requestSignUpToSpring', async () => {
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