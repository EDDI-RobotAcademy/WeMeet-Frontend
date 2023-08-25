<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
    <v-container>
      <v-row >
        <v-col v-for="m in moimList" :key="m.id" sm="6" md="4">
          <MoimCard :moim="m" @click="$router.push(`/moim/${m.id}`)"></MoimCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MoimCard from "@/components/moimForm/MoimCard.vue";
import router from "@/router";

export default {
  name: "MoimList",
  methods: {
    router() {
      return router
    }
  },
  components: {MoimCard},
  props: {
    title:String,
    moimList: Array,
  },

}
</script>

<style scoped>

</style>