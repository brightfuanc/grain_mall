// vuex-4-module   index.js
import Vue from 'vue'
import Vuex from 'vuex'
import Students from './modules/students.js'
import Teachers from './modules/teachers.js'

Vue.use(Vuex)
// 创建VueX对象
const store = new Vuex.Store({
	modules: {
		Students,
		Teachers
	},
	state: {
		company:'IT管理学院',
		count:0
	},
	getters: {},
	// 定义mutation
	mutations: {},
	actions: {}
})
export default store // 导出store
