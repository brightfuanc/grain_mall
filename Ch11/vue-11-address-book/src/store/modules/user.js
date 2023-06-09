/* 
   用户模块 user.js
   sessionStorage:存储注册状态与登陆状态
   localstorage:存储已注册用户信息
*/
import Vue from 'vue';
// 定义常量(全大写)作为（mutation）函数名
const REGISTER = 'REGISTER';    // 注册
const SIGN_IN = 'SIGN_IN';      // 登录
const SIGN_OUT = 'SIGN_OUT';    // 退出登录  
export default {
	state: {},
	mutations: {
		[REGISTER](state, user) {
			// 判断用户是否同姓名
			var existed = 0;
			for (var i = 0; i < localStorage.length; i++)
				if (localStorage.key(i).indexOf('user') != -1) // 用户的key值为'user'+ID,
					if (JSON.parse(localStorage.getItem(localStorage.key(i))).name == user.name) {
						existed = 1;  //用户已存在
						break;
					}
			if (existed == 0) {
				// 添加本地存储用户 
				localStorage.setItem('user' + localStorage.length, JSON.stringify(user));
				sessionStorage.register = 1; // 注册成功
			} else {
				sessionStorage.register = 0;
			}
		},
		[SIGN_IN](state, user) {
			// 根据name找本地相应user
			var localuser = '',f = 0;
			for (var i = 0; i < localStorage.length; i++)
				if (localStorage.key(i).indexOf('user') != -1) // 为用户
					if (JSON.parse(localStorage.getItem(localStorage.key(i))).name == user.name) {
						localuser = JSON.parse(localStorage.getItem(localStorage.key(i)));
						f = 1;     //该用户存在
						break;
					}
			// 存在该用户并密码正确
			if (f == 1 && user.psw == localuser.psw) {
				sessionStorage.login = 1; // 登陆成功
				sessionStorage.user = JSON.stringify(localuser);
				sessionStorage.userId = localStorage.key(i);
			} else {
				sessionStorage.login = 0;
			}
		},
		[SIGN_OUT](state) {
			sessionStorage.register = 0;
			sessionStorage.login = 0;
		}
	},
	actions: {
		register({commit}, user) { // 触发注册操作
			commit(REGISTER, user);
		},
		signIn({commit}, user) {
			commit(SIGN_IN, user); // 触发登录操作
		},
		signOut({commit}) {
			commit(SIGN_OUT); // 触发退出登录操作
		}
	}
}
