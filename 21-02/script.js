/*********** && ********************/
let num1 = 11;
let num2 = 22;
let result = num1 === 11 && num2 === 22;
console.log(result); //false

let result2=num1 === 11 && num2 > 11;
console.log(result2); // true

// 1) true+false=false
// 2) false+true=false
// 3)false+false=false
// 4)true+true=true