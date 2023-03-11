<template>
	<div id="app">
		<img src="./assets/logo.png">
		<h3>使用store中的数据</h3>
		<h3 v-once>周薪管理-直接获取数据(初始数据)</h3>
		<h4>姓名:{{$store.state.name}}-周薪:{{$store.state.weeklyPay}}元</h4>
		<h3>getters获取：</h3>
		<ul>
			<li>姓名:{{this.$store.getters.getName}}</li>
			<li>周薪:{{this.$store.getters.getWeeklyPay}}元</li>
		</ul>
		<button @click="addWeeklyPay">涨薪100</button>
		<button @click="reduceWeeklyPay">降薪200</button>
	</div>
</template>
<script>
	export default {
		name: 'App',
		methods: {
			addWeeklyPay: function() {				
				//this.$store.commit('add');
				this.$store.dispatch('addWeeklyPay');
			},
			reduceWeeklyPay: function() {				
				//this.$store.commit('reduce');
				this.$store.dispatch('reduceWeeklyPay');
			}
		},
	}
</script>
<style>
	#app {
		margin-top: 60px;
		padding: 50px;
	}
	img{width:100px;height: 100px;margin:0 auto;}
</style>