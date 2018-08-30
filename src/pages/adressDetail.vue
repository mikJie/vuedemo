<template lang="html">
  <div class="adressdetail">
    <home-header></home-header>
    <div v-show="this.params == true">
      <p>
        <span class="span1">商品名称:</span>
        <span class="span2">{{this.$route.params.title}};</span>
        <span class="span1">商品价格:</span>
        <span class="span2">{{this.$route.params.price}}元</span>
      </p>
      <p>
          <!--<v-distpicker></v-distpicker>-->
          <!--<v-distpicker type="mobile"></v-distpicker>-->
          <v-distpicker @selected="onSelected" class="cityStyle" province="北京市" city="北京城区" area="东城区"></v-distpicker>
      </p>
      <p class="commonP">收货地址：{{addressPath}}</p>
      <p class="commonP">手机号码：
      <input type="number" @blur="telBtn">
      </p>
      <p v-show="tishi!=''" style="color: red; padding-left: 4rem">{{tishi}}</p>
      <p class="commonP">
       &nbsp;&nbsp;联系人：&nbsp;&nbsp;&nbsp;<input type="text" @blur="touchPerson">
      </p>
      <p class="commonP"><button @click="sendgoods">确定发货</button></p>
    </div>
    <div v-show="this.params == false">
      <h3 style="text-align: center; line-height: 6rem">当前没有商品</h3>
      <p style="margin:0 auto">请在商品列表页进行选购</p>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import HomeHeader from '../components/HomeHeader'
  import CommonFooter from '../components/commonFooter'
  import VDistpicker from 'v-distpicker'
  import '../style/commontCss.css'
  export default{
    created :function() {
      console.log(this.$route.params)
      if(this.$route.params.title){
        this.params = true
      }else {
        this.params == false
      }
      console.log(this.params)
    },
    data:function(){
      return{
        params:'',
        addressPath:'北京市-北京城区-东城区',
        telNum:'',
        touchName:'',
        tishi:''
      }
    },
    methods:{
      onSelected:function(data){
        console.log(data)
        this.addressPath = data.province.value+'-'+data.city.value+'-'+data.area.value;
      },
      telBtn:function(data){
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(data.target.value))){
          this.telNum = '';
          data.target.value = '';
          this.tishi = "手机号格式不正确，请重新输入";
        }else {
          this.telNum = data.target.value;
          this.tishi = "";
        }
        console.log(this.telNum)
      },
      touchPerson:function(data){
        this.touchName = data.target.value;
        console.log(this.touchName)
      },
      sendgoods:function(data){
        if(this.addressPath!=''&&this.telNum!=''&&this.touchName!=''){
          this.$router.push({
            name:'user',
            params:{
              name:this.touchName,
              tel:this.telNum,
              path:this.addressPath
            }
          })
        }else {
          alert('信息不完善 请完善信息')
        }
      }
    },
    components:{
      HomeHeader,
      CommonFooter,
      VDistpicker
    }
  }
</script>
<style scoped>
  input{
    height: 20px;
  }
  .commonP{
    margin-left: 1rem;
    overflow: hidden
  }
  .cityStyle select{
    padding: 0;
    height: 3rem;
  }
  p {
    padding: 0 1rem;
    height: 3rem;
    line-height: 3rem;
    float: left;
    text-align: center;
  }
  span{
    margin-left: 1rem;
  }
  .span2{
    color: red;
  }
</style>
