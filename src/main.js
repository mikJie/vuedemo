// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Distpicker from 'v-distpicker'
import Swiper from 'swiper'
import echarts from 'echarts'
import base from './Echarts'

Vue.prototype.$echarts = echarts

// // 引用API文件
// import api from './api/index.js'
// // 将API方法绑定到全局
// Vue.prototype.$api = api

Vue.use(VueResource)
Vue.use(base)
Vue.component('v-distpicker', Distpicker)
Vue.component('swiper', Swiper)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
