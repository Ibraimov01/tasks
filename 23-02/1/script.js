/*Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/
let Salaries = {
    name1:"Ella",
    name2:"Solphia",
    name3:"Eliie",
    SalaryElla:500,
    SalarySolphia:600,

}
console.log(Salaries.SalaryElla);
console.log(Salaries.SalarySolphia);

/*Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.*/

let summ={
    a:5,
    b:6,
    c:10,

};
console.log(summ.a+summ.b+summ.c)
/*Сделайте рефакторинг кода, с помощью тернарного оператора.*/
let data = false;
let number = (data === true) ? 3 : 5;
console.log(number);
// Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».
// Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».

let name = prompt('Кто такой В.В.ПУТИН?', '');
if(name == 'Президент'){
    alert('Верно!');
}
else{
    alert('Не знаете?');
}

