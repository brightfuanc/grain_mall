// index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建VueX对象
const store = new Vuex.Store({
	state: {
		name: '储久良',
		weeklyPay: 5000,
		week: 6,
	},
	getters: {},
	mutations: {},
	actions: {}
})
export default store // 导出store
