<template>
    <v-footer class="bg-grey-lighten-4 mt-5">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4 mb-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>We-Meet</strong>
        </v-col>
          
          <v-btn variant="plain" :ripple="false" class="mx-2" rounded="xl">FrontEnd</v-btn>
          <v-btn variant="plain" :ripple="false" class="mx-2" rounded="xl">BackEnd</v-btn>
          <v-btn variant="plain" :ripple="false" class="mx-2" rounded="xl">FastApi</v-btn>
      </v-row>
    </v-footer>
  </template>

<script>
export default {
    setup () {
        
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>