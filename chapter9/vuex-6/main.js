// main.js
import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	methods:{
	    add(){
	      console.log(this.$store.state.name)
	    }
	},
  store,  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App)
})
