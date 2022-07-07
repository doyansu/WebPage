"use strict";
var amos = 'hello';
console.log(amos);
const person = {
    name: 'Amos'
};
let personName = person.name;
function abc() {
    return 'abc';
}
// 錯誤檢查
// const b = abc();
// b = 'def';
let c = abc();
c = 'def';
let m = 1;
m = '1';
function sum(n) {
    return n + n;
}
console.log(sum(1));
