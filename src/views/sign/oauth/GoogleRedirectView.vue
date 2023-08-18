<template>
  <div></div>
</template>

<script>

import {useRoute} from "vue-router";
import {onMounted} from "vue";
import {useStore} from "vuex";
import router from "@/router";

export default {
  setup() {
    const store = useStore()

    const requestJwtOauthGoogleToSpring = (code)=> store.dispatch("userModule/requestJwtOauthGoogleToSpring", code)
    async function setRedirectData() {
      const route = useRoute()
      const code = route.query.code
      await requestJwtOauthGoogleToSpring(code)
        .then(()=>{
          router.push('/')
        })

    }

    onMounted(()=> {
        setRedirectData()
      }
    )
    return {
      requestJwtOauthGoogleToSpring
    }
  }
}
</script>

<style scoped>

</style>