<template>
  <v-footer class="bg-grey-lighten-4 footer-content">
    <v-row class="" justify="left" no-gutters>
      <v-col cols="12">
        <h1 class="footer-name">We-Meet</h1>
      </v-col>
        <v-col class="footer-item2" cols="4">
          <h3>Address & Contact</h3>
          <p>대표번호: 1588-xxxx</p>
        <p>주소 : 서울특별시 강남구 강남구 테헤란로14길 6, 2층</p>
        <p>개인정보관리 책임자 : 장xx (wemeet@redholic.com)</p>
      </v-col>
      <v-col class="footer-item2" cols="4">
        <h3>We-Meet Information</h3>
          <p>상호 : We-Meet</p>
          <p>주소 : 서울특별시 강남구 강남구 테헤란로14길 6, 2층</p>
          <p>사업자 등록번호 : 211-xx-xxxxx</p>        
        <p>대표 : xxx</p>
        <p>전화 : 02.3446.3775</p>        
        <br>

      </v-col>
      <v-col class="footer-item2" cols="4">
        <h3>Check Me</h3>
        <p>wemeet@email.com</p>
      </v-col>
      <h3 class="github-link-mt">github Link</h3>
      <v-col class="footer-item" cols="12">
        <a href="https://github.com/reberel/WeMeet-Frontend">
        <v-btn variant="plain" :ripple="false" class="mx-2" rounded="xl">FrontEnd</v-btn>
        </a>
        <a href="https://github.com/reberel/WeMeet-Backend">
        <v-btn variant="plain" :ripple="false" class="mx-2" rounded="xl">BackEnd</v-btn>
      </a>
      <a href="https://github.com/reberel/WeMeet-FastApi">
        <v-btn variant="plain" :ripple="false" class="mx-2" rounded="xl">FastApi</v-btn>
      </a>
      </v-col>
    </v-row>
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
