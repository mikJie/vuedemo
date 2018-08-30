<template lang="html">
  <div class="shopdetail">
    <home-header></home-header>
    <div class="content">
       <img :src="this.$route.params.img" alt="a">
        <p class="site-cont">{{this.$route.params.title}}</p>
        <p class="site-cont">{{this.$route.params.price}}元</p>
        <div style="height: 25px; margin-top:15%; padding-left: 15%">
          <button @click="addNum()">+</button>
          <input type="number" class="num" v-model="allNum">
          <button @click="delNum()">-</button>
          <span style="margin-left: 3rem">总价:{{allPrice}}</span>
        </div>
        <button class="sendShop">
          <router-link :to="{name:'adressDetail',params:{title:this.$route.params.title,price:allPrice}}"  class="goods-list-link">确认发货</router-link>
        </button>
    </div>
  <common-footer></common-footer>
</div>
</template>
<script>
  import HomeHeader from '../components/homeHeader'
  import CommonFooter from '../components/commonFooter'

  export default {
    created:function () {
      console.log(this.$route)
    },
    components: {
      HomeHeader,
      CommonFooter
    },
    data:function() {
      return{
        allPrice:this.$route.params.price,
        allNum:1
      }
    },
    methods:{
      addNum:function(){
        this.allNum += 1;
        this.allPrice = (this.$route.params.price*this.allNum).toFixed(2);
      },
      delNum:function(){
        if(this.allNum==1){
          this.allNum = 1
        }else {
          this.allNum -= 1;
        }
        this.allPrice = (this.$route.params.price*this.allNum).toFixed(2);
      }
    }
  }
</script>
<style scoped>
  .sendShop{
    height: 30px;
    width: 100px;
    float: right;
    margin-top: 1rem;
    margin-right: 1rem;
  }
  button{
    height: 24px;
    width: 25px;
    display: block;
    width: 20px;
    float: left;
  }
  .num{
    height: 20px;
    width: 50px;
    float: left;
    text-align: center;
  }
  p{
    width: 50%;
    float: left;
    text-align: center;
  }
</style>
