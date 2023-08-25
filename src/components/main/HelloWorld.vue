<template>
  <div class="img-container hello-top-img">

  </div>
</template>

<script setup>
import {onMounted} from "vue";
import AOS from "aos";

onMounted(()=> {
  AOS.init();
})
</script>

<style scoped>
.img-container {
    height: 100vh;
    min-width: 320px;

}

.hello-top-img {
    background-image: url("@/assets/background/helloworld_top_img.jpg");
    background-size: cover;
    background-position: 50% 100%;
    /*opacity: 10%;*/
}
</style>