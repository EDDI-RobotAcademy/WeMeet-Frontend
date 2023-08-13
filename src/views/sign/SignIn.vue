<template>
  <v-container class="mt-6">
    <v-responsive class="mx-auto" max-width="800" center>
      <v-card>
        <v-card-title class="mt-2">로그인</v-card-title>
        <SignInForm @submit="onSubmit" />
        <router-link to="/sign-up">회원가입</router-link>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import SignInForm from "@/components/sign/SignInForm.vue";
import { mapActions } from "vuex";
import UserModule from "@/store/user/UserModule";

export default {
  components: {
    SignInForm,
  },
  setup() {
    return {};
  },
  methods: {
    ...mapActions(UserModule, ["requestSignInToSpring"]),
    async onSubmit(payload) {
      try {
        const signInResult = await this.requestSignInToSpring(payload);

        if (signInResult) {
          this.$router.push("/");
        } else {
          alert("로그인 실패: 아이디나 비밀번호를 확인하세요.");
        }
      } catch (error) {
        alert("로그인 도중 오류발생:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
