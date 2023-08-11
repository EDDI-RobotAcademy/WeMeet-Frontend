<template lang="">
  <v-app-bar :style="appBarStyle" scroll-behavior="elevate">
    <v-spacer/>
    <v-col cols="auto">
    <v-btn to="/test2">123</v-btn>
  </v-col>
  <v-col cols="auto">
    <v-btn variant="plain" :ripple="false" to="/">We-Meet</v-btn>
  </v-col>
  <v-spacer/>
  <v-spacer/>
  <v-spacer/>
      <v-col cols="auto">
        <v-btn>이벤트</v-btn>
      </v-col>
      <v-col cols="auto">
      <v-btn rounded variant="outlined" style="color: orange" @click="setSignIn">로그인</v-btn>
      </v-col>
      <v-btn icon="mdi-dots-vertical" @click="setTestOne"></v-btn>
    <v-spacer/>
  </v-app-bar>
</template>

<script>
import { ref, onMounted } from 'vue';
import router from '@/router'
export default {
  setup () {
    const appBarStyle = ref({ backgroundColor: 'transparent' });

    const setSignIn = () => {
      router.push('/sign-in');
    };
    const setTestOne = () => {
      router.push('/test');
    };

    onMounted(() => {
      // 스크롤 이벤트를 추가하여 스크롤을 감지하고 배경을 변경합니다.
      window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      // 스크롤 위치를 확인하여 배경 색상을 조절합니다.
      if (window.scrollY > 0) {
        appBarStyle.value.backgroundColor = 'white';
      } else {
        appBarStyle.value.backgroundColor = 'transparent';
      }
    };

    return {
      appBarStyle,
      setSignIn,
      setTestOne
    };
  }
}
</script>

<style lang="scss" scoped>

</style>