// vuex-4-module students.js
const students = {
	namespaced:true,
	state: {
		s_list: [{
			id: 210022,
			name: '张小英',
			age: 22,
			sex: '女',
			result: 60
		}],
		count: 0
	},
	getters: {},
	mutations: {
		modify(state) {
			var result = state.s_list[0].result
			//成绩限制在30-100分之间
			if (result + 5 <= 100 && result > 30) {
				state.s_list[0].result = state.s_list[0].result + 5;
			}
		},
		countAdd10(state, rootState) {
			state.count = state.count + 10;
			rootState.count += 10
			console.log("Student.count=" + state.count + "rootState.count=" + rootState.count)
		},
	},
	actions: {
		modifyResult({commit,rootState}) {
			commit('modify');
		}
	}
}
export default students;
