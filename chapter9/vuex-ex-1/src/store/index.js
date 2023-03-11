// vuex-ex-1 index.js
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		count: 0,
	},
	getters: {},
	mutations: {
		add1(state) { //实现count增1
			state.count += 1
		},
		reduce1(state) {//实现count减1
			state.count -= 1
		},
		addN(state, n) {//实现count增n
			state.count += n
		},
		reduceN(state, n) {//实现count减n
			state.count -= n
		},
		changed(state) {
			state.isActive = true;
		}
	},
	actions: {
		add1Async(context) {
			setTimeout(() => {
				context.commit('add1')

			}, 2000)
		},
		reduce1Async(context) {
			setTimeout(() => {
				context.commit('reduce1')
			}, 2000)

		},
		addNAsync({
			commit
		}, n) {
			setTimeout(() => {
				commit('addN', n)
			}, 2000)

		},
		reduceNAsync({
			commit
		}, n) {
			setTimeout(() => {
				commit('reduceN', n)
			}, 2000)

		}
	}
})
export default store
