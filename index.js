//Простые данные. В переменной хранится возраст пользователя. Ему может быть 0 лет.
let userAge = 0;
console.log(userAge)
//Флаги состояния. Задача: Нужно отслеживать, авторизован ли пользователь на сайте.
isUserAuthorized = true;
console.log(isUserAuthorized)
//Коллекции элементов. Задача: В переменной хранится список всех товаров в корзине интернет-магазина
const allProducts = ['banans', "apples", "lemons"]
console.log(allProducts)
//Сложные данные (объект). Задача: В переменной хранится информация о книге: её название, автор, год издания и количество страниц.
bookOfTheDay = {
nameOfBook: "Унесенные ветром",
author: "Маргарет Митчел",
yearOfPublication: 1936,
numberOfPage: 1088
}
console.log(bookOfTheDay)
//Вычисляемые значения. Задача: В переменную записывается общая сумма всех товаров в корзине после применения всех скидок. Как назвать переменную?
let sumAfterDiscount = {sumAll - sumDiscount}
sumAll //сумма за заказ
sumDiscount //сумма всех скидок
//События и таймеры. Задача: В переменной хранится ID таймера, который запускает какое-то действие каждые 5 секунд. Эта переменная нужна, чтобы позже можно было этот таймер остановить.
let timerId = setTimerMusic(function(playMusic))
function playMusic () {
    alert ("Music")
}
setTimerMusic (playMusic, 5000);

