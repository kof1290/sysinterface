<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view name="header"></router-view>
    <router-view name="side" class="el-col-3"></router-view>
    <router-view class="el-col-21"/>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>
