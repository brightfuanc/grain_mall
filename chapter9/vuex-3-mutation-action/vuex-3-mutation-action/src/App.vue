<!-- vuex-3-mutation-action App.vue -->
<template>
	<div id="app">
		<h1>周薪管理-增加</h1>
		<my-add></my-add>
		<hr />
		<h1>周薪管理-降低</h1>
		<my-reduce></my-reduce>
			
	</div>	
</template>
<script>
	import add from './components/addWeeklyPay.vue'
	import reduce from './components/reduceWeeklyPay.vue'
	import {mapGetters} from 'vuex';	
	import {mapState} from 'vuex';
	export default {
		name: 'App',
		// 触发Mutation
		methods: {},
		//使用计算属性获取Vuex状态
		computed: {
			weeklyPay() {
				return this.$store.state.weeklyPay;
			},
			...mapState(['week', 'name']), //混入计算属性		
			...mapGetters(['getWeeklyPay', 'getDoubleWeeklyPay']), //混入计算属性		
		},
		components:{
			'my-add':add,
			'my-reduce':reduce
		}
	}
</script>
<style>
	#app {
		margin-top: 10px;
		padding: 10px;
		border: 1px dashed #112233;
	}
</style>
