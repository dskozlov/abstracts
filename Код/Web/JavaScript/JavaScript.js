// JavaScript
// Включая современные возможности JS — ES2015 (ES6)


// Язык чувствителен к регистру
// Точку с запятой МОЖНО не ставить, но крайне желательно
// Крайне полезно пользоваться отладчиком Firebug в Firefox

// Как американцы различают скобки:
// (parentheses)
// [brackets]
// {braces}

// Style Guide (Рекомендуемый стиль программирования)
  // Используй camelCase для имён переменных, функций и методов
  // Открывающиеся фигурные скобки должны стоять на на той же строке
  // Всегда используй фигурные скобки (даже если они необязательны для 1й команды)
  // Определяй функции ПЕРЕД их вызовом
  // Всегда ставь точку с запятой в конце команды
  // Всегда используй var для объявления переменной
// Хорошие рекомендации также дают Yahoo, Google и Mozilla (js style guidelines)

// Подключать скрипты следует перед закрывающимся тегом body в HTML.
// Либо где угодно, но добавлять аттрибут async к тегу script.
// Таким образом, станица загрузится сразу, а скрипты потом.


// Переменные (должны не начинаться с цифр) могут быть любого типа
var currentYear1992_$,
  someOther = 1000,
  x = "String",
  boolean = true;
// var МОЖНО не ставить (JS сделает это самостоятельно, если нужно), но лучше ставить (чтобы не было разночтений).
// Кроме того, каждый раз при вызове var тратится ценный вычислительный ресурс.
// Поэтому вместо таких выражений
var x = 1;
var y = 2;
// лучше пользоваться следующим
var x = 1,
    y = 2;

// По возможности объявлять переменные предпочтительнее с помощью других ключевых слов
let variable; // переменная является локальной для ближайшего блока (и она не подвергается Hoisting'у)
// второй раз подряд объявлять переменную с помощью let в том же блоке нельзя (а переобозначать можно)
const CONSTANT = 42; // переменную нельзя переобозначить (read-only) внутри одной области видимости, а также следует присваивать ей значение при объявлении


// Строки
// Конкатенация
"Hello, " + "World!"
"Hello, " + 42 // => "Hello, 42"
var a = "Hello, ", b = "World!";
var c = a + b; // => "Hello, World"
// Длинные строки можно записывать следующим образом:
var d = "Надо мной в лазури ясной\n" +
"Светит звездочка одна,\n" +
"Справа - запад темно-красный,\n" +
"Слева - бледная луна.";

// того же можно добиться с помощью шаблонов
c = `${a} ${b}`; // => "Hello, World"
d = `
Надо мной в лазури ясной
Светит звездочка одна,
Справа - запад темно-красный,
Слева - бледная луна.
`;


"\t"  // таб
"\""  // Экранирование кавычки
"\\"  // \
"\n"  // перенос строки

// Переменные могут быть как глобальными, так и локальными (внутри фигурных скобок (блока))
// переменная становится локальной, если её вновь объявить внутри нового блока с помощью var


// Функции (не важно, где их вызывать (поскольку перед компиляцией код просматривается браузером 1 раз на наличие функций), но крайне желательно делать это перед их объявлением)
function functionName(arg_1, arg_2) {
  // Можно использовать ключевые слова
  this;      // объект, к которому применяется функция (как метод)
  arguments; // аргументы, заданные в функции

  x = 3; // глобальная переменная (должна быть объявлена до функции)
  var x = 3; // локальная переменная
}

// Функция с параметрами по умолчанию
function doSmth(num = 0, {opt1, opt2, opt3} = {}, ...otherParams) { // {opt1, opt2, opt3} — передаваемый объект и свойства, которые в нем должны быть
  console.log(num, opt1, opt2, opt3);

  // параметров может передаваться сколько угодно. поэтому для всех остальных параметров можно воспользоваться синтаксисом типа "...otherParams"
  for (let i in otherParams) {
    console.log(otherParams[i]);
  }
}
// если опций много, то лучше делать так
function doSmth(options = {}) {
  // задаём значения по умолчанию
  let defaults = {
    opt1: "val1",
    opt2: "val2",
    opt3: "val3"
  }
  // объединяем стандартные значения и значения, переданные в функции
  let settings = Object.assign({}, defaults, options);
}
// передать параметры можно как просто перечислив их
doSmth(1, {}, "one", "two", "three");
// так и с помощью массива
doSmth(1, {}, ...["one", "two", "three"]);

// область видимости (scope) this
obj = {
  name: "iGor",
  doThis: function() {
    console.log(this.name); // => "iGor"

    (function() {
      console.log(this.name); // => ""
    })();

    // Такой тип функций даёт возможность обращаться к родительскому объекту
    ((greet) => {
      console.log(greet + this.name); // => "Hi, iGor"
    })("Hi, ");
    // упрощённый способ записи
    ( greet => console.log(greet + this.name); )("Hi, ");
  }
}


// анонимная функция (без названия)
function(arg) {
  // тело функции
}

// Эти функции загружают память сразу же при запуске программы
// Однако если присвоить функцию переменной, то память будет заниматься ТОЛЬКО тогда, когда программа дойдёт до этой строчки кода (таким образом функция вызывается быстрее)
var functionName = function(argument) {}; // не забываем про точку с запятой!
// Функция будет доступна по имени переменной
functionName(argument);

// Hoisting (подъём)

// Прежде всего нужно понимать, что действия в программе вызываются не поочерёдно, а перед её запуском все переменные и функции загружаются в память, и только после этого становятся доступными в программе.
// Поэтому в программе могут возникать проблемы с доступностью переменных и функций.
function fun_1() {
  return 1;
}
fun_1(); // 2 — вместо ожидаемого 1
function fun_1() {
  return 2;
}


// функция, возвращающая функцию
function adventureSelector(userChoice) {
  var m;

  if (userChoice == 1) {
    m = "You selected the Vines of Doom!";
  }
  if (userChoice == 2) {
    m = "Looks like you want the Lake of Despair!";
  }
  if (userChoice == 3) {
    m = "The Caves of Catastrophe!";
  }

  return function () {alert(m);};
}
// далее её можно вызвать "немедленно" следующим образом:
adventureSelector(3)();

// самовызывающаяся функция
(function () {
  // body...
})();

// замыкание
function fun_1 (arg_1) {
  var local_var = 0; // локальная переменная, доступная функции через замыкание

  return function (num) {
    local_var++; // переменная может меняться при каждом вызове функции
    console.log('This is ' + arg_1 +
      '. And this argument was passed through fun_2: ' + num +
      '. This function was called' + local_var + 'times.');
  }
}
var fun_2 = fun_1("closure");
fun_2(34);
// теперь, каждый раз вызывая функцию fun_2, локальная переменная будет увеличиваться на 1

// Модули
// таким образом довольно просто делать модули (библиотеки), которыми можно пользоваться в других частях программы: то есть локальные переменные, использующиеся в модуле не доступны вне модуля
var MYMODULE = (function() { // специфический неймспейс для методов
  var i, j, k;

  // выводим методы, доступные для использования
  return {
    doThis: function(...) {...},
    doThat: function(...) {...}
  };
})();

// теперь новые методы доступны по такой команде
MYMODULE.doThis();

// Подключение модулей
// Сущности JS (функции, переменные, классы) могут быть переданы из одного модуля (файла) и приняты в другом (в этом случае больше не нужно заботиться о неймспейсах и самовызывающихся функциях).
// Для этого используется команда export.
// Экспортируем, например, функцию
export default function(message) { // default — тип экспортирования (самый простой, можно назвать как угодно при импорте)
  alert(message);
}
export function flashMessage(message) {} // альтернативный вариант (так можно экспортировать сразу несколько различных функций)
// ещё один способ — сначала объявить все функции, а потом экспортировать все, которые нужно:
function flashMessage(message) {}
export { flashMessage }
// Теперь модуль можно подключить с помощью команды import.
import flashMessage from './flash-message';
import { flashMessage, anotherMethod } from './flash-message'; // если экспортировано несколько функций
flashMessage("Hello");
// Также можно импортировать модуль как объект
import * as objName from './flash-message';
// и использовать уже его методы
objName.flashMessage("Hello");


// Массив (в javascript они все динамические)
var array = [];
var array = new Array(); // Аналогичная запись (массивы - это объекты)

array[0] = 50;
array[1] = 'String';
array[0] = undefined; // опустошение ячейки массива
var array = [50, 'String']; // Сокращённая запись
var array = new Array(50, 'String'); // Альтернативная запись
let [a, b, c] = ['One', 'Two', 'Three']; // так можно присваивать переменным элементы массивов
let [a, , b] = ['One', 'Two', 'Three']; // присваиваются выборочные значения
let [a, ...others] = ['One', 'Two', 'Three']; // others = ['Two', 'Three']
// В массивы можно записывать всё, что угодно (даже вперемешку)

// Многомерный массив
var array = [[1, 2], [3, 4]];
array[0][1]; // => 2

// Методы массивов
// Метод — это функция, которая принадлежит объекту
array.length;       // Размер массива
array.pop();        // Удаляет последний элемент массива и возвращает его
array.shift();      // Удаляет первый элемент массива и возвращает его
array.push("Item"); // Добавляет элемент в конец массива
array.reverse();    // Обратный порядок
array.join();       // Запись всех элементов массива в строку (работает гораздо эффективнее по времени, чем простая конкатенация строк)
array.sort();       // Сортировка массива
array.splice(2, 4)  // Возвращает 4 элемента массива, начиная со второго
array.map(function(param) { return param * 2; }); // применение функции к каждому элементу массива (как для параметра функции param)
array.find( item => item === "item" ); // возвращает первый найденный элемент (удобно использовать с объектами)


// Сеты (Sets)
// Сеты — это массивы, которые хранят только уникальные значения
let tags = new Set();
tags.add("JS");
tags.add("CSS");
tags.add("HTML");
tags.add("JS");
console.log(tags); // => ["JS", "CSS", "HTML"]
let weakTags = new WeakSet(); // может хранить только объекты и не ведёт себя как массив (не работает for...of и т.п.)


// Даты
var today = new Date();                  // текущие дата и время
+today // выдаёт значение в миллисекундах
+new Date() // то же самое (полезно использовать для измерения времени работы программы)
var y2k = new Date(2000, 0, 1);          // год, месяц[индекс], день
var y2k = new Date(2000, 0, 1, 0, 0, 0); // год, месяц[индекс], день, часы, минуты, секунды
// Поскольку даты — это объекты, то они не поддаются сравнению
// Методы дат
today.getMonth();    // значение из [0, 11]
today.getFullYear(); // YYYY
today.getYear();     // лучше не использовать
today.getDate();     // значение из [1, 31]
today.getDay();      // значение из [0, 6]. 0 — воскресенье
today.getHours();    // значение из [0, 23]
today.getTime();     // количество миллисекунда с 1 января 1970 года
// Также можно задать соответствующие значения с помощью методов
today.setFullYear();
today.setYear();
today.setDate();
today.setDay();
today.setHours();
today.setTime();


// Объекты
var player = new Object();
var player = {}; // пустой объект
// Сокращённая запись
var player = {
  name: "iGor",
  score: 10000,
  "another prop": "Another"
};
// Доступ к свойствам объекта (2 способа)
player.name;
player["name"];  // как ассоциативный массив
player["na" + "me"]; // то же самое
player["another prop"]; // свойства могут быть с пробелами
// player."another prop" // НО так делать НЕЛЬЗЯ
// Изменение свойств
player.name = "iLyona";
player["name"] = "iLyona";
player.newProperty = "New"; // новое свойство объекта
var gunsArray = ['Knife', 'Rifle', 'Bomb'];
player.guns = gunsArray; // при этом создаётся лишь ссылка на переменную. и при изменении свойства объекта, меняется сама переменная

// также можно присваивать свойства объекту из переменных
let name = "iGor";
let surname = "Polyakov";
let fullName = `${name} ${surname}`;
let user = {
  name,
  surname,
  fullName,
  greet() {console.log('Good morning, ' + fullName);}
}; // => {name: "iGor", surname: "Polyakov", fullName: "iGor Polyakov", greet: function(){...}}
// также можно просто присвоить свойства определённого объекта переменным
{name, fullName} = user;

// Свойства можно удалить
delete player.name; // возвращает true, если свойства больше нет

// Создание метода для объекта
player.someMethod = function () {
  // операции со свойствами
};
// Вызов метода объекта
player.someMethod();

// замещение свойств одних объектов другими
Object.assign(obj1, obj2, obj3, obj4, ...); // чем дальше объект, тем более приоритетны его свойства (самый первый объект замещается результатом действия метода)


// Карты
// Карты позволяют обращаться к данным через ключ, который является чем угодно (не только числом или строкой, но в том числе и объектом)
let player1 = {...}, player2 = {...};
let totalScore = new Map();
let totalScore = new WeakMap(); // в этом случае ключами могут выступать только объекты
totalScore.set(player1, 5000);
totalScore.set(player2, 6000);
console.log(totalScore.get(player1), totalScore.get(player2)); // разные значения
// можно также перебрать все значения в карте (с WeakMap такое не пройдёт)
for (let [key, value] of totalScore) {
  console.log(`${key}: ${value}`);
}

totalScore.has(player1);    // содержит ли карта player1
totalScore.delete(player1); // удалить player1. возвращается true


// Прототипы объектов

// По сути, все сущности в JS являются объектами.
// При объявлении нового объекта ему присваиваются свойства, принадлежащие именно этой сущности. (например, для массивов доступно свойство length, а для строки — метод substring())
// Вместе со всеми объектами идут и такие методы как
.toString() // преобразует объект в строку
.valueOf() // возвращает содержимое переменной
.hasOwnProperty() // проверяет, содержится ли свойство у класса
.toLocaleString()
.isPrototypeOf() // проверяет, является ли переменная типа Object
.constructor // возвращает тело конструктора класса
.constructor.prototype // возвращает содержимое прототипа конструктора класса (того, что объявляется после конструктора)
.__proto__ // то же, что и .constructor.prototype
.propertyIsEnumerable()
// Эти методы можно переопределить при необходимости
Object.prototype.isPrototypeOf(varName); // проверяет, является ли переменная типа Object
Car.prototype.valueOf = function (argument) {};

// Таким образом можно расширить функциональность объектов.
String.prototype.newMethod = function (argument) {};

var car = {wheels: 4, color: "red"};
var ferrari = Object.create(car); // создаёт дубликат объекта car
ferrari.isPrototypeOf(car); // true

// Классы
class ClassName {
  constructor(name, gender){ // запускается  каждый раз при создании нового объекта этого класса
    // для того, чтобы параметры стали доступными методам класса, выполняем следующее
    this.name = name;
    this.gender = gender;
  }

  // метод класса
  doThis() {
    console.log(`This has been done, ${this.name}`);
  }

  _doThat(){} // методы, начинающиеся с подчёркивания принято считать статическими доступными только внутри класса
}
// Создание нового объекта
let newObject = new ClassName("iGor", "male");
newObject.doThis();

// Расширение класса
class NewClassName extends ClassName {
  constructor(){
    super(); // запускает конструктор родительского класса
  }

  doSmthElse(){
    super.doThis(); // выполняет метод родительского класса
  }
}

// Устаревший метод создания классов
// Создадим новый класс объектов при помощи функции, которая называется конструктором
function Car (wheels, color) {
  this.wheels = wheels;
  this.color = color;
}
Car.prototype = { // Свойства, которые не принадлежат непосредственно объектам, однако ими можно пользоваться при необходимости.
  drive: function() { console.log('Врум!'); }
  log: function() { console.log('У этой машины ' + this.wheels + ' колеса'); }
}
// Теперь можно легко создавать объекты класса Car
var ferrari = new Car (4, "red");
var reliantRobin = new Car (3, "blue");
ferrari.drive();

// Проверка, принадлежит ли объект указанному типу
ferrari instanceof Car


// Promise
// Промисы нужны для гибкого взаимодействия с асинхронными событиями на сайте.
// Например, как только пользователь отправил запрос на сервер, работа сайта не приостанавливается, но как только был получен ответ, функция отправки запроса на сервер продолжает свою работу.
// Рассмотрим работу промиса на примере функции HTTP-запроса
function getHttp(url) {
  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response)); // решение (если всё ок)
      } else {
        reject(new Error(request.status)); // отказ (при ошибке); сразу переходит к catch, минуя then
      }
    };

    request.onerror = function() {
      reject(new Error("Ошибка при получении данных."));
    };

    request.send();
  });
}
// воспользуемся функцией и обработаем данные после того, как они будут получены с сервера
getHttp("./data.json")
  .then(function(result) {
    console.log(result);
  }) // также можно продолжить вызывать сколько угодно методов then (то, что возвращает один метод then поступает в качестве аргумента следующего)
  .catch(function(error){
    console.log(error);
  });
// таким образом, функции не нужно передавать колбеки, как это было бы без промисов



// Условный оператор
if (/*condition*/) {/*true*/} else {/*false*/}
// Альтернативная запись (Тернарная условная операция)
/*condition*/ ? /*true*/ : /*false*/
// присвоение
var x = true ? 2 : 3;
// действия по условию
var x, y;
true ? x = 2 : (x = 3, y = 4);
// ещё один способ записи
true ?
  function(){}()
:
  function(){}()

// Более сложные условия
if (/*condition*/) {
  /*true*/

  // вложенное условие
  if (/*condition*/) {
    /*expression*/
  }
} else if (/*condition*/) {
  /*true*/
} else {
  /*false*/
}

// Вложенная тернарная запись
ifTrue ? doThis() : ifThatTrue ? doThat() : doNothing();

// Short-circuit
// выражения false, undefined, null, NaN, 0 и "" являются ложными
// все остальные — правдивыми
var a = b || 42; // присваивается первое правдивое выражение или последнее ложное, если правдивых нет
var a = b && 42; // присваивается первое ложное выражение или последнее правдивое, если ложных нет
// можно строить цепочки из таких условий
var a = b || c || 42;

// Вместо кучи if
switch (x) {
  case 1:
    // действия для случая 1
    break; // прерывает выполнение кода в блоке switch
  case 2:
    // действия для случая 2
    break;
  default: // все остальные случаи
    // действия для остальных случаев
    break;
}

// Если не ставить break, то код будет выполняться дальше, а case игнорироваться
// Так можно легко делать, например, систему уровней персонажа
switch (unit.rank) {
  case "Генерал": unit.items.push("Штаб");
  case "Майор": unit.items.push("Танк");
  case "Капитан": unit.items.push("Автомат");
  case "Лейтенант": unit.items.push("Пистолет");
  case "Сержант": unit.items.push("Штык-нож");
  case "Рядовой": unit.items.push("Портянки");
}


// Арифметические операторы (приоритет выполнения действий сохраняется как в математике)
+ // Можно складывать также и строки (будет просто соединение — конкатенация)
-, *, /
+=, -=, *=, /= /* Непонятно, почему подсвеичивает */
i++  // Сначала читаем строку, потом увеличиваем
++i  // Сначала увеличиваем, потом читаем строку
i--
--i
=    // Присвоение

// Логические операторы
==   // Равенство. В этом случае можно сравнивать переменные разных типов:
// 4 == "4" // => true
// 0 == false // => true
// null == undefined // => true
===  // Жёсткое равенство (сравниваются как значения, так и типы) — этот вариант предпочтительнее
!=
!==
>
<
>=
<=
&&
||


// Циклы
while (a === b) {}

do {} while (a === b); // Выполняется хотя бы раз

for (var i = 0; i < 10; i++) {
  if (a === c) {
    continue; // Возвращение к началу цикла
  }

  if (a === d) {
    break;    // Прерывание цикла
  }
}
// Перебрать все элементы массива
for (let i in array) { console.log(array[i]); }
for (let item of array) { console.log(item); } // более простая запись
// Перебрать все свойства объекта
for (let key in object) { console.log("key: " + key, "value: " + object[key]); }
// Для того, чтобы перебирать все свойства объекта, следует расширить его функционал с помощью итератора и генератора
let obj = {...};
obj[Symbol.iterator] = function*() { // функция-генератор
  let properties = Object.keys(this);
  for(let p of properties) {
    yield this[p];
  }
}
// теперь свойства объекта можно перебрать также как и элементы массива
for (let value of obj) { console.log(value); }

// Решение проблем с потреблением ресурсов
array = [...];
l = array.length; // лучше задавать значения вычислений перед выполнением циклов, поскольку так будет расходоваться меньше памяти (в итоге не придётся выполнять одни и те же расчёты каждую итерацию)
for (var i = 0; i < l; i++) {}
// это же можно записать другим способом
for (var i = 0, l = array.length; i < l; i++) {}
// однако стоит помнить о том, что переменная l будет доступна и вне цикла

// также лучшим решением будет объявить все переменные, используемые в цикле, до него, поскольку, как было замечено ранее (в разделе про переменные), ключевое слово var вынуждает расходовать больший вычислительный ресурс.


// Функции
// Операции над числами
// Сделать числом
  new Number("55");
  parseInt("55");
  +"55"
isNaN("string");     // Проверка, не число ли это
typeof num === "number" && !isNaN(num) // более надёжная проверка
Math.round(200.6);   // Округлить
Math.max(2, 10, 30); // Максимальное число
Math.min(2, 10, 30); // Минимальное число
Math.PI();           // 3.14...
Math.random();       // Случайная величина
Math.sqrt(4);        // Квадратный корень
Math.log();          //
number.toFixed(1)    // Оставить 1 знак после запятой
parseFloat(".04")    // => 0.04
parseInt("42", 10)   // => 42 (в десятичной системе измерения)
// Операции над строками
string.length();              // Длина строки
string.toUpperCase();         // Все буквы — заглавные
string.toLowerCase();         // Все буквы — строчные
string.split(" ");            // Разделить строку пробелами и засунуть результат в массив
string.indexOf("word");       // Позиция сочетания символов "word", встречающегося впервые в строке (если такого нет, то возвращается -1)
string.slice(6, 11);          // Выбрать часть строки (с <начального> по <конечный> символ)
string.substring(start, end); // То же, что и slice
string.substr(start, length); // То же, что и slice, только возвращается <length> символов, начиная с позиции <start>
// Если сравнивать строки, то сравнение будет вестись по первым символам вне зависимости от количества символов (при этом символы верхнего регистра меньше, чем нижнего)

// Работа с объектами JSON
JSON.parse();
JSON.stringify();

// Встроенные функции
alert("Hello, World!");         // всплывающее окно с сообщением
confirm("Have you got a dog?"); // окно с подтверждением. возвращает true или false
prompt("What is your name?");   // окно с полем для ввода. возвращает результат ввода или null

typeof anything // возвращает тип объекта

// Вывод сообщений в консоль
console.log();   // Простое сообщение
console.info();  // Синее
console.warn();  // Жёлтое
console.error(); // Красное
// Время выполнения кода между командами
console.time("Затраченное время");
// какой-то код
console.timeEnd("Затраченное время"); // сообщение должно быть абсолютно таким же


// Выборка элементов DOM-дерева
document.getElementsByTagName("tag");        // Массив найденных по тегу элементов
var element = document.getElementById("id"); // Элемент, найденный по идентификатору
element.getElementsByTagName("tag");         // Массив найденных по тегу элементов внутри выбранного элемента
// Для выбранных элементов существуют следующие свойства
element.nodeType;                            // тип элемента
element.innerHTML;                           // код внутри тега
element.childNodes;                          // массив дочерних элементов
element.getAttribute("attr");                // значение атрибута выбранного элемента
element.setAttribute("attr", "val");         // сменить значение атрибута выбранного элемента

// Создать элемент с текстом
var newElem = document.createElement("tag");       // объект появляется в отрыве от структуры DOM
var myText = document.createTextNode("Some text"); // создать текстовую ноду
element.appendChild(newElem);                      // добавить элемент в качестве ребёнка выбранного элемента
newElemю.appendChild(myText);                      // newElemю.innerHTML = "Some text";
element.insertBefore(newElem, beforeElem)          // вставить как дочерний элемент newElem перед beforeElem
// При этом нужно помнить, что каждое обращение к дереву DOM очень затратно по ресурсам, поэтому лучше всего сначала подготовить всю необходимую для добавления информацию, а затем разом всё добавить.

// События (свойства объектов)
window.onload = function () {}; // действие при загрузке страницы
element.onclick     // действие при клике на объект
element.onmouseover // действие при наведении курсора на объект
element.onfocus     // действие при фокусировке на объекте (поле для ввода)
element.onblur      // действие при снятии фокусировки с объекта (поле для ввода)
element.onchange    // действие при изменении объекта (формы)
element.onkeypress  // действие при нажатии клавиши
element.onkeydown   // действие при нажатии клавиши (но не отпускании)
element.onkeyup     // действие при отпускании клавиши
element.onsubmit    // действие при подтверждении отправки формы
// Также можно добавлять события, которые слушаются объектом, с помощью метода
element.addEventListener('click', someAction, false); // в IE: element.attachEvent('onclick', someAction);
// И, впоследствие, убрать
element.removeEventListener('click', someAction, false);

// Таймеры
var timeoutHandle = setTimeout(someAction, 5000);   // выполнение действия через 5 секунд
var intervalHandle = setInterval(someAction, 5000); // выполнение действия каждые 5 секунд
clearTimeout(timeoutHandle);      // прервать работу timeoutHandle
clearInteterval(intervalHandle);  // прервать работу intervalHandle

// Формы
myTextField.value            // значение
myCheckBox.checked           // стоит ли галочка
mySelect.type                // тип селектора (select-one или select-multiple)
mySelect.selectedIndex       // номер выбранного элемента (для select-one)
mySelect.options[i].selected // выбран ли элемент (для select-omultiplene)

// Работа с CSS
element.style // объект со стилями CSS
  .color
  .backgroundColor  // всё, что через дефис, теперь через camelCase
  ...
element.className   // класс стилей объекта


// Регулярные выражения
var myRE = /str/;      // var myRE = new RegExp("hello");
myRE.test("string");   // содержится ли это выражение в строке?
myRE.search("string"); // позиция выражения, найденного в строке

// Операторы
^       // начало строки
$       // конец строки
+       // >=1
*       // >=0
?       // 0 || 1
|       // ||
.       // любой символ
\w      // буква, цифра или _
\b      //
[crnld] // диапазон символов

// Примеры
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ // правильный e-mail


// Обработка ошибок в коде
try {
  // проверяемый код

  if (/* Специфический случай */) {
    throw new Error("Специфическая ошибка");
  }
} catch (error) {
  // Варианты ошибок
  if (error instanceof TypeError) {}
  if (error instanceof ReferenceError) {}
} finally {
  // код, который выполняется после выполнения проверяемого кода (вне зависимости от того, выполнялся ли блок catch)
}

// Инструменты
// https://c9.io/
// [Profiler](https://developer.mozilla.org/ru/docs/Tools/Profiler) — отслеживание времени выполнения кода

// Полезные фишки для сайтов
// http://scrollmagic.io/
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
// https://greensock.com/tweenmax

// Крутые JS-программисты-преподаватели
- [Wes Bos](https://github.com/wesbos)
- [Ray Villalobos](https://github.com/planetoftheweb)
- [Maximilian Schwarzmueller](https://mschwarzmueller.com/)

// Источники
// [ ] [Дэвид Флэнаган — JavaScript. Подробное руководство](http://kharchuk.ru/JavaScript.pdf)
// [x] https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html
// [x] https://www.codeschool.com/courses/javascript-road-trip-part-1
// [x] https://www.codeschool.com/courses/javascript-road-trip-part-2
// [ ] https://www.codeschool.com/courses/javascript-road-trip-part-3
// [ ] http://eloquentjavascript.net/ (Marijn Haverbeke - Elequent JavaScript: A Modern Introduction to Programming)
// [ ] https://addyosmani.com/resources/essentialjsdesignpatterns/book/
// [ ] http://crockford.com/javascript/javascript (Douglas Crockford - JavaScript: The Good Parts)
// [ ] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// [ ] https://developers.google.com/chrome-developer-tools
// [ ] https://developers.google.com/web/tools/chrome-devtools/console/console-reference
// [ ] Apple: Developer Tools for Safari Overview
// [ ] https://getfirebug.com/wiki/index.php/Main_Page
// [ ] http://quirksmode.org/
// [ ] https://devchat.tv/js-jabber
// [ ] https://plnkr.co/
// [ ] https://jsfiddle.net/
// [ ] http://cssdeck.com/labs
// [ ] http://dailyjs.com/
// [ ] http://www.w3schools.com/xml/ajax_intro.asp
// [ ] [jQuery](jQuery.js)
// [ ] [ToDoMVC](http://todomvc.com) — поможет определиться с фреймворками

// Препроцессоры
// http://www.typescriptlang.org/
// http://babeljs.io/ — компилятор кода на ES2015 в старый JS (для поддержки разных платформ)
// http://coffeescript.org/
// [FlowType](https://flow.org/) - для типизации

// Библиотеки
// [CDN популярных библиотек](https://developers.google.com/discovery/libraries)
// [LaTeX на сайте](https://www.mathjax.org/)
// Modernizr — Кроссбаузерные фичи