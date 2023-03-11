<template>
  <div id="app" class="div1">
    <h1>Vue Router高级应用——嵌套路由</h1>
    <p>
    <!--使用 router-link组件导航,通过传入 to属性指定链接-->
      <router-link to="/home" class="r-link1">首页</router-link>
      <router-link to="/about" class="r-link1">关于我们</router-link>
      <router-link to="/product" class="r-link1"> 产品介绍 </router-link>
    </p>
    <router-view class="r-view"></router-view>
  </div>
</template>

<script>
  export default {
      name: 'App'
  }
</script>

<style>
  #app{text-align: center;color: #2c3e50; margin-top:60px}
  .r-view{
      width: 500px; margin: 0 auto; text-indent: 2em;
      text-align: left; padding:5px 0; border:1px dashed #969696;
  }
  .r-linkl{text-decoration: none; padding : 5px 10px;}
  .r-link1 : hover{ ;background-color:#F0F0F0; padding:5px 10px; }
  img {margin :5px;}

</style>
