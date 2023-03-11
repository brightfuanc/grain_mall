// vuex-ex-1 index.js  
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		count: 0,
	},
	getters: {},
	mutations: {
		add1(state) {}, //实现count增1
		reduce1(state) {}, //实现count减1
		addN(state, n) {}, //实现count增n
		reduceN(state, n) {}, //  实现count减n  
	},
	actions: { //要求异步触发相应的mutation
		add1Async(context) {}, //实现异步count增1
		reduce1Async(context) {}, //实现异步count减1
		addNAsync({commit}, n) {}, //实现异步count增n
		reduceNAsync({commit}, n) {}, //实现异步count减n
	}
})
export default store
