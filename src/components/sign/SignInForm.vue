<template>
  <div class="login-form">
    <v-card class="form-card">
      <v-card-title class="form-title">로그인</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="onSubmit">

          <v-text-field
            v-model="email"
            label="이메일"
            type="email"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            required
            outlined
          ></v-text-field>
          <div class="button-group">
            <v-btn @click.prevent="onSubmit" type="submit" color="primary" class="submit-btn"
              >로그인</v-btn
            >
            <img
              :src="googleIcon"
              alt="Google아이콘"
              @click="onGoogleLogin"
              class="custom-icon"
            />

            <img
              :src="kakaoIcon"
              alt="Kakao아이콘"
              @click="onKakaoLogin"
              class="custom-icon"
            />
            
          </div>

        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

import { ref } from "vue";
import { useStore } from "vuex";
import googleIcon from "@/assets/google_btn.png";
import kakaoIcon from "@/assets/kakao_btn.png";



export default {
  
  setup() {
    const email = ref('');
    const password = ref('');
    const store = useStore();
    
    return {
      email,
      password,
      googleIcon,
      kakaoIcon,
      onGoogleLogin: () =>
        store.dispatch("userModule/requestGoogleOauthRedirectUrlToSpring"),
      onKakaoLogin: () =>
        store.dispatch("userModule/requestKakaoOauthRedirectUrlToSpring"),

    };
  },
  methods: {
    async onSubmit() {
      const { email, password } = this
      this.$emit("submit", { email, password })
    }
  }
};
</script>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-card {
  max-width: 400px;
  width: 100%;
  padding: 24px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
}

.submit-btn {
  margin-top: 16px;
  width: 100%;
}


.custom-icon {
  margin-top: 8px;
  width: 100%; 
  height: auto; 
  cursor: pointer;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
}
</style>
