//定义MyToDos项目中相关方法、过滤器、计算属性等
//定义 Vue实例
var myViewModel =new Vue({
    el: '#vue42',
    data: {
        newTodo: '',
        newID: 1,
        list: [],
        itemState:"",
    },
    computed:{
        total: function() {//统计待办事项总数
            return this.list.length;
        },
        notDoneCount: function() {//统计未完成事项数据
            return this.list.filter(function (item) {
                return item.state;
            }).length;
        },
        itemArray: function(){//根据待办事项的状态筛选待办事项，用于分类显示
            if( this.itemState=="" || this.itemState=="all"){//返回所有待办事项
                return this.list;
            //}else if (this.itemState=="all"){//返回未完成待办事项
               // return this.list.filter(function(item){
               //     return true;
               // })
            }else if (this.itemState=="isCompleted"){//已完成待办事项
                return this.list.filter(function(item){
                    return item.state? false : true;
                })
            }else if (this.itemState=="isActive"){//返回未完成待办事项
                return this.list.filter(function(item){
                    return item.state? true : false;
                })
            }
        },
    },
    methods:{
        //添加待办事项
        appendItem: function(){
            if(this.newTodo != ""){//文本框内容不为空时可添加
                this.list.push({
                    id: this.newID++,
                    content: this.newTodo,
                    state: true,
                });
            }else{
                alert("请输入待办信息!")
            }
            this.newTodo ="";
            this.itemState ="";
        },
        clearDone: function() {
        //清除已完成待办事项,更新待办数组
            this.list = this.list.filter (function (item) {
                return item.state;
            })
        },
        completed: function (index){//切换复选框的状态,并更新待办状态
            this.list[index].state = !this.list [index].state;
        },
        //设置itemState,分类统计
        all: function(){
            this.itemState = "all";
        },
        isActive: function() {
            this.itemState = "isActive";
        },
        isCompleted: function() {
            this.itemState= "isCompleted";
        },
        //删除已完成待办事项，更新视图
        delOne: function (index){
            this.itemArray.splice(index,1);
        }
    }
});
        