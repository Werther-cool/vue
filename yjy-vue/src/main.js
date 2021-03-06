// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import WxConfig from './util/wxConfig'

Vue.use(WxConfig);

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload,{
  loading:'/static/images/placehold.jpg',
  try:3
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
