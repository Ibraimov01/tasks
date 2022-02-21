/********** && *******************/

let num1 = 11;
let num2 = 22;
// 1) true+false=false
let results = num1 === 11 && num2 === 11;
console.log(results); //false
// 4)true+true=true
let results1=num1 === 11 && num2 > 11;
console.log(results1); // true
// 2) false+true=false
let results2 = num1 > 22 && num2 === 22;
console.log(results2); // false
// 3)false+false=false
let results3 = num1 > 22 && num2 < 11;
console.log(results3); // false

/*********** ИЛИ (||) ********************/
 let age=30;
// 1) true+false=true
let result = age ===30 || age===35;
console.log(result); // true
// 3)false+false=false
let result2 = age === 15 || age < 15;
let result3 = false+false
console.log(result2); //false;
// 2) false+true=true
let result4 = age > 30 || age<35;
console.log(result4);//true
// 4)true+true=true
let result5 = age ===30 || age>25;
console.log(result5);//true
// 1)Переделайте приведенный код так, чтобы в нем использовались операции
//     +=, -=, *=, /=, ++, --.
// Количество строк кода при этом не должно измениться.
//     Код для переделки:
let num = 1;
num1 =num+=12;
num2 =num-= 14;
num3 =num*= 5;
num4 =num /= 7;
num5 = ++ num;
num6 = -- num;
alert(num1);alert(num2);alert(num3);alert(num4);alert(num5);alert(num6);

// 2)Переделайте этот код так, чтобы в нем использовались операции ++ и --.
// Количество строк кода при этом не должно измениться.

var num3 = 10;
num3++;
++num3;
num3--;
alert(num3);