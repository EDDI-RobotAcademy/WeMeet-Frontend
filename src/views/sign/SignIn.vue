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
const userModule = 'userModule'

export default {
  components: {
    SignInForm,
  },
  setup() {
    return {};
  },
  methods: {
    ...mapActions(userModule, ["requestSignInToSpring"]),
    async onSubmit(payload) {
      const signInResult = await this.requestSignInToSpring(payload);
      if (signInResult) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
