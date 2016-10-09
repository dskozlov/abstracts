// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// http://crockford.com/javascript/javascript
// Язык чувствителен к регистру
// Точку с запятой МОЖНО не ставить, но крайне желательно

// Как американцы различают скобки:
// (parentheses)
// [brackets]
// {braces}

alert("Hello, World!");	// всплывающее окно с сообщением

// Переменные (должны не начинаться с цифр) могут быть любого типа
var currentYear1992_$,
	someOther = 1000,
	x = "String",
	boolean = true;
// var также МОЖНО не ставить

// Массив (в javascript они все динамические)
var array = [];
// var array = new Array();	// Аналогичная запись (массивы - это объекты)
array[0] = 50;
array[1] = 'String';
var array = [50, 'String'];	// Сокращённая запись

// Метод — это функция, которая принадлежит объекту
// Методы массивов
array.length();		// Размер массива
array.reverse();	// Обратный порядок
array.join();		// Запись всех элементов массива в строку
array.sort();		// Сортировка массива

// Даты
var today = new Date();						// текущие дата и время
var y2k = new Date(2000, 0, 1);				// год, месяц[индекс], день
var y2k = new Date(2000, 0, 1, 0, 0, 0);	// год, месяц[индекс], день, часы, минуты, секунды
// Поскольку даты — это объекты, то они не поддаются сравнению
// Методы дат
today.getMonth();		// значение из [0, 11]
today.getFullYear();	// YYYY
today.getYear();		// лучше не использовать
today.getDate();		// значение из [1, 31]
today.getDay();			// значение из [0, 6]. 0 — воскресенье
today.getHours();		// значение из [0, 23]
today.getTime();		// количество миллисекунда с 1 января 1970 года
// Также можно задать соответствующие значения с помощью методов
today.setFullYear();
today.setYear();
today.setDate();
today.setDay();
today.setHours();
today.setTime();

// Объекты
// var player = new Object();
var player = {};
// Свойства объекта
player.name = "Fred";
player.score = 10000;
player.rank = 1;
// Сокращённая запись
var player1 = {
	name: "Fred",
	score: 10000,
	rank: 1
};
// Создание метода для объекта
player1.someMethod = function () {
	// операции со свойствами
};
// Вызов метода объекта
player1.someMethod();

// Условный оператор
if (/*condition*/) {/*true*/} else {/*false*/}
// Альтернативная запись (Тернарная условная операция)
/*condition*/ ? /*true*/ : /*false*/;

// Арифметические операторы (приоритет выполнения действий сохраняется как в математике)
+ // Можно складывать также и строки (будет просто соединение)
-, *, /
+=, -=, *=, /= /* Непонятно, почему подсвеичивает */
i++ // Сначала читаем строку, потом увеличиваем
++i // Сначала увеличиваем, потом читаем строку
i--
--i
= // Присвоение
== // Равенство (в этом случае можно сравнивать переменные разных типов)
=== // Жёствкое равенство (тут такой трюк не прокатит уже) — этот вариант предпочтительнее
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
console.log();		// Простое сообщение
console.debug();	//
console.info();		// Синее
console.warn();		// Жёлтое
console.error();	// Красное

// Циклы
while (a===b) {}
do {} while (a===b); // Выполняется хотя бы раз
for (var i = 0; i < 10; i++) {

	if (a===c) {
		continue;	// Возвращение к началу цикла
	}

	if (a===d) {
		break;		// Прерывание цикла
	}
}

// Функции (не важно, где их вызывать (поскольку перед компиляцией код просматривается браузером 1 раз на наличие функций), но крайне желательно делать это перед их объявлением)
function functionName(argument) {
	// body...
}

	// Функции
// Операции над числами
Number("55");			// Сделать числом
isNaN("abs");			// Проверка, не число ли это
Math.round(200.6);		// Округлить
Math.max(2, 10, 30);	// Максимальное число
Math.min(2, 10, 30);	// Минимальное число
Math.PI();				// 3.14...
Math.random();			// Случайная величина
Math.sqrt(4);			// Квадратный корень
Math.log();				//
// Операции над строками
string.length();		// Длина строки
string.toUpperCase();	// Все буквы — заглавные
string.toLowerCase();	// Все буквы — строчные
string.split(" ");		// Разделить строку пробелами и засунуть результат в массив
string.indexOf("word");	// Позиция сочетания символов "word", встречающегося впервые в строке (если такого нет, то возвращается -1)
string.slice(6, 11);			// Выбрать часть строки (с <начального> по <конечный> символ)
string.substring(start, end);	// То же, что и slice
string.substr(start, length);	// То же, что и slice, только возвращается <length> символов, начиная с позиции <start>
// Если сравнивать строки, то сравнение будет вестись по первым символам вне зависимости от количества символов (при этом символы верхнего регистра меньше, чем нижнего)


// Выборка элементов DOM-дерева
document.getElementsByTagName("tag");			// Массив найденных по тегу элементов
var element = document.getElementById("id");	// Элемент, найденный по идентификатору
element.getElementsByTagName("tag");			// Массив найденных по тегу элементов внутри выбранного элемента
// Для выбранных элементов существуют следующие свойства
element.nodeType;						// тип элемента
element.innerHTML;						// код внутри тега
element.childNodes;						// массив дочерних элементов
element.getAttribute("attr");			// значение атрибута выбранного элемента
element.setAttribute("attr", "val");	// сменить значение атрибута выбранного элемента

// Создать элемент с текстом
var newElem = document.createElement("tag");		// объект появляется в отрыве от структуры DOM
var myText = document.createTextNode("Some text");	// создать текстовую ноду
element.appendChild(newElem);						// добавить элемент в качестве ребёнка выбранного элемента
newElemю.appendChild(myText);						// newElemю.innerHTML = "Some text";
element.insertBefore(newElem, beforeElem)			// вставить как дочерний элемент newElem перед beforeElem

// События (свойства объектов)
window.onload = function () {};	// действие при загрузке страницы
element.onclick		// действие при клике на объект
element.onmouseover	// действие при наведении курсора на объект
element.onfocus		// действие при фокусировке на объекте (поле для ввода)
element.onblur		// действие при снятии фокусировки с объекта (поле для ввода)
// Также можно добавлять события, которые слушаются объектом, с помощью метода
element.addEventListener('click', someAction, false);	// в IE: element.attachEvent('onclick', someAction);
// И, впоследствие, убрать
element.removeEventListener('click', someAction, false);

// Таймеры
var timeoutHandle = setTimeout(someAction, 5000);	// выполнение действия через 5 секунд
var intervalHandle = setInterval(someAction, 5000);	// выполнение действия каждые 5 секунд
clearTimeout(timeoutHandle);		// прервать работу timeoutHandle
clearInteterval(intervalHandle);	// прервать работу intervalHandle