<template>
  <v-container fluid>
    <v-card class="mx-auto sign-up-mr" max-width="800">
      <v-card-title class="mx-auto mt-4 mb-4 text-h4" align="center">회원가입</v-card-title>
      <v-form @submit.prevent="onSubmit" ref="form" class="signUpForm">
        <v-row justify="center">

          <v-col cols="7">
            <v-text-field
              v-model="nickname"
              label="nickname"
              variant="underlined"
              hide-details="auto"
              class="mt-4"
              :ref="nicknameFieldRef"
              @click="handleNicknameFieldClick"
            />
            <p v-if="showNicknameMessage && isNicknameEmpty">닉네임을 작성해 주세요.</p>
          </v-col>

          <v-col cols="1">
            <v-btn @click="setNickNameCheck">중복확인</v-btn>
          </v-col>

          <v-col cols="8">
            <v-text-field
              v-model="name"
              label="name"
              variant="underlined"
              hide-details="auto"
              :ref="nameFieldRef"
              @click="handleNameFieldClick"

            />
            <p v-if="showNameMessage && isNameEmpty">이름을 작성해 주세요.</p>
          </v-col>

          <v-col cols="7">
            <v-text-field
              v-model="email"
              label="email"
              variant="underlined"
              hide-details="auto"
              placeholder="wemeet@gmail.com"
              :ref="emailFieldRef"
              @click="handleEmailFieldClick"
            />
            <p v-if="showEmailMessage && isEmailEmpty">이메일을 작성해 주세요.</p>
            <p v-else-if="showEmailMessage && !isEmailValid">올바른 이메일을 작성해주시기 바랍니다.</p>
          </v-col>

          <v-col cols="1">
            <v-btn @click="setEmailCheck">check</v-btn>
          </v-col>

          <v-col cols="8">
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              variant="underlined"
              hide-details="auto"
              :ref="passwordFieldRef"
              @click="handlePasswordFieldClick"
            />
            <p v-if="showPasswordMessage && isPasswordEmpty">비밀번호를 입력하세요.</p>
            <p v-else-if="showPasswordMessage && !isPasswordValid">비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.</p>
          </v-col>
          
          <v-col cols="8">
            <v-text-field
              v-model="password_check"
              label="passowrd_check"
              type="password"
              variant="underlined"
              hide-details="auto"
            />
          </v-col>

          <v-col cols="8">
            <v-btn width="100%" class="sign-up-mb" type="submit">확인</v-btn>
          </v-col>

        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { computed, ref } from "vue";
import { mapActions } from "vuex";
const userModule = 'userModule'

export default {
  methods: {
    ...mapActions(userModule, [
      "requestSignUpToSpring",
      "requestCheckNicknameToSpring",
      "requestCheckEmailToSpring"
    ]),
    async onSubmit() {
      const payload = {
        nickname: this.nickname,
        name: this.name,
        email: this.email,
        password: this.password
      }
      await this.requestSignUpToSpring(payload);
      
      if (this.isNicknameEmpty) {
        alert('닉네임을 작성해 주세요.');
        return
      }
      if (!this.setNickNameCheck == false) {
        alert('닉네임 중복확인을 해주세요.')
      }      
      if (this.isNameEmpty) {
        alert('이름을 작성해 주세요.')
        return
      }
      if (this.isEmailEmpty) {
        alert('이메일을 작성해 주세요.');
        return
      }
      if (!this.setEmailCheck == false) {
        alert('이메일 중복확인을 해주세요.')
      }
      if (this.isPasswordEmpty) {
        alert('비밀번호를 입력하세요.')
        return
      }
    },

    async setNickNameCheck () {
       this.nickname = await this.requestCheckNicknameToSpring({nickname: this.nickname})
       if (this.nickname == false) {
         alert('이미 등록된 닉네임 입니다.')
       }else{
         alert('사용 가능한 닉네임 입니다.')
       }
     },
     async setEmailCheck () {
      if (!this.isEmailValid) {
        alert('올바른 이메일 형식을 입력해 주세요.');
      }
      this.email = await this.requestCheckEmailToSpring({email: this.email})
      if (this.email == false) {
        alert('이미 등록된 아이디 입니다.')
      }else{
        alert('사용 가능한 아이디 입니다.')
      }
     },     
  },

  setup() {
    const nickname = ref("");
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const password_check = ref("");

    const nicknameFieldRef = ref(null);
    const nameFieldRef = ref(null);
    const emailFieldRef = ref(null);
    const passwordFieldRef = ref(null);

    const showNicknameMessage = ref(false);
    const showNameMessage = ref(false);
    const showEmailMessage = ref(false);
    const showPasswordMessage = ref(false);
    
    const isNicknameEmpty = computed(() => nickname.value === "");
    const isNameEmpty = computed(() => name.value === "");
    const isEmailEmpty = computed(() => email.value === "");
    const isEmailValid = computed(() => {
      const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
      return emailRegex.test(email.value);
    });
    const isPasswordEmpty = computed(() => password.value === "");
    const isPasswordValid = computed(() => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      return passwordRegex.test(password.value);
    });

    const handleEmailFieldClick = () => {
      showEmailMessage.value = true;
    };
    const handleNicknameFieldClick = () => {
      showNicknameMessage.value = true;
    };
    const handleNameFieldClick = () => {
      showNameMessage.value = true;
    };
    const handlePasswordFieldClick = () => {
      showPasswordMessage.value = true;
    };

    return {
      nickname,
      name,
      email,
      password,
      password_check,

      nicknameFieldRef,
      nameFieldRef,
      emailFieldRef,
      passwordFieldRef,

      showNicknameMessage,
      showNameMessage,
      showEmailMessage,
      showPasswordMessage,

      isNicknameEmpty,
      isNameEmpty,
      isEmailEmpty,
      isPasswordEmpty,

      isEmailValid,
      isPasswordValid,

      handleEmailFieldClick,
      handleNicknameFieldClick,
      handleNameFieldClick,
      handlePasswordFieldClick,
      
    };
  }
};
</script>

<style lang="css">
.sign-up-mr{
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.sign-up-mb{
  margin-bottom: 3rem;
}
</style>