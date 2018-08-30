<template lang="html">
  <div class="user">
    <home-header></home-header>
    <div class="user">
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
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
    },
    mounted(){
      this.drawLine()
    },
    methods: {
      drawLine:function(){
        // 基于准备好的dom，初始化echarts实例
        let data = [5, 20, 36, 10, 10, 20];
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let option = this.test('bar',data)
        console.log(option)
        myChart.setOption(option)
      }
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
