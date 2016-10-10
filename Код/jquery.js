// jQuery


// Селекторы (как в CSS), например
$("tag")
$("#id")
$(".class")
$("div > p")	// непосредственные дочерние элементы
$("div p")		// дочерние элементы
$("div + p")	// следующий непосредственно за...
$("div ~ p")	// следующие за...

// Фильтры (применяются после селекторов)
:first, :last
:even, :odd
:gt(), :lt(), :eq()	// больше, меньше или равно числу в скобках
:animated			// в процессе анимации
:focus				// элемент, который в фокусе в данный момент
:not(selector)		// всё, что не попадает под выборку
$("p[class]")		// содержит атрибут "class"
$("p[id=cat]")		// содержит атрибут "id" со значением "cat"
$("p[id^=cat]")		// содержит атрибут "id" со значением, начинающимся с "cat"
$("p[id^=cat][lang*=en]")	// содержит атрибут "id" со значением, начинающимся с "cat", и атрибут "lang", со значением, содержащим "en"
$("p:contains('lorem')")	// содержит в себе строку 'lorem'
$("p:parent")	// родитель элемента
$("div:has(p[class=a])")	// элемент, который содержит элементы, выбранные по запросу "p[class=a]"
$("div p:first-child")	// первый дочерний элемент заданного типа
$("div p:last-of-type")	// последний дочерний элемент заданного типа
$("div p:nth-child(3)")	// третий дочерний элемент заданного типа
$("div p:nth-child(2n)")	// каждый второй дочерний элемент заданного типа


// загрузка через AJAX
.load("path/to/file.xml");
$.getJSON("data.json", function(data) {
	console.log(data);
});

.append();	// добавить в конец
.prepend();	// добавить в начало
.keyup();	// действие при отпускании клавиши на клавиатуре
.search("ABC");	// поиск "АВС" в выбранном тексте


// Источники