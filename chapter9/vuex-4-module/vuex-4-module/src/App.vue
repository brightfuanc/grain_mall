<!-- vuex-4-module App.vue -->
<template>
	<div id="app">	
			<fieldset>
				<legend>{{this.$store.state.company}}信息管理系统-教师端</legend>
				ID：<input type="text" v-model="id" value="1" readonly="" />
				姓名：<input type="text" v-model="name" /><br />
				年龄：<input type="number" min="0" max="120" step="
				1" value="18" v-model="age" />
				性别：<input type="radio" checked="checked" value="男" v-model="sex" name="xb">男
				<input type="radio" value="女" v-model="sex" name="xb" />女
				薪水：<input type="number" v-model="salary" min="2500" step="100" /><br />
				<button @click="addTeacher(one)">增加教师</button>			
			</fieldset>		
		<fieldset>
			<legend>教师一览表</legend>
			<h5>序号---ID---姓名---年龄---性别---工资</h5>
			<ul>
				<li v-for="(teacher,index) in teachersAll" v-bind:class="{active:teacher.changed}">
					{{index+1}}---{{teacher.id}} ---{{teacher.name}}--- {{teacher.age}}---
					{{teacher.sex}}--- {{teacher.salary}} </li>
			</ul>
			涨薪教师的ID<input type="text" v-model="teacherId">
			涨幅<input type="number" step="100" min="100" max="500" v-model="amount" />元		
			<button @click="modifySalary({teacherId,amount})">上调薪酬</button>
		</fieldset>
		<fieldset>
			<legend>{{this.$store.state.company}}信息管理系统-学生端</legend>
			<h5>序号---ID---姓名---年龄---性别---成绩</h5>
			<ul>
				<li v-for="(student,index) in $store.state.Students.s_list" >
					{{index+1}}---{{student.id}} ---{{student.name}}--- {{student.age}}---
					{{student.sex}}--- {{student.result}} 
					</li>
			</ul>
			<button @click="modifyResult">修改成绩(递增5分/次)</button>
		</fieldset>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';
	export default {
		name: 'App',
		data() {
			return {
				id: 1,
				name: '',
				age: 18,
				sex: '',
				salary: 2500,
				teacherId: '',
				amount: 100,
				changed: false,
			}
		},
		//使用计算属性获取Vuex状态
		computed: {
			teachersAll() {
				return this.$store.state.Teachers.t_list;
			},			
			one() {
				var some = {
					id: this.$store.state.Teachers.count + 10,//从模块内获取 
					name: this.name,
					age: this.age,
					sex: this.sex,
					salary: parseInt(this.salary),
					changed: false
				}
				return some;
			}
		},
		methods: {
			//1.不使用命名空间时，使用下列语句
			// ...mapActions(['modifyResult', 'modifySalary', 'addTeacher']),
			// 2.使用命名空间时，使用下列语句(增加模块参数)
			...mapActions('Students',['modifyResult']),
			...mapActions('Teachers',['modifySalary', 'addTeacher']),
		}
	}
</script>
<style>
	.active {background-color: #EAEBEC;}
	#app {margin-top: 10px;padding: 10px;}
	body {text-align: center;}
	ul {list-style-type: none;}
	fieldset {width: 650px;margin: 0 auto;}
	button {width: 160px;height: 28px;border: 1px dotted #EE99AA;}
</style>
