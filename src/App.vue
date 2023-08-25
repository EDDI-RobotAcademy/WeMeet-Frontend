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
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavigationBar,
    NavigationFootBar
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const user = computed(() => store.state.userModule.user)
    const path = computed(() => {
      return route.path
    })

    const showMain = computed((() => {
      return !!(Object.prototype.hasOwnProperty.call(user.value, 'id') || path.value !== '/')
    }))

    return {
      route,
      user,
      path,
      showMain
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