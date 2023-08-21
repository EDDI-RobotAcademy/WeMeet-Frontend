<template>
  <v-container fluid class="sign-up-container">
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="text-h4 sign-up-text" align="center" >회원가입</v-card-title>
      <v-form @submit.prevent="onSubmit" ref="form" class="signUpForm">
        <v-row justify="center">

          <SignUpNicknameComp v-model="nickname"></SignUpNicknameComp>
          <SignUpNameComp v-model="name"></SignUpNameComp>
          <SignUpEmailComp v-model="email"></SignUpEmailComp>
          <SignUpPasswordComp v-model="password"></SignUpPasswordComp>

          <v-col cols="8">
            <v-btn width="100%" class="sign-up-check" type="submit">확인</v-btn>
          </v-col>

        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

import SignUpNicknameComp from "@/components/sign/comps/SignUpNicknameComp.vue";
import SignUpNameComp from "@/components/sign/comps/SignUpNameComp.vue"
import SignUpEmailComp from "@/components/sign/comps/SignUpEmailComp.vue";
import SignUpPasswordComp from "@/components/sign/comps/SignUpPasswordComp.vue";
import {ref} from "vue";
import "@/assets/css/Sign.css"

const userModule = 'userModule'

export default {
  components: {SignUpPasswordComp, SignUpEmailComp, SignUpNicknameComp, SignUpNameComp},
  methods: {
    ...mapActions(userModule, [
      "requestSignUpToSpring",
    ]),

    async onSubmit() {
      const payload = {
        nickname: this.nickname,
        name: this.name,
        email: this.email,
        password: this.password,
        roleType: this.roleType
      }
      if (!this.nickname) {
        alert('닉네임을 작성해 주세요.');
        return
      }
      if (!this.name) {
        alert('이름을 작성해 주세요.')
        return
      }
      if (!this.email) {
        alert('이메일을 작성해 주세요.');
        return
      }
      if (this.isPasswordEmpty) {
        alert('비밀번호를 입력하세요.')
        return
      }
      await this.requestSignUpToSpring(payload);
    },
  },

  setup() {
    const nickname = ref("");
    const name = ref("");
    const email = ref("");
    const password = ref("");




    const roleType = ref("NORMAL")

    return {
      nickname,
      name,
      email,
      password,

      roleType
    };
  }
};
</script>

<style lang="scss" scoped></style>