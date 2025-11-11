// 1. Используя метод map() напишите код, который получает из
// массива строк новый массив, содержащий их длины.

// const massive =["Mellow", "watermellow", "tomatos","action"]
// let massiveLengths = massive.map(function(massive) {
//     return massive.length;
// })
// console.log( massiveLengths);

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,
// 19]. Использую метод reduce() напишите функцию
// currentSums(numbers), которая возвращает новый массив из
// такого же числа элементов, в котором на каждой позиции
// будет находиться сумма элементов массива numbers до этой
// позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// function currentSums(numbers) {
//  return numbers.reduce((accum, current, index)=> {
//     if (index===0) {
//       accum.push(current); }
//     else {
//         accum.push(accum[index -1]+ current);
//        }
//     return accum;
//  }, []);
// }
// console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый
// массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д






// 4. Напишите код, создающий массив, который будет состоять из
// первых букв слов строки str.

// let str="В траве сидел кузнечик";
// function firstChar(str) {
//     const firstLetter = str
//     .split(' ')
//     .map(word => word.charAt(0))
//     .join("")
//     return firstLetter;
// }
// let newArray = Array.from(firstChar(str));
// console.log(newArray);

// 5. Напишите код, создающий массив, который будет состоять из
// строк, состоящих из предыдущего, текущего и следующего
// символа строки str.

// const str = "Кузнечик";
// function getCharCombination(str, index) {
//     return str.substring(index - 1, index + 2);
// }
// const combArray = Array.from(str, (_, index) => getCharCombination(str, index));
// console.log(combArray);

// 6. Напишите код, преобразующий массив цифр, которые
// располагаются неупорядоченно, в массив цифр
// расположенных по убыванию их значений.

// let numArr= [1, 97, 58, 144, 64, 1005];
// function numOrder() {
// let newNumArr= numArr.sort (function(a, b){
//     return (a-b); 
// }
// )
// return newNumArr;
// }
// console.log(numOrder());

// 7. Напишите код, объединяющий три массива цифр, и
// располагающий цифры, в полученном массиве, в порядке
// убывания их значений через пробел.

// ПОКА НЕ ДОДЕЛАЛА

// const arr1=[1,2,3];
// const arr2=[4,5,9];
// const arr3=[15,19,27];

// function compilateArr(arr1, arr2, arr3) {
//    let newArr= arr1.concat(arr2, arr3).sort((a, b) => (a-b));
//     let strComma = newArr.join(" ") 
//     let strWioutComma= strComma.replace(/,/g, " ");
//     {
//     return strWioutComma
//     }
// }
// const compArr=compilateArr(arr1, arr2, arr3);
// console.log(compArr.split(" ").map(Number));
