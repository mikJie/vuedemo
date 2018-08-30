<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    padding:0;
    margin:0;
  }
  li {list-style: none;}
  a {text-decoration: none;}
  img {vertical-align: middle;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin: 60px auto;
  padding:0;
  margin:0;
}
</style>
