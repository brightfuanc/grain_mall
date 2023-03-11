// 路由器主文件 index.js
import Vue from 'vue'
import Router from 'vue-router'
// 懒加载
const app = () => import('@/components/app.vue');
const login = () => import('@/components/login.vue');
const register = () => import('@/components/register.vue');
const addressBook = () => import('@/components/addressBook.vue');
const notes = () => import('@/components/notes.vue');
const addCon = () => import('@/components/addCon.vue');
const own = () => import('@/components/own.vue');
Vue.use(Router)
export default new Router({
	routes: [{
			path: '/',
			redirect: '/home/register'
		},
		{
			path: '/home',
			component: app,
			children: [{
					path: 'login',
					component: login
				},
				{
					path: 'register',
					component: register
				},
			]
		},
		{
			path: '/contacts',
			component: addressBook,
			children: [{
					path: '',
					component: notes,
					meta: {logined: true}
				},
				{
					path: 'add',
					component: addCon
				},
				{
					path: 'own',
					component: own
				},
			]
		}
	]
})
