// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//     constructor (name, surname, rate, days) {
//         this.name = name,
//         this.surname = surname, 
//         this.rate = rate,
//         this.days = days
//     }
//     getSalary() {
//         return this.rate*this.days;
//     }
//     getFullName() {
//         // console.log(this.name, this.surname)
//         return this.name +" "+ this.surname
//     }
// }
// superWorker = new Worker("Дарья", "Сидорова", 20000, 22);
// console.log(superWorker.getFullName());
// console.log(superWorker.getSalary());

// 2. Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.

// class Worker {
//     constructor (name, surname, rate, days) {
//         this.name = name,
//         this.surname = surname, 
//         this.rate = rate,
//         this.days = days
//     }
//     getSalary() {
//         return this.rate*this.days;
//     }
//     getFullName() {
//         // console.log(this.name, this.surname)
//         return this.name +" "+ this.surname
//     }
// }
// class Boss extends Worker{
//     constructor (name, surname, rate, days, workers){
//     super(name, surname, rate, days);
//     this.workers = workers;
//     }
//     getAllSalary(){
//         return this.workers*this.days*this.rate+ " руб.";
//     }
// }
// const director = new Boss("Петров", "Петр", 1200, 22, 68);
// console.log(director);
// console.log(director.getAllSalary());
// console.log(director.getFullName());


// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

// class Worker {
//     constructor (name, surname,rate, days) 
//     {
//         this.name = name,
//         this.surname = surname
//         this._rate = rate,
//         this._days = days}

//     get rate() {
//         return this._rate;
//     }
//     set rate(value) {
//         if (value <=1000) {
//     console.log("Ставка назначена не верно");
//      return;
//         }  
//      this._rate = value;
//         return value;
//     }
//     get days() {
//         return this._days;

//     }
//     set days(workDay) {
//      if (workDay <= 0 || workDay > 30) {
//     console.log("Рабочие дни записаны не верно!");
//     return;
//         }  
//      this._days = workDay;
//         return workDay;
//     }    

//       getSalary() {
//         return this._rate*this._days;
//     }
//     getFullName() {
    
//         return this.name +" "+ this.surname;
//     }
// }
// const teacher = new Worker ("Сильвестр", "Сталоне", 16000, 23);
// teacher.rate=500;
// teacher.days=45;
// console.log(teacher);


// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.

// class MyString {
//     constructor(str) {
//         this.str=str;
//     }
//     reverse() {
//         return this.str.split('').reverse().join("");
//     }
//     ucFirst() {
//         return this.str.charAt(0).toUpperCase()+this.str.slice(1); 
//     }
//     ucWords() {
//     return this.str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.substr(1)).join(" ");
//     }
// }
// const string= new MyString("купила мама леше отличные калоши");
// console.log(string.ucWords());
// console.log(string.ucFirst());
// console.log(string.reverse());

// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

// class Validator {
//     constructor(str,url, data, phone) {
//         this.str=str;
//         this.url=url;
//         this.data=data;
//         this.phone=phone;
//     }
//     isEmail() {
//         if ((this.str.includes("@") && this.str.includes("."))===true) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     isDomain() {
//         if((this.url.includes('.')&& !this.url.includes(" ")) || this.url.includes("net")|| this.url.includes("org")|| this.url.includes("ru")) {
//             return "Домен корректный"
//         }
//         else {
//             return "Проверьте правильность введенного адреса"
//         }

//     }
//     isDate() {
//         const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.([12][0-9]{3})$/;
//         if (dataRegex.test(this.data)) {
//             return "Дата корректна"
//         } 
//         else {
//             return "Проверьте дату"
//         }

//     }
//     isPhone() {
//         if((this.phone.length===12 && this.phone.includes("+7"))===true) {
//             return "Номер верный";
//         }
//         else {
//         return "Номер не существует";
//         } 
            
        
//     }
// }
// const someString = new Validator("кукушка@mail.ru", "yandex.ru", "12.25.2025", "+79506120915");
// console.log(someString.isEmail());
// console.log(someString.isPhone());
// console.log(someString.isDate());
// console.log(someString.isDomain());
// 6. Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date.

// class User {
//     constructor(name, surname, year) {
//     this.name=name;
//     this.surname=surname;
//     this.year=year;
//     }
//     getFullName() {
//         return this.name + " " + this.surname;
//     }
// }
// class Student extends User{
//     constructor(name, surname, year, data) {
//     super(name, surname, year);
//     this.data=data;
//     }
//     getCourse() {
//         return this.data-this.year;
//     }

// }
// const Vladimir = new Student("Vladimir", "Pupkin", 2015, 2017);
// console.log(Vladimir.getFullName());
// console.log(Vladimir.getCourse());