<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="mx-auto mt-4">회원가입</v-card-title>
      <v-form @submit.prevent="onSubmit" ref="form" class="signUpForm">
        <v-row justify="center">

          <v-col cols="7">
            <v-text-field v-model="nickname" label="nickname" variant="underlined" hide-details="auto" class="mt-4"
              :ref="nicknameFieldRef" @click="handleNicknameFieldClick" />
            <p v-if="showNicknameMessage && isNicknameEmpty">닉네임을 작성해 주세요.</p>
          </v-col>

          <v-col cols="1">
            <v-btn @click="setNickNameCheck">중복확인</v-btn>
          </v-col>

          <v-col cols="8">
            <v-text-field v-model="name" label="name" variant="underlined" hide-details="auto" :ref="nameFieldRef"
              @click="handleNameFieldClick" />
            <p v-if="showNameMessage && isNameEmpty">이름을 작성해 주세요.</p>
          </v-col>

          <v-col cols="7">
            <v-text-field v-model="email" label="email" variant="underlined" hide-details="auto"
              placeholder="wemeet@gmail.com" :ref="emailFieldRef" @click="handleEmailFieldClick" />
            <p v-if="showEmailMessage && isEmailEmpty">이메일을 작성해 주세요.</p>
            <p v-else-if="showEmailMessage && !isEmailValid">올바른 이메일을 작성해주시기 바랍니다.</p>
          </v-col>

          <v-col cols="1">
            <v-btn @click="setEmailCheck">중복확인</v-btn>
          </v-col>

          <v-col cols="8">
            <v-text-field v-model="password" label="password" type="password" variant="underlined" hide-details="auto"
              :ref="passwordFieldRef" @click="handlePasswordFieldClick" />
            <p v-if="showPasswordMessage && isPasswordEmpty">비밀번호를 입력하세요.</p>
            <p v-else-if="showPasswordMessage && !isPasswordValid">비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.</p>
          </v-col>

          <v-col cols="8">
            <v-text-field v-model="password_check" label="passowrd_check" type="password" variant="underlined"
              hide-details="auto" />
          </v-col>

          <v-col cols="8">
            <v-btn width="100%" class="mb-5" type="submit">확인</v-btn>
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
    async setNickNameCheck() {
      try {
        const isNicknameAvailable = await this.requestCheckNicknameToSpring({ nickname: this.nickname });
        if (this.isNicknameEmpty) {
          alert('닉네임을 작성해 주세요.')
        }
        else if (isNicknameAvailable) {
          alert('이미 등록된 닉네임 입니다.');
        } else {
          alert('사용 가능한 닉네임 입니다.');
        }
      } catch (error) {
        console.error('닉네임 중복 체크중 오류:', error);
        alert('닉네임 중복 확인 중 오류가 발생했습니다.');
      }
    },

    async setEmailCheck() {
      try {
        const isEmailAvailable = await this.requestCheckEmailToSpring({ email: this.email })
        if (this.isEmailEmpty) {
          alert('이메일을 작성해 주세요.')
        }
        else if (isEmailAvailable) {
          alert('이미 등록된 이메일 입니다.')
        } else {
          alert('사용 가능한 이메일 입니다.')
        }
      } catch (error) {
        console.error('이메일 중복 체크중 오류:', error);
        alert('이메일 중복 확인 중 오류가 발생했습니다.');
      }
    },

    async onSubmit() {
      const payload = {
        nickname: this.nickname,
        name: this.name,
        email: this.email,
        password: this.password,
        roleType: this.roleType
      }
      if (this.isNicknameEmpty) {
        alert('닉네임을 작성해 주세요.');
        return
      }
      if (this.isNameEmpty) {
        alert('이름을 작성해 주세요.')
        return
      }
      if (this.isEmailEmpty) {
        alert('이메일을 작성해 주세요.');
        return
      }
      if (this.isPasswordEmpty) {
        alert('비밀번호를 입력하세요.')
        return
      }
      if (this.password != this.password_check) {
        alert('비밀번호가 다릅니다.')
        return
      }
      await this.requestSignUpToSpring(payload);
    },
  },

  setup() {
    const nickname = ref("");
    const nicknameFieldRef = ref(null);
    const showNicknameMessage = ref(false);
    const isNicknameEmpty = computed(() => nickname.value === "");
    const handleNicknameFieldClick = () => {
      showNicknameMessage.value = true;
    };

    const name = ref("");
    const nameFieldRef = ref(null);
    const showNameMessage = ref(false);
    const isNameEmpty = computed(() => name.value === "");
    const handleNameFieldClick = () => {
      showNameMessage.value = true;
    };

    const email = ref("");
    const emailFieldRef = ref(null);
    const showEmailMessage = ref(false);
    const isEmailEmpty = computed(() => email.value === "");
    const isEmailValid = computed(() => {
      const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
      return emailRegex.test(email.value);
    });
    const handleEmailFieldClick = () => {
      showEmailMessage.value = true;
    };

    const password = ref("");
    const passwordFieldRef = ref(null);
    const showPasswordMessage = ref(false);
    const isPasswordEmpty = computed(() => password.value === "");
    const isPasswordValid = computed(() => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      return passwordRegex.test(password.value);
    });
    const handlePasswordFieldClick = () => {
      showPasswordMessage.value = true;
    };

    const password_check = ref("");

    const roleType = ref("NORMAL")

    return {
      nickname,
      nicknameFieldRef,
      showNicknameMessage,
      isNicknameEmpty,
      handleNicknameFieldClick,

      name,
      nameFieldRef,
      showNameMessage,
      isNameEmpty,
      handleNameFieldClick,

      email,
      emailFieldRef,
      showEmailMessage,
      isEmailEmpty,
      isEmailValid,
      handleEmailFieldClick,

      password,
      passwordFieldRef,
      showPasswordMessage,
      isPasswordEmpty,
      isPasswordValid,
      handlePasswordFieldClick,

      password_check,

      roleType
    };
  }
};
</script>

<style lang="scss" scoped></style>