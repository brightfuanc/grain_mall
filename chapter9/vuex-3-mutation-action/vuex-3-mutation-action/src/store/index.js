// vuex-3-mutation-action  index.js
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
	
	mutations: {
		add(state){
			state.weeklyPay=state.weeklyPay+100
		},
		reduce(state){
			state.weeklyPay=state.weeklyPay-200
		},
		//带第二个参数num,num为增/减幅度值
		addNum(state,num){
			state.weeklyPay=state.weeklyPay+num
		},
		reduceNum(state,num){
			state.weeklyPay=state.weeklyPay-num
		}
	},
	actions: {}
})
export default store // 导出store
