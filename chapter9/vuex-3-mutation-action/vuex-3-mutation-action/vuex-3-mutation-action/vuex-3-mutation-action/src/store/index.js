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
		add(state) {
			state.weeklyPay = state.weeklyPay + 100
		},
		addNum(state, num) { //带第二个参数num(幅度)
			state.weeklyPay = state.weeklyPay + num
		},
		reduce(state) {
			state.weeklyPay = state.weeklyPay - 100
		},
		reduceNum(state, num) { //带第二个参数num(幅度)
			state.weeklyPay = state.weeklyPay - num
		}
	},
	actions: {
		addWeeklyPay(context) {
			context.commit('add');
		},
		reduce(context){
			context.commit('reduce')   //同步减少
		},
		reduceAsync(context) {
			setTimeout(() => {//异步
				context.commit('reduce');
			}, 1000)
		},
		reduceNumAsync(context,step){//异步带参数
			setTimeout(()=>{
				context.commit('reduceNum',step)
			},1000)
			
		}
	}
})
export default store // 导出store
