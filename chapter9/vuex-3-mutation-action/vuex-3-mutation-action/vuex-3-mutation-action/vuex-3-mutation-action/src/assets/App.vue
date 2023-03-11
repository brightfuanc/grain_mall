<!-- App.vue -->
<template>
	<div id="app">
		<h2>使用store中的数据</h2>
		<h3>{{entry}}-周薪管理-直接获取$store</h3>
		<p>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<h3>周薪管理-mapState、计算属性获取</h3>
		<p>姓名:{{name}},第{{week}}周,周薪:{{weeklyPay}}元</p>
		<h3>周薪管理-getter获取</h3>
		<p>姓名:{{this.$store.getters.getName}},第{{week}}周,周薪:{{getDoubleWeeklyPay}}元</p>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	import {mapGetters} from 'vuex';
	export default {
		name: 'App',
		data() { //组件私有数据
			return {
				entry: 'Vue.js学堂在线'
			}
		},
		methods: {},
		//使用计算属性获取Vuex状态
		computed: {
			weeklyPay() {
				return this.$store.state.weeklyPay;
			},
			...mapState(['week', 'name']), //混入计算属性		
			...mapGetters(['getWeeklyPay', 'getDoubleWeeklyPay']), //混入计算属性		
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
