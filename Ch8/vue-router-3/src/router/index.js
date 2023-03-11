import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = {
  template: `<div><h3>首页</h3><p>欢迎访问网上商城!</p></div>`
}
const About ={
  template: `<div><h3>关于我们</h3><p>网上商城</p><address>地址:南京市北京西路80号</address></div>`
}
const Product = {
  template: `<div><h3>产品介绍</h3><p><router-link class="r-linkl" to ="/product/phone">
    智能手机</router-link><router-link class="r-linkl" to = "/product/appliances">
    家用电器</router-link><router-link class="r-link1" to = "/product.electronics">
    数码产品</router-link></p><router-view > </router-view></div>`
}
const Phone ={
  template:`
  <div>
    <h3>智能手机</h3>
    <img :src="img5"/><img :src="img6"/>
  </div>
  `,
  data() {
    return {
      img5:require('./images/phone-1.jpg'),
      img6:require('./images/phone-2.jpg'),
    }
  }
}
  const Appliances ={
    template: `<div><h3>家用电器</h3><img :src="img1"/><img :src="img2" /></div>`,
    data(){
      return{
        img1: require('./images/appliance-1.jpg'),
        img2: require('./images/appliance-2.jpg')
      }
    }
  }
  
  const Electronics ={
    template: `<div><h3>数码产品</h3><img :src="img3"/><img :src="img4" /></div>`,
    data() {
      return {
        img3: require('./images/electronic-1.jpg') ,
        img4: require('./images/electronic-2.jpg')
      }
    }
  }

//2．定义路由,每个路由应该映射一个组件
const routes =[{
    path: '/home',
    component: Home,
    name: 'Home'
  },
  { 
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product' ,
    component: Product,
    //以下定义子路由
    children: [{//默认的空子路由
        path: '',
        component: Phone
      },
      {
        path: 'phone',
        component: Phone
      },
      {
        path: 'appliances',
        component: Appliances
      },
      {
        path: 'electronics',
        component: Electronics
      },
    ]
  },
  {//匹配不到路由时重定向到首页
      path: '/',
      redirect: '/home'
  }
]
  //3．创建 router 实例，然后传入routes配置
  export default new Router({
    routes: routes,
    mode: 'history', //去掉URL中的#
  })