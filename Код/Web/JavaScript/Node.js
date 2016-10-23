// Node.js


// Модули
// Определение (в файле './module.js')
exports.someText = "hello";

// Подключение (в другом файле — например, в './text.js')
var myModule = require('./module.js');
console.log("text from module: ", myModule.myText);

// Тогда программа срабатывает вызовом через командную строку
node text.js

// Программы большинства модулей (таких как gulp) вызываются из консоли командой с названием модуля
gulp

// В файле packages.json прописываются все зависимости модулей, установленных через npm
// Создать этот файл проще всего следующим образом
npm init


// Работа с файлами
var fs = require('fs'); // file system

fs.readFile("./data.json", "utf-8 ", function(err, data) {
  console.log(data);

  // Для того, чтобы содержимое JSON-файла превратить в объект, делаем
  data = JSON.parse(data);
});
// То же самое можно сделать более простым способом:
var data = require("./data.json");

// Запись в файл
fs.writeFile("new_file.json", "some info")
// Или, другим способом (объект в JSON-файл)
fs.writeFile("new_file.json", JSON.stringify({prop: "val"}));

// Чтение папки
fs.readdir("path/to/dir", function(err, data) {
  console.log(data)
});
