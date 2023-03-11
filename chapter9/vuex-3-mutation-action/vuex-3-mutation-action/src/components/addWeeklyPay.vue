<!-- addWeeklyPay.vue -->
<template>
	<div>
		<h3>{{entry}}-周薪管理-mutation</h3>
		<p v-once>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<p>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<button @click="addWeeklyPay">增薪(100元)</button>
		<button @click="addWeeklyPayNum">增薪(Num元)</button>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex';
	import {mapActions} from 'vuex';
	export default {
		name:'add',
		data() {
			return {
				entry: 'Vue.js学堂在线'
			}
		},
		methods: {
			addWeeklyPay() {
				this.$store.commit('add')
			},
			addWeeklyPayNum() {
				this.$store.commit('addNum', 150)
			}
		}

	}
</script>
<style scoped="scoped">
	button {
		border-radius: 4px 4px;
		border: 1px solid #FFBB66;
		width: 120px;
		height: 28px;
		background-color: #0000FE;
		color:white;
	}
</style>
