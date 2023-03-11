<!--  reduceWeek.vue -->
<template>
	<div>
		<p v-once>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<p>姓名:{{$store.state.name}},第{{$store.state.week}}周,周薪:{{$store.state.weeklyPay}}元</p>
		<button @click="reduceWeeklyPay">降薪(100元)</button>
		<button @click="reduceWeeklyPayNum">降薪(Num元)</button>
		<button @click="reduceAsync">异步mapActions降薪(100元)</button>
		<button @click="reduceNumAsync(300)">异步mapActions降薪(Num元)</button>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';	
	export default {
		name:'reduce',
		methods: {
			reduceWeeklyPay() {
				this.$store.commit('reduce');
			},
			reduceWeeklyPayNum() {
				this.$store.commit('reduceNum', 300);
			},
			...mapActions(['reduceAsync','reduceNumAsync'])
		}
	}
</script>
<style scoped>
	button {
		border: 1px solid #774477;
		border-radius: 4px 4px;	
		height: 28px;
		background-color: #EBEBEB;
	}
</style>
