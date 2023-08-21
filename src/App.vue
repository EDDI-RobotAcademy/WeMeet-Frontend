<template>
  <v-app class="app-container">
    <div>
      <navigation-bar/>
      <router-view/>
  </div>
  <navigation-foot-bar/>
</v-app>
</template>

<script>
import NavigationBar from '@/views/navigation/NavigationBar.vue'
import NavigationFootBar from '@/views/navigation/NavigationFootBar.vue'
export default {
  name: 'App',
  components: {
    NavigationBar,
    NavigationFootBar
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