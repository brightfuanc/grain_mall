<!-- 注册/登录页面 app.vue -->
<template>
	<div id="contain">
		<div class="btns">
			<img src="../assets/address-logo-small.png"><br>
			<h3>友联 **连接你我他！</h3>
			<!-- 路由导航 -->
			<router-link to="/home/register" class="btn">注册</router-link>
			<router-link to="/home/login">登录</router-link>
		</div>
		<!-- 路由出口 -->
		<router-view></router-view>
	</div>
</template>
<style scoped>
	@import '../assets/css/app.css';
</style>
