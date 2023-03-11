// index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建VueX对象
const store = new Vuex.Store({
	state: {
		// 状态值，数据源
		name: '储久良',
		weeklyPay: 5000
	},
	getters: {
		getName: function(state) {
			return state.name;
		},
		getWeeklyPay: function(state) {
			return state.weeklyPay;
		}
	},
	// 定义mutation
	mutations: {
		add: function(state) {
			//此函数不带第二个参数
			if (state.weeklyPay <= 15000) {
				state.weeklyPay = state.weeklyPay + 100;
			}
		},
		reduce: function(state,num) {
			//此函数带第二个参数num
			if (state.weeklyPay > 3000) {
				state.weeklyPay = state.weeklyPay - num;
			}
		},
	},
	actions: {
		addWeeklyPay: function(context){
			context.commit('add');
		},
		reduceWeeklyPay: function(context) {
			//异步操作
			setTimeout(() => {
				console.log("2秒后执行...")
				context.commit('reduce',200);
			}, 2000)
		},
	},
	// module
	modules: {

	}
})
export default store // 导出store
