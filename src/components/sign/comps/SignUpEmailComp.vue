<template>
  <v-col cols="7">
    <v-text-field v-model="email" label="email" variant="underlined" hide-details="auto"
                  placeholder="wemeet@gmail.com" :rules="[rules.required, rules.regex]"/>
  </v-col>

  <v-col cols="1">
    <v-btn @click="setEmailCheck">중복확인</v-btn>
  </v-col>
</template>

<script setup>
import {computed, defineEmits, defineProps} from 'vue';
import {useStore} from "vuex";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const email = computed({
  get() {
    return props.modelValue
  },
  set(nickname) {
    emit('update:modelValue', nickname)
  },

})
const rules = {
  required: email => !!email || "이메일을 작성해 주세요.",
  regex: email => {
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
    return pattern.test(email) || "올바른 이메일을 작성해주시기 바랍니다."
  }
}

const store = useStore()
const requestCheckEmailToSpring = async () => store.dispatch("userModule/requestCheckEmailToSpring", email)
const setEmailCheck = async () => {
  try {
    const isEmailAvailable = await requestCheckEmailToSpring()
    if (!email.value) {
      alert('이메일을 작성해 주세요.')
    } else if (isEmailAvailable) {
      alert('이미 등록된 이메일 입니다.');
    } else {
      alert('사용 가능한 이메일 입니다.');
    }
  } catch (error) {
    console.error('이메일 중복 체크중 오류:', error);
    alert('이메일 중복 확인 중 오류가 발생했습니다.');
  }
}
</script>

<style scoped>

</style>