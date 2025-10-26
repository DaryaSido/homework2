// 1. Сделайте функцию, которая возвращает квадрат числа. Число
// передается параметром.

// function squaring(num) {
//      alert (num**2)
// };
// squaring(5);

// 2. Сделайте функцию, которая возвращает сумму двух чисел
// function calculator(a,b) {
//     alert (a + b);
// }
// calculator(3, 6);


// const sum =(a,b)=>{
//         return a + b;
//     }
// console.log(sum(5,6));

// 3. Сделайте функцию, которая отнимает от первого числа второе
// и делит на третье.

// function calculator(a,b,c) {
//     alert ((a-b) / c);
// }
// calculator(10, 1, 3);

// const calculator = (a,b,c) => {
//     return ((a-b)/c);
// }
// console.log(calculator(10,1,3));

// 4. Сделайте функцию, которая принимает параметром число от 1
// до 7, а возвращает день недели на русском языке.

// function dayOfWeek(num) {
//     if (num === 1) {
//     console.log("понедельник");
//     }

//     else if (num === 2) {
//     console.log("вторник");
//     }
    
//     else if (num === 3) {
//     console.log("среда");
//     } 

//     else if (num === 4) {
//     console.log("четверг");
//     }

//     else if (num === 5) {
//     console.log("пятница");
//     }
    
//     else if (num === 6) {
//     console.log("суббота");
//     }

//     else if (num === 7) {
//     console.log("воскресенье");
//     }
// }
// dayOfWeek(5);

// 5. Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не
// равны - false.

// function compairingNumbers(a,b) {
//   if (a===b) {
//     console.log("True");
//   }
//   else {
//     console.log("False");
//   }
// }
// compairingNumbers(2,2);

// compairingNumbers=(a,b) => {
//     return (a===b); 
// }
// console.log(compairingNumbers(2,5));

// 6. Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть вернет true, а если нет то -
// false.

// function calculator(a,b) {
//     if((a+b) > 10) {
//         console.log("True");
//     }
//     else {
//         console.log("False")
//     }
// }
// calculator(5,7);

// calculator = (a,b) => {
//     return ((a+b) > 10);
// }
// console.log(calculator(5,4));

// 7. Сделайте функцию, которая параметром принимает число и
// проверяет - отрицательное оно или нет. Если отрицательное -
// пусть функция вернет true, а если нет - false

// function pozitiveNumber(a) {
//     if (a>0) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }
// pozitiveNumber(-10);

// pozitiveNumber = (a) => {
//     return a>0;
// }
// console.log(pozitiveNumber(10));

// 8. Сделайте функцию isNumberInRange, которая параметром
// принимает число и проверяет, что оно больше нуля и меньше
// 10. Если это так - пусть функция возвращает true, если не так -
// false.

// function isNumberInRange(a) {
//     if ((a>0 && a<10)) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }
// isNumberInRange(5);

// 9. *Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром принимает целое число и возвращает сумму его
// цифр.
// function getDigitsSum(digit) {
//     sum = 0;
//     while(digit) {
//         sum += digit % 10;
//         digit = Math.floor (digit / 10);
//        }
//     return sum;
// }
// console.log(getDigitsSum(57));

// 10. *Найдите все года от 1 до 2020, сумма цифр которых равна
// 13. Для этого используйте вспомогательную функцию
// getDigitsSum из предыдущей задачи.

// function getDigitsSum(digit) {
//     sum = 0;
//     while(digit) {
//         sum += digit % 10;
//         digit = Math.floor (digit / 10);
//        }
//     return sum;
// };

// function findYear(targetSum, firtsYear=1, lastYear=2020) {
//     targetSum=13;
//     const result = []
//     for ( let year = firtsYear; year <= lastYear; year++)
//     if(getDigitsSum(year)=== targetSum) {
//     result.push(year)
//     }
//     return result;
// }
// console.log(findYear());



// 11. Сделайте функцию isEven() (even - это четный), которая
// параметром принимает целое число и проверяет: четное оно
// или нет. Если четное - пусть функция возвращает true, если
// нечетное - false.

// function isEven(a) {
//     if(a % 2===0) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }
// isEven(9);

// isEven=(a)=> {
//     return a % 2 === 0;
// }
// console.log(isEven(10));

// 12. *Дано число. Сложите его цифры. Если сумма получилась
// более 9-ти, опять сложите его цифры. И так, пока сумма не
// станет однозначным числом (9 и менее). Можно использовать
// функцию getDigitsSum из 9 задачи\

// function getDigitsSum(digit) {
//     let sum = 0;
//     while(digit) {
//         sum += digit % 10;
//         digit = Math.floor (digit / 10);
//        }
// //    return sum;
//     if(sum>9) {
//         return getDigitsSum(sum);
//     };
//    if(sum<=9) {
//         return sum;
//     }
// }
//     console.log(getDigitsSum(1589231));


// 13. * Напишите стрелочную функцию, которая будет
// возвращать true если строка является палиндромом и false в
// противном случае.
// function isPalindrom(a,b) {
//     if (b === a.split("").reverse().join(""))
//     {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isPalindrom("лавр", "рвал"))

// const slovoPal = (a,b) =>
//      {return (b === a.split("").reverse().join("")); 
// }
// console.log(slovoPal("лавр", "рвал"));

