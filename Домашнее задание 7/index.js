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

// const arrNum = [1, 2, 3, 4, 5, 6, 7, -2, 9, 0];
// function findPairs(arrNum) {
//     let pairs = [];
//     for (let i=0; i < arrNum.length; i++) {
//         for (let h=i+1; h<arrNum.length; h++) {
//             if (arrNum[i] + arrNum[h]===7) {
//                 pairs.push([arrNum[i], arrNum[h]]);
//             }
//         }
//     }
//     return pairs;
// }
// const sumPairs= findPairs(arrNum);
// console.log(sumPairs);





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
//    let newArr= arr1.concat(arr2, arr3).sort((a, b) => (b-a)); 
//     { 
//     return newArr;
//     }
// }
// const compArr=compilateArr(arr1, arr2, arr3);
//  console.log(compArr);

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],
// [6]]. Найдите сумму элементов этого массива. Массив, конечно
// же, может быть произвольным.

// const twoDimensionArry = [[1, 10, 15], [11, 7, 4]];
// function arraySum(twoDimensionArry) {
//     newArr=twoDimensionArry.flat(Infinity) 
//      let sum=newArr.reduce((accum, num) => accum + num, 0)
//      return sum;
// }
// const arrSum=arraySum(twoDimensionArry);
// console.log(arrSum);

// 9. Дан массив с числами. Не используя метода reverse
// переверните его элементы в обратном порядке.

// const arrMas = [1, 2, 3, 4, 5];
// function toReverseArr(arrMas) {
//     return arrMas.map((_, index, array)=>array[array.length-1-index])
// }
// const reversedArray=toReverseArr(arrMas);
// console.log(reversedArray);

// const arrMas = [1, 2, 3, 4, 5];
// function toReverseArr(arrMas) {
//     let newArray = [];
//      for(let i = arrMas.length - 1; i >= 0; i--) {
//     newArray.push(arrMas[i])
// }
// return newArray;
// }
// const reversedArray=toReverseArr(arrMas);
// console.log(reversedArray);

// 10. Дан массив с числами. Узнайте сколько элементов с начала
// массива надо сложить, чтобы в сумме получилось больше
// 10-ти.

// const numArray = [1, 2, 3, 4, 9, 5, 6];
// function sumNum(numArray) {
//     let sum = 0;
//     let effort=0;

// for (i = 0; i < numArray.length; i++) {
//     sum += numArray[i];
//     effort = i +1;
// }

// if (sum > 10) {
//     return effort;
// }
// }
// const result = sumNum(numArray);
// console.log(result);

// 11. Напишите функцию arrayFill, которая будет заполнять
// массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым -
// сколько элементов должно быть в массиве. Пример:
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(value, length) {
//     return new Array(length).fill(value);
// }
// console.log(arrayFill("гусь", 7));
