// for in   for 性能测试
var num = 100000;
var arr = []
for (let i = 0; i < num; i++) {
    arr.push(i)
}
// 普通 for 循环
var start1 = new Date().getTime();
for (let i = 0; i < arr.length; i++) {

}
var end1 = new Date().getTime();
console.log('for in :');
console.log(end1 - start1);

// for in 循环
// for in 是专门为对象遍历设计的，使用其遍历数组会有较大的性能差异
// var start2 = new Date().getTime();
// for (let key in arr) {
    
// }
// var end2 = new Date().getTime();
// console.log('for :');
// console.log(end2 - start2);

// forEach  循环
var start3 = new Date().getTime();
arr.forEach(function(value, i){

})
var end3 = new Date().getTime();
console.log('forEach :');
console.log(end3 - start3);

// map  循环
var start4 = new Date().getTime();
arr.map(function(value, i){

})
var end4 = new Date().getTime();
console.log('map :');
console.log(end4 - start4);


// 在百万条数据以内，基本无差异
// 百万以上 for > forEach > map
// 初步猜测map是由于要返回一个数组并将return的结果push进去