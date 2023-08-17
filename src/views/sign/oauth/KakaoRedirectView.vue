<template>
    <div></div>
  </template>
  
  <script>
  
  import {useRoute} from "vue-router";
  import {onMounted} from "vue";
  import {useStore} from "vuex";
  
  export default {
    setup() {
      const store = useStore()
  
      const requestJwtOauthKakaoToSpring = (code)=> store.dispatch("userModule/requestJwtOauthKakaoToSpring", code)
      async function setRedirectData() {
        const route = useRoute()
        const code = route.query.code
        await requestJwtOauthKakaoToSpring(code)
      }
  
      onMounted(()=> {
          setRedirectData()
        }
      )
      return {
        requestJwtOauthKakaoToSpring
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>