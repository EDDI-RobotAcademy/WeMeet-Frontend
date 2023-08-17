<template>
  <sign-up-form @submit="onSubmit" />
</template>

<script>
import SignUpForm from "@/components/sign/SignUpForm.vue";
import { mapActions } from "vuex";
const userModule = 'userModule';

export default {
  components: {
    SignUpForm,
  },
  setup() {
    return {};
  },

  methods: {
    ...mapActions(userModule, ["requestSignUpToSpring"]),
    async onsubmit(payload) {
      const SignUpComponent = await this.requestSignUpToSpring(payload);
      if (SignUpComponent) {
        console.log(SignUpComponent)
        this.$router.push("/sign-in");
      }
    },
  },

};
</script>

<style lang="scss" scoped></style>