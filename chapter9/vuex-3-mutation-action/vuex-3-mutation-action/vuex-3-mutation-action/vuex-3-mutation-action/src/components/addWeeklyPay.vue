<!-- addWeeklyPay.vue -->
<template>
	<div>
		<p v-once>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<p>姓名:{{name}},第{{week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<button @click="addWeeklyPay">增薪(100元)</button>
		<button @click="add">mapMutations增薪(100元)</button>
		<button @click="addWeeklyPayNum">增薪(Num元)</button>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex';
	import {mapState} from 'vuex';
	export default {
		name: 'add',
		methods: {
			addWeeklyPay() {
				this.$store.commit('add')
			},
			addWeeklyPayNum() {
				this.$store.commit('addNum', 150)
			},
			...mapMutations(
				['add']
			)
		},
		computed: {
			...mapState(['week', 'name']), //混入计算属性		
		}
	}
</script>
<style scoped="scoped">
	button {
		border-radius: 4px 4px;
		border: 1px solid #FFBB66;	
		height: 28px;
		background-color: #0000FE;
		color: white;
	}
</style>
