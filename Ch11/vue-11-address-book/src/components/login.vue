<!-- 登录组件 login.vue -->
<template>
	<div class="login">
		<form>
			<label for="name">
				<input type="text" class="input" id="name" v-model="name" placeholder="用户名">
			</label>
			<label for="psw" class="last">
				<input type="password" class="input" id="psw" v-model="psw" placeholder="密码">
				<em v-show="req">*用户名或密码错误</em>
			</label>
			<button class="loginSub" @click="login">
				<!-- 使用Font Awesome(fa)动态图标 -->
				登 录<i class="fa fa-spinner fa-spin" v-show="icon"></i>
			</button>
		</form>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';
	export default {
		data() {
			return {
				name: '',
				psw: '',
				icon: false,
				req: false
			};
		},
		methods: {
			...mapActions(['signIn']),
			login() {
				this.icon = true;
				this.req = false;
				setTimeout(() => {   //异步执行
					this.signIn({
						name: this.name,
						psw: this.psw
					});
					if (sessionStorage.login && sessionStorage.login == 1) { // 登录成功
						this.$router.replace('/contacts');
						this.icon = false;
					} else {
						this.icon = false;
						this.req = true;
					}
				}, 1000);
			}
		}
	}
</script>
<!--  导入Font Awesome样式文件 -->
<style scoped>
	@import '../assets/css/font-awesome.min.css';
	@import '../assets/css/login.css';	
</style>
