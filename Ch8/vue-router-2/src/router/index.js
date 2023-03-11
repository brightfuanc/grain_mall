import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const Home = {
  template: '<div><h3>首页</h3><p>用  Vue.js + Vue Router  创建单页应用，是非常简单的</p></div>'
}
const About = {
  template: '<div><h3>关于我们</h3><p>Vue Router 是 vue.js官方的路由管理器。它和Vue.js的核心深度集成，让构建单页面应用变得易如反掌。</p></div>'
}
const Download = {
  template: '<div><hs>资源下载</h3><p>Unpkg.com提供了基于NPM的CDN链接。上面的链接会一直指向在NPM发布的最新版本。你也可以像https://unpkg.com/vue-router@2.0.0/dist/vue-router.js 这样指定 版本号 或者Tag。</p></div>'
}
const routes =[
  {path: '/home', component:Home},
  {path: '/about', component:About},
  {path: '/download', component:Download},
  /*新增user路径,配置了动态的username*/
  {
    path: '/user/:username',
    component:User,
    name:'User'
  },
  //多段动态参数路由
  {
    path:'/userA/:username/post/:id',
    component:UserA,
    name:'UserA'
  }, 
]

//增加用户组件
const User ={
  template: '<div><h3>用户组件</h3><p>用户{{this.$route.params.username}},欢迎您!</p><p> 路由的路径: {{this.$route.path}} </p></div>',
  watch:{
    $route(to, from) {
    //to表示要去的目标组件,from表示从哪个组件来,它们的值都是对象
    console.log(to)
    console.log(from)
    }
  }
}
const UserA ={
  template: '<div><h3>用户组件</h3><p>用户{{this.$route.params.username}},欢迎您!</p><p>路由的路径: {{this.$route.path}}</p></div>'
}

export default new Router({
  routes: routes
})
