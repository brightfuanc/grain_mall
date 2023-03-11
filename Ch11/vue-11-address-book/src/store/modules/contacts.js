// 联系人模块 contacts.js
import Vue from 'vue';
import router from '../../router';
//定义常量作为mutation的函数名
const USER_INIT = 'USER_INIT';      // 用户初始化
const USER_ADD = 'USER_ADD';        // 新增用户
const USER_REMOVE = 'USER_REMOVE';  // 删除用户
const USER_CHANGE = 'USER_CHANGE';  // 修改用户
const OWN_CHANGE = 'OWN_CHANGE';    // 所有人修改
var contactId = 0;                  //初始化联系人
export default {
	//定义contacts模块的state
	state: {
		items: [],
		own: {}
	},
	//定义相关mutations
	mutations: {
		[USER_INIT](state, info) {
			state.items = info.items;
			state.own = info.own;
		},
		[USER_ADD](state, user) {
			user.id = contactId++;
			user.imgSrc = '/static/img/userImg.png';
			state.items.push(user);
			localStorage.items = JSON.stringify(JSON.parse(localStorage.items).push(user));
		},
		[USER_REMOVE](state, userId) {
			state.items = state.items.filter(function(item) {
				return item.id !== userId;
			});
		},
		[USER_CHANGE](state, user) {
			for (var key in state.items)
				if (state.items[key].id == user.id) {
					state.items[key].name = user.name;
					state.items[key].tel = user.tel;
				}
		},
		[OWN_CHANGE](state, user) {
			var oldName = state.own.name;
			state.own = user;
			sessionStorage.setItem('user', JSON.stringify(user));
			localStorage.setItem(sessionStorage.userId, JSON.stringify(user));
		}
	},
	actions: {
		userInit({commit}) {
			// 页面加载时获取数据
			if (sessionStorage.login && sessionStorage.login == 1) {
				var items = [
					{name: '外公',tel: 13611112222,status: "亲人"},
					{name: '外婆',tel: 13622223333,status: "亲人"},
					{name: '老爷',tel: 13533334444,status: "亲人"},
					{name: '奶奶',tel: 13544445555,status: "亲人"},
					{name: '爸爸',tel: 13555556666,status: "亲人"},
					{name: '妈妈',tel: 13566667777,status: "亲人"},
					{name: '张小明',tel: 138555556666,status: "同事"},
					{name: '李武刚',tel: 13811112222,status: "同事"},
					{name: '王小娟',tel: 13788889999,status: "同事"},
					{name: '赵大田',tel: 13156894433,status: "同学"},
					{name: '陈小军',tel: 13122334455,status: "朋友"},
					{name: '李阳',tel: 13012121212,status: "朋友"},
					{name: '沈小春',tel: 13745454545,status: "朋友"},
					{name: '周云鹏',tel: 13912121212,status: "朋友"},
					{name: '郭志明',tel: 13722331144,status: "朋友"},
				];
				items = items.filter((item) => {
          item.id = contactId++;
          item.imgSrc = '/static/img/userImg.png';          
					return item;
				});
				localStorage.items = JSON.stringify(items);
				var own = JSON.parse(sessionStorage.user);
				commit(USER_INIT, {
					items: JSON.parse(localStorage.items),
					own: own
				});
			} else {
				alert('请先登录！');
				router.replace('/home/login');
			}
		},
		userAdd({commit}, user) {
			commit(USER_ADD, user);
		},
		userRemove({commit}, userId) {
			commit(USER_REMOVE, userId);
		},
		userChange({commit}, user) {
			commit(USER_CHANGE, user);
		},
		ownChange({commit}, user) {
			commit(OWN_CHANGE, user);
		}
	}
}
