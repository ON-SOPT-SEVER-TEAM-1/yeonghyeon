// const variableConst = "123";
// variableConst = "321";

// console.log(`variableConst: ${variableConst}`);

// if(true) {
//     var x = 'var';
// }
// console.log(`var: ${x}`);

// if(true) {
//     let y = 'let';
// }
// console.log(`let: ${y}`);

// function colorFunction() {
//     if(true) {
//         var color = 'red';
//         console.log(color);
//     }
//     console.log(color);
// }
// colorFunction();
// console.log(color);

// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');

// console.log(symbol1.description)
// console.log(symbol1 === symbol2);

// console.log('--------------');

// const includes = Symbol('커스텀 includes 함수');

// Array.prototype[includes] = function() {
//     return 'its Symbol';
// }

// var arr = [1, 2, 3];
// console.log(arr.includes(1));
// console.log(arr['includes'](1));
// console.log(arr[includes]());

let nothing = null;
console.log(`nothing : ${nothing}, type: ${typeof nothing}`);
let x;
console.log(`x: ${x}, type: ${typeof x}`);

console.log('null vs undefined');
console.log('null === undefined: ', null === undefined);
console.log('null == undefined: ', null == undefined);
