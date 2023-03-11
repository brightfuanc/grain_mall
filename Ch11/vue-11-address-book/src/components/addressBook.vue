<!-- 友联通讯录主界面 addressBook.vue -->
<template>
	<div id="addressBook">
		<div class="head">
			<div class="logo">
				<img src="../assets/address-logo-small.png" style='width:85px;height:83px' alt="">
			</div>
			<div class="welcome">
				<span class="name">{{own.name}}</span>，欢迎您！
				<div class="img">
					<img src="../assets/img/contact.png" />
				</div>
			</div>
		</div>
		<div class="lside">
			<ul>
				<li :class="{'act': clickId==1}" @click="clickId=1">
					<router-link to="/contacts"><i class="fa fa-address-book-o"></i> 通讯录</router-link>
				</li>
				<li :class="{'act': clickId==2}" @click="clickId=2">
					<router-link to="/contacts/add"><i class="fa fa-reorder"></i> 新增联系人</router-link>
				</li>
				<li :class="{'act': clickId==3}" @click="clickId=3">
					<router-link to="/contacts/own"><i class="fa fa-user-o"></i> 个人中心</router-link>
				</li>
			</ul>
			<div class="out" @click="out">
				<i class="fa fa-cog"></i> 退出登录
			</div>
		</div>
		<div class="rside">
			<router-view :items="items" :own="own" @remove="removeItem" @add="addItem" @change="changeItem" @changeOwn="changeOwn"></router-view>
		</div>
	</div>
</template>
<script>
	import {mapActions,mapState} from 'vuex'
	export default {
		data() {
			return {
				clickId: 1
			};
		},
		computed: mapState({
			own: state => state.contacts.own,
			items: state => state.contacts.items
		}),
		beforeCreate() {
			this.$store.dispatch('userInit');
		},
		methods: {
			...mapActions([
				'signOut',
				'userAdd',
				'userRemove',
				'userChange',
				'ownChange'
			]),
			addItem(item) {
				this.userAdd(item);
			},
			removeItem(id) {
				this.userRemove(id);
			},
			changeItem(obj) {
				this.userChange(obj);
			},
			changeOwn(obj) {
				this.ownChange(obj);
			},
			out() {
				this.signOut();
				this.$router.replace('/home/login');
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/font-awesome.min.css';
	@import '../assets/css/addressBook.css';	
</style>
