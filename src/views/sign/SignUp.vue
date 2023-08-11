<template>
  <sign-up-from @submit="onSubmit"></sign-up-from>
</template>

<script>
import SignUpFrom from "@/components/sign/SignUpFrom.vue";
import { mapActions } from "vuex";
import UserModule from "@/store/user/UserModule";

export default {
  components: {
    SignUpFrom,
  },
  setup() {
    return {};
  },

  methods: {
    ...mapActions(UserModule, ["requestSignUpToSpring"]),
    async onsubmit(payload) {
      const SignUpComponent = this.requestSignUpToSpring(payload);
      try {
        if (SignUpComponent != false) {
          this.$router.push("/sign-in");
        }
      } catch (error) {
        alert("회원가입 도중 오류발생:", console.error);
      }
    },
  },
  
};
</script>

<style lang="scss" scoped>
</style>