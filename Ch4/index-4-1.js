Vue.filter ('dateFormat', function (date){
    var dy = date.getFullYear();
    var dm = date.getMonth() + 1;
    var dd = date.getDate();
    var dh = date.getHours();
    var dms = date.getMinutes();
    var ds = date.getSeconds();
    return `${dy}-${dm}-${dd}   ${dh}:${dms}:${ds}`
});
    var myViewModel = new Vue({
        el:'#vue41',
        data:{
            trClass: 'tr1',
            keyword: '',
            id:'',
            bookname: '',
            press: '',
            author: '',
            bookLists: [{
                id: 1,
                bookname: 'web前端开发技术',
                press: '清华大学出版社',
                author:'储久良',
                ptime: new Date(),
                operation:['编辑','删除']
            },
            {
                id: 2,
                bookname: 'Java程序设计',
                press: '电子工业出版社',
                author:'耿祥义',
                ptime: new Date(),
                operation:['编辑','删除']
            },
            {
                id: 3,
                bookname: 'JavaScript高级程序设计',
                press:'高等教育出版社',
                author:'张路路',
                ptime: new Date(),
                operation:['编辑','删除']
            }]
        },
        methods:{
            add() {
            //数据不为空时,才能添加
            if (this.id!="" && this.bookname!="" && this.press!="" && this.author!=""){
                this.bookLists.push({
                    id: this.id,
                    bookname: this.bookname,
                    press: this.press,
                    author: this.author,
                    ptime: new Date(),
                    operation:['编辑','删除']
                });
            }else {
                alert("图书数据不完整,请补充。")
            }
            this.id = '';
            this.bookname = '';
        },
        deleteBook(i){
            this.bookLists.splice(i,1);
        },
        search(bname){
            var arrBooks=[];
            this.bookLists.forEach( (item,i) => {
                if(item.bookname.indexOf(bname)!=-1){
                    arrBooks.push(item);
                }
            });
            return arrBooks;
        }
    }
})