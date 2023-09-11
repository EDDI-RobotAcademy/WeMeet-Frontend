<template>
  <div class="image-container">
    <div class="overlay-text">
      <h3 data-aos="zoom-in" class="main-mt">부담없이 떠나자</h3>
      <h1 data-aos="zoom-in">Get Moim</h1>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1>우리들의 여행 모임 Get Moim</h1>
        </v-col>
        <v-col cols="2" class="flex">
          <h1>나는</h1>
        </v-col>
        <v-col cols="7" class="flex">
          <v-text-field :loading="loading" density="compact" variant="underlined" single-line hide-details
            @click:append-inner="onClick"></v-text-field>
        </v-col>
        <v-col cols="3" class="flex">
          <h1>기분이야</h1>
        </v-col>
        <v-col cols="12">
          <v-btn rounded="" class="scroll-button" @click="scrollToSection">검색</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
  <div>
    <div justify="center" class="main-controller" align="center">
      <div class="check">1</div>
      <div class="main-mb">
        <div class="text-h3" align="center" data-aos="fade-top">당신에게 추천하는 여행지!</div>
        <v-btn class="main-click" @click="asd" variant="plain" :ripple="false">
          <h3>더보기</h3>
        </v-btn>
        <Carousel :items-to-show="3" :wrap-around="false">
          <Slide v-for="slide in slides" :key="slide.id">
            <a :href="slide.link" />
            <div class="move-image">
              <img :src="slide.imageUrl" alt="Slide Image" class="carousel__item" data-aos="fade-top" />
              <div class="image-text line-break-test">{{ slide.text }}</div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    <v-btn data-aos="fade-bottom" rounded="" class="back-to-top" @click="backToTop">위로</v-btn>
  </div>
  <div class='main-mb'>
    <div class="main-line ">
      <h3 data-aos="zoom-in" class="text-h2 main-mt" align="center">이런 여행지는 어떠세요?</h3><br>
      <Carousel :autoplay="1500" :items-to-show="3" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <a :href="slide.link" />
          <div class="move-image">
            <img :src="slide.imageUrl" alt="Slide Image" class="carousel__item2" data-aos="fade-bottom" />
            <div class="image-text">{{ slide.text }}</div>
            <div class="image-text2">{{ slide.text2 }}</div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
  <div class="main-controller">
    <h3 data-aos="zoom-in" class="text-h2 main-mt" align="center">우리들의 추억</h3><br>
    <v-btn rounded="" class="more-button">
      <h3>더보기</h3>
    </v-btn>
    <Carousel :items-to-show="3" :wrap-around="false">
      <Slide v-for="slide in slides" :key="slide.id">
        <a :href="slide.link" />
        <div class="move-image">
          <img :src="slide.imageUrl" alt="Slide Image" class="carousel__item2" data-aos="fade-bottom" />
          <div class="image-text">{{ slide.text }}</div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <div class="image-container-2">
    <div class="overlay-text2">
      <h3 data-aos="fade-bottom">가고 싶은 곳이 </h3> <br>
      <h3 data-aos="fade-bottom"> 어디인지 </h3> <br>
      <h1 data-aos="fade-bottom">우리 만나서 얘기해 볼까요?</h1> <br>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import { onMounted } from "vue";
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'aos/dist/aos.css';
import '@/assets/css/Main.css';
onMounted(() => {
  AOS.init();
});

const scrollToSection = () => {
  const targetSection = document.querySelector('.check');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const backToTop = () => {
  const targetSection = document.querySelector('.image-container');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const slides = [
  { id: 1, imageUrl: 'https://i.pinimg.com/736x/bf/db/59/bfdb5989daa208595ab8b1f327004719.jpg', text: '이렇게 좋은 날에는', text2: '이거 어렵네' },
  { id: 2, imageUrl: 'https://i.pinimg.com/564x/15/8a/7c/158a7cdce435767d1c51742270ca75cd.jpg', text: '두 번째 문구' },
  { id: 3, link: 'sign-in', imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', text: '세 번째 문구' },
  { id: 4, imageUrl: 'https://i.pinimg.com/564x/c5/03/97/c50397235903be771d4a1bef987c861b.jpg', text: '네 번째 문구' },
  { id: 5, imageUrl: 'https://i.pinimg.com/564x/62/11/5e/62115e9df0db546e6e5023d97b30e18b.jpg', text: '다섯 번째 문구' }
];

</script>

<style></style>
