<template>
  <v-card>
    {{ moim }}
    <v-row>
      <v-col>
        <v-card-title>{{ moim.title }}</v-card-title>
      </v-col>
      <v-spacer/>
      <v-col align-self="center">
        <v-card-subtitle>{{ moim.currentParticipantsNumber }}/{{ moim.maxNumOfUsers }}</v-card-subtitle>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-text class="pa-0">4 Months</v-card-text>
      </v-col>

      <v-col>
        <v-card-text class="pa-0">39900원 / 월</v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MoimCard",
  props: {
    moim: Object
  }
}
</script>

<style scoped>

</style>