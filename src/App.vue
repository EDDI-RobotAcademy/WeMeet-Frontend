<template>
  <v-app class="app-container">
    <navigation-bar/>
    <HelloWorld v-if="!showMain"/>
      <v-main v-if="showMain">
      <router-view/>
      </v-main>
  <navigation-foot-bar/>
</v-app>
</template>

<script>
import NavigationBar from '@/views/navigation/NavigationBar.vue'
import NavigationFootBar from '@/views/navigation/NavigationFootBar.vue'
import {useRoute} from "vue-router";
import HelloWorld from "@/components/main/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    HelloWorld,
    NavigationBar,
    NavigationFootBar
  },
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  computed: {
    path() {
      return this.route.path
    },
    showMain() {
      return !!(this.isLogin || this.path !== '/')
    },
    isLogin() {
      return !!localStorage.getItem("isLogin");
    }
  },
  data: () => ({
    //
  }),
}
</script>
<style>
html, body {
    padding: 0;
    margin: 0;
  }
  /* .app-container {
    padding: 0;
    max-width: 1200px;
    width: 100%;
    margin: auto;
  } */
</style>