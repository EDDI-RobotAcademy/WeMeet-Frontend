<template>
<div>
  <v-col>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="8">
  <suspense>
  <RecentMoim></RecentMoim>
  </suspense>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-col>
</div>
</template>

<script>
import RecentMoim from "@/components/main/mainComp/RecentMoim.vue";

export default {
  name: "MainForm",
  components: {RecentMoim}
}
</script>

<style scoped>

</style>