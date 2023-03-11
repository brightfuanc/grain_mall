// vuex-4-module teachers.js
const teachers = {
	namespaced:true,
	state: {
		t_list: [{
			id: 1,
			name: '李小英',
			age: 22,
			sex: '女',
			salary: 5500,
			changed: false
		}],
		count: 0
	},
	getters: {},
	mutations: {
		//传递多个参数时，需要封装为对象{key1,key2,...}，否则会报错
		add(state, {teacherId,amount}) {
			//找到该对象，并替换对象相关属性值
			state.t_list.filter(function(teacher) {
				if (teacher.id == teacherId) {
					//需要将文本框输入的数据转换为数据类型
					teacher.salary = teacher.salary + eval(amount);
					teacher.changed = true; //变更标记
				}
			})
		},
		countAdd10(state, rootState) {
			state.count = state.count + 10; //更新Teachers模块的状态
			rootState.count += 10 //更新根状态count
			console.log("Teacher.count="+state.count+"rootState.count="+rootState.count)
		},
		addOne(state, someone) {
			state.t_list.push(someone)
		}
	},
	actions: {
		//传递多个参数（教师ID和涨幅）时，需要封闭成对象，否则会报错，
		modifySalary({commit}, {teacherId,amount}) {
			commit('add', {teacherId,amount});
		},
		addTeacher({commit,rootState}, someone) { //获取根状态
			commit('addOne', someone)
			commit('countAdd10', rootState)
		}
	}
}
export default teachers;
