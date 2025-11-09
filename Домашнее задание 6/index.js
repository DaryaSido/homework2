// 1. Преобразовать строку в массив слов. Напишите функцию
// stringToarray(str), которая преобразует строку в массив слов.


// const stringToarray = (str) => {
//  return str.split(" ")
// }
// let str="Ехал Грека через реку"
// console.log(stringToarray(str));

// 2. Напишите функцию deleteСharacters(str, length), которая
// возвращает подстроку, состоящую из указанного количества
// символов.

// function deleteСharacters(str, length) {
// return str.substr(0, length);
// }
// let str="Ехал Грека через реку";
// console.log(deleteСharacters(str, 5));

// 3. Напишите функцию insertDash(str), которая принимает строку
// str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в
// верхний регистр.

// function insertDash(str) {
// let newStr=str.toUpperCase();
// return  newStr.replace (/ /g, "-") ;
// }
// let str = "В траве сидел кузнечик";
// console.log(insertDash(str));

// 4. Напишите функцию, которая принимает строку в качестве
// аргумента и преобразует регистр первого символа строки из
// нижнего регистра в верхний.
// function changeRegister(str) { 
// return str.charAt(0).toUpperCase(/ /g) +str.slice(1);
// }
// let str = "в траве сидел кузнечик";
// console.log(changeRegister(str));

// 5. Напишите функцию capitalize(str), которая возвращает строку,
// в которой каждое слово начинается с заглавной буквы
// function capitalize(str) {
//     return str
//         .split(" ")
//         .map(upperStr => {
//             return upperStr.charAt(0).toUpperCase() + upperStr.slice(1).toLowerCase();
//         })
//         .join(' ');
// }

// let str="я уеду жить в лондон";
// console.log(capitalize(str));

// 6. Напишите функцию changeRegister(str), которая принимает в
// качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
// оХоТнИк».
// function changeRegister(str) {
//     return str
//         .split('')
//         .map(char => {
//             if (char === char.toUpperCase()) {
//                 return char.toLowerCase();
//             } else {
//                 return char.toUpperCase();
//             }
//         })
//         .join('');
// }
// let str="КаЖдЫй ОхОтНиК";
// console.log(changeRegister(str));

// 7. Напишите функцию removeChar(str), которая возвращает
// строку, очищенную от всех не буквенно-цифровых символов.

// function removeChar(str) {
//     return str.replace(/[|\/]\W|_/g, "");
// }
// let str="dogs||| cats_ //rats"
// console.log(removeChar(str));

// function removeChar(str) {
//     return str.replace(/[|\/]/g, "");
// }
// let str="батоны||| булки //носки"
// console.log(removeChar(str));

// 8. Напишите функцию zeros(num, len), которая дополняет нулями
// до указанной длины числовое значение с дополнительным
// знаком «+» или «-» в зависимости от передаваемого
// аргумента.

// function zeros(num, len) {
// let sign = num >= 0 ? '+' : '-';
// let figure = Math.abs(num);
// return sign + figure.toString().padStart(len, "0")   
// }
// console.log(zeros(10, 3));

// 9. Напишите функцию comparison(str1, str2), которая сравнивает
// строки без учёта регистра символов.


// function comparison(str1, str2) {
//     return str1.toLowerCase()===str2.toLowerCase();
// }
// let str1="АДРЕС";
// let str2="адрес";
// console.log(comparison(str1, str2));

// 10. Напишите функцию insensitiveSearch(str1, str2), которая
// осуществляет поиск подстроки str2 в строке str1 без учёта
// регистра символов.

// function insensitiveSearch(str1, str2) {
//     const lowerStr1 = str1.toLowerCase();  
//     const lowerStr2 = str2.toLowerCase(); 
//     let positions = [];
//     let pos = 0;
    
//     while (true) {
//         let foundPos = lowerStr1.indexOf(lowerStr2, pos);
//         if (foundPos == -1) break; 
//         positions.push(foundPos);
//         pos = foundPos + 1; 
//     }
//     return positions;
// }
// let str1="Кукушка кукушонку купила капюшонку";
// let str2="Ку";
// console.log(insensitiveSearch(str1, str2));

// 11. Напишите функцию initCap(str), которая преобразует стиль
// написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое
// слово внутри строки пишется с заглавной буквы.

// function initCap(str) {
//      return str
//      .split(" ")
//       .map(word => {
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         })
//         .join('');
// }
// let str="Каждый охотник желает знать, где сидит фазан";
// console.log(initCap(str));

// 12. Напишите функцию initSnake(str), которая преобразует
// стиль написания составных слов строки из CamelCase в
// snake_case, при котором несколько слов разделяются
// символом подчеркивания (_), причём каждое слово пишется с
// маленькой буквы.

// function initSnake(str) {
//     return str
//         .split(/(?=[A-ZА-Я])/)
//         .map(word => word.toLowerCase())
//         .join('_');
// }
// console.log(initSnake("КупилаМамаЛешеОтличныеКалоши"));

// 13. Напишите функцию repeatStr(str, n), которая возвращает
// строку повторяемую определённое количество раз.

// function repeatStr(str, n) {
//     return str.repeat(n);
//     }
// console.log(repeatStr("авокадо", 6));

// 14. Напишите функцию path(pathname), которая возвращает
// имя файла (подстрока после последнего символа "\" ) из
// полного пути к файлу.

// function path(pathname) {
//  endPath = pathname.split("/").pop(); {
//      return endPath;}
   
//  }
// console.log(path('https://news.mail.ru/politics/68641020/?frommail'));

// 15. Создайте функцию endsWith(), который сравнивает
// подстроку str1 с окончанием исходной строки str и определяет
// заканчивается ли строка символами подстроки.

// function endsWith(str, str1) {
//     if (str.split(" ").pop()===str1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(endsWith("Купила мама Леше", "Леше"));

// 16. Напишите функцию getSubstr(str, char, pos), которая
// возвращает часть строки, расположенную после или до
// указанного символа char в зависимости от параметра pos.
// function getSubstr(str, char, pos) {
//     if(pos=='after') {
//     return str.slice(str.indexOf(char) + 1);  }
//   else if(pos=='before') {
//     return str.slice(0, str.indexOf(char)); }
//   else {
//     return str; 
//   }  
// }
// console.log(getSubstr("С давних времен остались на них следы пожара - катастрофы, дотла разрушивших храм", "-", "after"));

// 17. Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указанную позицию pos строки str. По
// умолчанию подстрока вставляется в начало строки.

// function getSubstr(str, substr, pos=0) {
//   return str.slice(0, pos) + substr + str.slice(pos);
// }
// console.log(getSubstr("Ежик в тумане", "Роза в стакане", 6));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает
// строку, если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...»
// (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb) {
//     if (str.length>n && symb>0) {
//         return str.slice(0, n) + symb;
//     }
//     else {
//         return str + "...";
//     }
// }
// console.log(limitStr("Кукуреку", 4, 1));

// 19. Напишите функцию count(str, stringsearch), которая
// возвращает количество символов stringsearch в строке str.

// function count(str, stringsearch) {
//     const lowerStr = str.toLowerCase();
//      return lowerStr.split(stringsearch.toLowerCase()).length - 1;
// }
// console.log(count("Шла Саша по шоссе и сосала сушку", "ш"));

// 20. Напишите функцию strip(str), которая удаляет все лишние
// пробелы из строки str.

// function strip(str) {
//     return str.replace(/\s+/g, " ");
// }
// console.log(strip("Иван    Михалыч Таранов     сегодня           встал очень           рано"));

// 21. Напишите функцию cutString(str, n), которая удаляет лишние
// слова из строки str, оставив в ней n слов.

// function cutString(str, n) {
//     return str.split(" ").splice(0, n).join(" ");
// }
// console.log(cutString("Иван Михалыч Таранов сегодня встал очень рано", 3));

// 22. Напишите функцию findWord(word, str), которая проверяет,
// существует ли в строке str слова word.

// function findWord(word, str) {
//     return new RegExp('\\b'+ word +'\\b').test(str);
// }
// console.log(findWord("Learn", "Learn JS is crying all the time..."));
