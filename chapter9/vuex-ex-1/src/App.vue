<!-- App.vue -->
<template>
  <div id="app">
     <h3>Vuex实现的计数器增减功能</h3>
		 <hr>
		 <p>同步实现----计数器={{count}}</p>
		<button  @click="add1">增加1</button>
		<button  @click="reduce1">减少1</button>
		<button  @click="addN(10)">增加N</button>
		<button  @click="reduceN(10)">减少N</button>
		<hr>
		 <p>异步实现----计数器={{count}}</p>
		<button  @click="add1Async">异步增加1</button>
		<button  @click="reduce1Async" >异步减少1</button>
		<button  @click="addNAsync(5)">异步增加N</button>
		<button  @click="reduceNAsync(5)" >异步减少N</button>
  </div>
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'Vuex'
export default {
  name: 'App',
	date(){},
	computed:{
		count(){
			return this.$store.state.count;
		},		
	},
	methods:{
		add1(){
			this.$store.state.count+=1
		},
		reduce1(){
			this.$store.state.count-=1
		},
		addN(n){
			this.$store.state.count+=n
		},
		...mapMutations(['reduceN']),
		...mapActions(['add1Async','reduce1Async','addNAsync','reduceNAsync']),
	}
	
}
</script>

<style>
#app {
  text-align: center;
  color: #1415B3;
  margin-top: 30px;
}
button{padding:5px 10px;border:1px dashed #9A9A9A;}

</style>
