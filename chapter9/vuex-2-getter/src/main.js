// main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
new Vue({
	el: '#app',
	store, //store:store,注入进来
	components: { //局部注册组件
		App,
		add,
		reduce
	},
	template: '<App/>',
})
