// 状态管理器 -index.js
import Vue from 'vue'     //引入vue
import Vuex from 'vuex'   //引入Vuex
import user from './modules/user'   //引入user模块
import contacts from './modules/contacts'  //引入contacts模块
Vue.use(Vuex);
// 使用Vuex的module
export default new Vuex.Store({ 
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        user: user,
        contacts: contacts
    } 
});