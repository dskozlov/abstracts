// JavaScript


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


// Конкатенация
"Hello, " + "World!"
"Hello, " + 42
// => "Hello, 42"
"\t"  // таб
"\""  // Экранирование кавычки
"\\"  // \
"\n"  // перенос строки


// Встроенные функции
alert("Hello, World!");         // всплывающее окно с сообщением
confirm("Have you got a dog?"); // окно с подтверждением. возвращает true или false
prompt("What is your name?");   // окно с полем для ввода. возвращает результат ввода или null

typeof anything // возвращает тип объекта

// Переменные (должны не начинаться с цифр) могут быть любого типа
var currentYear1992_$,
  someOther = 1000,
  x = "String",
  boolean = true;
// var также МОЖНО не ставить

// Длинные строки можно записывать следующим образом:
"Надо мной в лазури ясной\n" +
"Светит звездочка одна,\n" +
"Справа - запад темно-красный,\n" +
"Слева - бледная луна."

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

// Массив (в javascript они все динамические)
var array = [];
var array = new Array(); // Аналогичная запись (массивы - это объекты)

array[0] = 50;
array[1] = 'String';
array[0] = undefined; // опустошение ячейки массива
var array = [50, 'String']; // Сокращённая запись
var array = new Array(50, 'String'); // Альтернативная запись
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
array.join();       // Запись всех элементов массива в строку
array.sort();       // Сортировка массива
array.splice(2, 4)  // Возвращает 4 элемента массива, начиная со второго
array.map(function(param) { return param * 2; }); // применение функции к каждому элементу массива (как для параметра функции param)

// Даты
var today = new Date();                  // текущие дата и время
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

// Свойства можно удалить
delete player.name; // возвращает true, если свойства больше нет

// Создание метода для объекта
player.someMethod = function () {
  // операции со свойствами
};
// Вызов метода объекта
player.someMethod();

// Перебрать все свойства объекта
for (key in player) {
  console.log("key: " + key, "value: " + player[key]);
}


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

// Арифметические операторы (приоритет выполнения действий сохраняется как в математике)
+ // Можно складывать также и строки (будет просто соединение)
-, *, /
+=, -=, *=, /= /* Непонятно, почему подсвеичивает */
i++  // Сначала читаем строку, потом увеличиваем
++i  // Сначала увеличиваем, потом читаем строку
i--
--i
=    // Присвоение
==   // Равенство (в этом случае можно сравнивать переменные разных типов: 4 == "4" // => true)
===  // Жёсткое равенство (тут такой трюк не прокатит уже) — этот вариант предпочтительнее
// Операторы сравнения
==
!=
===
!==
>
<
>=
<=
&&
||

// Вывод сообщений в консоль
console.log();    // Простое сообщение
console.debug();  //
console.info();   // Синее
console.warn();   // Жёлтое
console.error();  // Красное

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


  // Функции
// Операции над числами
// Сделать числом
  Number("55");
  parseInt("55");
  +"55"
isNaN("abs");        // Проверка, не число ли это
Math.round(200.6);   // Округлить
Math.max(2, 10, 30); // Максимальное число
Math.min(2, 10, 30); // Минимальное число
Math.PI();           // 3.14...
Math.random();       // Случайная величина
Math.sqrt(4);        // Квадратный корень
Math.log();          //
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


// Инструменты
// https://c9.io/

// Полезные фишки для сайтов
// http://scrollmagic.io/
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
// https://greensock.com/tweenmax

// Источники
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
// http://babeljs.io/
// http://coffeescript.org/

// Библиотеки
// [CDN популярных библиотек](https://developers.google.com/discovery/libraries)
// Modernizr — Кроссбаузерные фичи