
// 1) На старте вы получаете массив. Необходимо написать функцию, которая будет
//    возвращать массив удвоенных значений исходного массива.
//    Пример кода:
//    example([1, 2, 3]) => [2, 4, 6]
//    example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
//    example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]
let id = [1, 2, 3, 4, 1, 1, 1, 4, 2, 2, 2, 2, 2, 2];
let newId = id.map((value) => {
    return value + value;
});
console.log(newId);

// 2) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
//    Нужно найти перебирая эти элементы с помощью цикла четные числа.
//    И эти найденные четные числа должны быть собраны в одном массиве.
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let newArr = arr.filter(value => value % 2 == 0);
console.log(newArr);

// 3) Заполните массив 10-ю иксами с помощью цикла.    [x,x...]
let arr3 = [];
for(let i = 0; i < 10; i++){
    arr3[i] = 'x';
}
console.log(arr3);

// 4) У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
//    С помощью цикла for и оператора if нужно проверить есть ли в массиве число
//    со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'
let arr4 = [1, 2, 115, 4, 58, 5, 7, 99];
for(let i = 0; i < arr4.length; i++){
    if(arr4[i] == 4){
        alert('ЕСТЬ!!');
    }
}