<template>
  <v-col cols="8">
    <v-text-field v-model="password" label="password" type="password" variant="underlined" hide-details="auto"
                  :rules="[rules.nullCheck, rules.valid]" />
  </v-col>

  <v-col cols="8">
    <v-text-field v-model="passwordCheck" label="passowrd_check" type="password" variant="underlined"
                  hide-details="auto" :rules="[rules.samePassword]"/>
  </v-col>
</template>

<script setup>
import {computed, defineEmits, defineProps, ref} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const password = computed({
  get() {
    return props.modelValue
  },
  set(password) {
    emit('update:modelValue', password)
  },

})
const passwordCheck = ref("")

const rules = {
  nullCheck: password => !!password || "비밀번호를 입력하세요.",
  samePassword: passwordCheck=> {
    console.log(password.value)
    console.log(passwordCheck)
    return passwordCheck===password.value||"동일한 비밀번호를 입력하세요.";
  },
  valid: (password) => {
    const pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    return pattern.test(password) || "비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.";
  }
};

</script>

<style scoped>

</style>