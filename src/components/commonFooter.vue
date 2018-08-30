<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
        <li><router-link to="index">首页</router-link></li>
        <li><router-link to="shoplist">列表</router-link></li>
        <li><router-link to="echarts">图表</router-link></li>
        <li><router-link to="user">我的</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="css">

  .footer {
    height:3rem;
    width: 100%;
    position: fixed;
    bottom:0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 25%;
    height:3rem;
    line-height: 3rem;
    font-size: 1.4rem;
    color: #ff8000;
    text-align: center;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
