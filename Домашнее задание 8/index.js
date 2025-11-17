// 1. Что выведет функция?
// function f() {
// alert(this);
// }
// let user = {
// g: f.bind(null),
// };
// user.g();
// 
// Решение: Функция выведет [object window]

// 2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
// alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();

// Решение: нет, потому что bind привязывается только 1 и создается новая функция.


// 3. В свойство функции записано значение. Изменится ли оно
// после применения bind?
// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });
// alert( bound.test );

// Решение: в функцию не будет записано значение, т.к. оно было до вызова. Поэтому в итоговом alert будет undefined.
// Функция этого значения не знает, т.к. на момент alert внутри функции фиксируется все, что в ней записано с помощью bind 
// function bound() {
//     return sayHi.call({name: "Вася"})
// }
// Чтобы значение sayHi.test отобразилось, нужно копировать свойство в bound, т.е.
// bound.test=sayHi.test


// 4. Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'Вася',
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(user.loginOk, user.loginFail);

// Решение: в данном случае функция теряет связь с user через this - ok() != loginOk(). Не понятно откуда функции брать аргументы.
// Можно передать метод или вызвать
// if (password == "rockstar") user.loginOk(); else user.loginFail();
// if (password == "rockstar") ok.call(user); else fail.call(user);

// 5. Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'John',
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };
// askPassword(user.login.bind(user,true), user.login.bind(user,false));
// Берем метод из юзера и привязываем контекст объекта к функции askPassword.


// 6. Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
// const elem = {value: ‘Привет’}
// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }
// func = func.bind(elem);
// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов
// Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров
// Петр'
// Связали elem и функцию, обозначив ее как this в ней.

// 7. Есть функция которая складывает три числа.Выполните
// каррирование.
// const sum = (a, b, c) => a + b + c
// в таком виде не работает
// function sum(a) {
//  return function (b) {
//   return function (c) {
//    return a + b + c;
//             }
//         }
//         }

// console.log(sum(1)(2)(3));

// sum=a=>b=>c=>a+b+c;
// console.log(sum(1)(2)(3));


// 8. Реализовать таймер-функцию используя замыкания. Функция
// принимает два аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера.

// function newTimer(start, end) {
//     let currentValue=start;
//     return function() {
//   if (currentValue>=end) {
//         console.log(`Таймер: ${currentValue}`);
//         currentValue --;
//     }
//     else {
//         console.log(`Таймер завершен. ${currentValue+1}`)
//     }
//     }  
// }
// const timer = newTimer(101, 5);
// timer();timer();timer();timer();timer();timer();timer();timer();

