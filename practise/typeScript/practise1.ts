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
let m : string | number = 1;
m = '1';

function sum(n : number) {
    return n + n;
}
console.log(sum(1));

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    });
}