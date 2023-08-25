<template>
  <div>

<!--    <HelloWorld v-if="!isLogin"></HelloWorld>-->
    <MainForm></MainForm>

  </div>
</template>

<script>
// import HelloWorld from "@/components/main/HelloWorld.vue";
import {useStore} from "vuex";
import {computed, ref} from "vue";
import MainForm from "@/components/main/MainForm.vue";
export default {
  components: {
    MainForm,
    // HelloWorld,
  },
  setup () {
    const store = useStore();
    const isLogin = ref(localStorage.getItem("isLogin"));

    return {
      user: computed(()=>store.state.userModule.user),
      isLogin
    }
  }
}
</script>

<style lang="scss" scoped>

</style>