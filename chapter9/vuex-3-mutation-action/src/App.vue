<!-- vuex-3-mutation-action App.vue -->
<template>
	<div id="app">
		<h2>{{company}}-周薪管理-调增-mutation</h2>
		<my-add></my-add>
		<hr />
		<h2> {{company}}-周薪管理-调减-action</h2>
		<my-reduce></my-reduce>
	</div>
</template>
<script>
	import add from './components/addWeeklyPay.vue'
	import reduce from './components/reduceWeeklyPay.vue'
	import {mapGetters} from 'vuex';

	export default {
		name: 'App',
		props: ['company'],
		//使用计算属性获取Vuex状态
		computed: {
			weeklyPay() {
				return this.$store.state.weeklyPay;
			},
		},
		components: {
			'my-add': add,
			'my-reduce': reduce
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
