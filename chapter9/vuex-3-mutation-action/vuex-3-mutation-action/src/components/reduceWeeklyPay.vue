<!--  reduceWeek.vue -->
<template>
	<div>
		<h3>{{entry}}-周薪管理-action</h3>
		<p v-once>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<p>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<button @click="reduceWeeklyPay">降薪(100元)</button>
		<button @click="reduceWeeklyPayNum">降薪(Num元)</button>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex';
	import {mapActions} from 'vuex';
	export default {
		name:'reduce',
		data() {
			return {
				entry: 'Vue.js学堂在线'
			}
		},
		methods: {
			reduceWeeklyPay() {
				this.$store.commit('reduce');
			},
			reduceWeeklyPayNum() {
				this.$store.commit('reduceNum', 200);
			}
		}
	}
</script>
<style scoped>
	button {
		border: 1px solid #774477;
		border-radius: 4px 4px;
		width: 120px;
		height: 28px;
	}
</style>
