<template>
  <div id="app">
    <h1>Vue Router简易应用</h1>
    <p>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/download">资源下载</router-link>
      <!--以下为动态路由配置，使用不同的to属性，单段动态路径-->
      <router-link to="/user/储久良">用户(储久良)</router-link>
      <router-link to="/user/陈云">用户(陈云)</router-link>
      <!--多段动态路径-->
      <router-link to="/userA/:李阳春/post/:1100001">用户(多段)</router-link>
      <router-link to="/userA/:李阳春/post/:1100002">用户(多段)</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
