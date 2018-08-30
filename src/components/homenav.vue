<template lang="html">
   <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in imgArr" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import a from '../img/16pic_785034_b.jpg'
  import b from '../img/235111-14022F9410899.jpg'
  import c from '../img/0020033092420808_b.jpg'
  import d from '../img/timg.jpg'
  export default {
    name:'index',
    data:function() {
      return{
        imgArr:[
          {
            url:a
          },
          {
            url:b
          },
          {
            url:c
          },
          {
            url:d
          }
        ]
      }
    },
    components:{
      Swiper,
      a,
      b,
      c,
      d
    },
    mounted:function() {
      console.log('mounted', this)
      var swiper = new Swiper('.swiper-container', {
        pagination:{
          el: '.swiper-pagination'
        },
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: true,
        onTouchEnd: function() {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>
<style lang="css" scoped>
  .swiper-container {
    width: 100%;
    height: 10rem;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>
