<template>
  <v-col cols="7">
    <v-text-field v-model="nickname" label="nickname" variant="underlined" hide-details="auto" class="mt-4"
                  :rules="[rules.required]"/>
  </v-col>

  <v-col cols="1">
    <v-btn @click="setNickNameCheck">중복확인</v-btn>
  </v-col>

</template>

<script setup>
import {defineProps, defineEmits, computed} from 'vue';
import {useStore} from "vuex";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const nickname = computed({
  get() {
    return props.modelValue
  },
  set(nickname) {
    emit('update:modelValue', nickname)
  },

})
const rules = {
  required: nickname => !!nickname || "닉네임을 작성해 주세요."
}

const store = useStore()
const requestCheckNicknameToSpring = async ()=> store.dispatch("userModule/requestCheckNicknameToSpring", nickname)
const setNickNameCheck = async ()=> {
  try {
    const isNicknameAvailable = await requestCheckNicknameToSpring()
    console.log(isNicknameAvailable)
    if (!nickname.value) {
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
}
</script>

<style scoped>

</style>