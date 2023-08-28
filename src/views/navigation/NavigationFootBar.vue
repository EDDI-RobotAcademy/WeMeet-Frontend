<template>
  <v-footer class="bg-grey-lighten-4 footer-content">
    <router-link to="/admin">관리자 페이지</router-link>
  </v-footer>
</template>

<script>
export default {
  setup() {

  },
};
</script>

<style lang="css" scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: left;
  padding: 1.5rem 0;
}

.footer-name {
  margin: 0;
  left: 0;
}

.footer-item {
  margin-top: 1rem;
}
.footer-item2 {
  border-top: 1px solid #7e7e7e;
  border-bottom: 1px solid  #7e7e7e;  
  margin-top: 1rem;
  color: gray;
  padding: 1rem;
}
.github-link-mt{
  margin-top: 2rem;
}
</style>
