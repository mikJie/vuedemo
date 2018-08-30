<template lang="html">
  <div class="user">
    <home-header></home-header>
    <div class="user">
      <div>
        <img src="" alt="">
      </div>
      <h4 style="text-align: center">个人资料</h4>
      <div class="commontDiv">
        姓名：{{this.$route.params.name}}
      </div>
      <div class="commontDiv">
        电话：{{this.$route.params.tel}}
      </div>
      <div class="commontDiv">
        地址：{{this.$route.params.path}}
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import HomeHeader from '../components/HomeHeader'
  import CommonFooter from '../components/commonFooter'
  export default{
    created:function(){
      console.log(this.$route.params)
    },
    components:{
      HomeHeader,
      CommonFooter
    }
  }
</script>
<style scoped>
  .commontDiv{
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
  }
</style>
