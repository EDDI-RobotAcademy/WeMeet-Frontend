import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'aos/dist/aos.css'
import 'vue3-carousel/dist/carousel.css'
import mitt from "mitt";

loadFonts()
let app = createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)

let emitter = mitt()
app.provide('emitter', emitter)
app.mount('#app')