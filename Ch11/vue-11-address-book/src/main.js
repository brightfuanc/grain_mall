// 项目入口文件--main.js
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
// 导航守卫，根据是否登录而路由
router.beforeEach((to, from, next) => {
	//检查路由元信息字段，需要登录logined为true
	if (to.meta.logined) {
		if (sessionStorage.login == 1) { // 若登录状态为1
			next(); //进行管道中的下一个钩子
		} else {   //否则确保能够返回首页
			next({
				path: '/home/login',
			});
		}
	} else {
		next(); // 确保一定要调用next()
	}
});
//定义vue实例，注册路由、组件和仓库
var myViewModel = new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	},
})
