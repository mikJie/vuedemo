<template lang="html">
  <div class="index">
      <home-header></home-header>
      <home-nav></home-nav>
      <div class="content">
        <ul>
          <li v-for="(v,index) in tabs" @click="tab(index)">
            {{v}}
          </li>
        </ul>
        <div class="tabContents">
          <div v-for="(v,index) in tabContents" v-show="index==num">
            {{v}}
          </div>
        </div>
        <ol>
         <li v-for="v in 21">{{v}}</li>
        </ol>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/homeHeader'
import CommonFooter from '../components/commonFooter'
import HomeNav from '../components/homenav'


export default {
  data:function() {
    return {
      tabs:['标题一','标题二','标题三','标题四'],
      tabContents:['内容一','内容二','内容三','内容四'],
      num:2,
    }
  },
  methods:{
    tab:function(index){
      this.num = index
    }
  },
  components: {
    HomeHeader,
    CommonFooter,
    HomeNav
  }
}
</script>

<style lang="css" scoped>
  .content{
    overflow: scroll;
    height: 26rem;
  }
  ol{
    height:100%;
  }
  ol li{
    height: 3rem;
    color: white;
    background: skyblue;
    line-height: 3rem;
    text-align: center;
    border-bottom: 1px solid gray;
  }
  .content::-webkit-scrollbar{
    display: none
  }
  .content ul{
    height: 3rem;
  }
  .content ul li{
    width: 25%;
    height: 3rem;
    line-height: 3rem;
    float: left;
    color: white;
    background: skyblue;
    text-align: center;
  }
  .tabContents div{
    height: 10rem;
    line-height: 10rem;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    border: 1px solid skyblue;
  }
</style>
