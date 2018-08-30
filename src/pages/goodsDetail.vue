<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <!--<p class="site-title">{{headtitle}}</p>-->
      <img :src="this.$route.params.img" alt="a">
      <p class="site-cont">{{this.$route.params.title}}</p>
      <button>
       <router-link :to="{name:'shopDetail',params:{img:this.str.img,title:this.str.title,price:this.str.price}}"  class="goods-list-link">
        加入购物车
       </router-link>
      </button>
      <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import CommonFooter from '../components/commonFooter'

export default {
  created :function() {
    console.log(this.$route)
    this.str = this.$route.params;
  },
  components: {
    DetailHeader,
    CommonFooter
  }
//  data :{
//    str:''
//  },
//  methods:{
//    addShop(){
//      console.log(this.str)
//      this.$router.push({
//        name:"user",
//        parpms:this.str
//      })
//    }
//  }
}
</script>

<style scoped>
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  .detail > p.site-cont {
    color: #666;
    font-size: 1rem;
    text-align: center;
  }
  button{
    float: right;
    margin-right: 2rem;
  }
</style>
