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
	getters: {
		// 单个参数
		getName: function(state) {
			return state.name;
		},
		getWeeklyPay: function(state) {
			return state.weeklyPay
		},
		// 两个参数
		getDoubleWeeklyPay: function(state, getters) {
			return getters.getWeeklyPay * 2
		}
	},
	mutations: {},
	actions: {}
})
export default store // 导出store
