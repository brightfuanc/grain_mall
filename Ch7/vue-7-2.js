var arrNum=new Array(23, 34, 55, 66, 89, 100);
//var sum=function(arrNum){
exports.sum = function(arrNum){
    for(var i=0, sum=0; i<arrNum.length; i++){
        sum=sum+arrNum[i];
    }
    console.log('数组元素的累加和=' +sum);
}
exports.arrNum=arrNum;
//exports.sum=sum;
