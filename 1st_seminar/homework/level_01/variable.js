//JavaScript 재선언 실습

var variableVar = "123";
var variableVar = "321";

console.log(`variableVar: ${variableVar}`);

var variableLet = "123";
var variableLet = "321";

console.log(`variableLet: ${variableLet}`);

const variableConst = "123";
variableConst = "321";

console.log(`variableConst: ${variableConst}`);

// JavaScript 재할당 실습

var variableVar = "123";
variableVar = "321";

console.log(`variableVar: ${variableVar}`);

let variableLet = "123";
variableLet = "321";

console.log(`variableLet: ${variableLet}`);

const variableConst = "123";
variableConst = "321";

console.log(`variableConst: ${variableConst}`);


//JavaScript block Scope

if(true) {
    var x = 'var';
}
console.log(`var: ${x}`);

if(true) {
    let y = 'let';
}
console.log(`let: ${y}`);

function colorFunction() {
    if(true) {
        var color = 'red';
        console.log(color);
    }
    console.log(color);
}
colorFunction();
console.log(color);
