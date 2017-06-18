// Node.js


// Node.js позволяет управлять серверной частью сайта при помощь языка JavaScript (V8).
// Введя в терминале команду
node
// появляется интерпритатор языка JS (можно выполнять все стандартные команды этого языка).
// Node.js — быстрая платформа, поскольку написана на C.
// Кроме того, Node.js позволяет исполнять строки кода программы, не дожидаясь окончания выполнения остальных (не блокирующийся (non-blocking) код).

console.log(1);
console.log(2);
console.log(3);

// В случае, когда важна последовательность действий, используются колбеки.

console.log(1);
setTimeout(function(){ // функция-колбек, которая вызывается после выполнения setTimeout()
  console.log(2); // выполнется через 2 секунды
}, 2000);
console.log(3);

// Программу, записанную в файле можно запустить через терминал
node text.js


// Модули (согласно спецификации CommonJS)
// Определение (в файле './module.js')
exports = "hello"; // экспортируется только одна сущность
exports.someText = "hello"; // свойство экспортируемого объекта

// Подключение (в другом файле — например, в './text.js')
var myModule = require('./module');
var myModule = require('module_name'); // подключается модуль из папки "node_modules"; если не находит в этой папке, то ищет в папке "node_modules" на уровень выше (однако нельзя запрашивать модули, установленные глобально)
console.log("text from module: ", myModule.someText);

// устанавливать дополнительные модули можно с помощью npm (node package manager)
npm install
  coffee-script // установить модуль локально
  coffee-script -g // установить модуль глобально
  coffee-script@1.0.0 // установить конкретную версию модуля
npm i coffee-script

// многие модули могут быть вызваны командой в терминале, например
gulp

// В файле packages.json прописываются все зависимости модулей, установленных через npm
// Создать этот файл проще всего следующим образом
npm init

// когда существует файл packages.json с указанными зависимостями, можно установить все эти зависимости при помощи команды
npm install


// Работа с файлами
var fs = require('fs'); // file system

// чтение файла
fs.readFile("./data.json", "utf-8 ", function(err, data) {
  console.log(data);
  data = JSON.parse(data); // JSON -> JS Object
});
// То же самое можно сделать и более простым способом:
var data = require("./data.json");

// Запись в файл
fs.writeFile("new_file.json", "some info")
// Или, другим способом (объект в JSON-файл)
fs.writeFile("new_file.json", JSON.stringify({prop: "val"}));

// Чтение папки
fs.readdir("path/to/dir", function(err, data) {
  console.log(data)
});


// Создание HTTP-сервера
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);         // статус ответа сервера
  response.write("Hello, World!"); // тело ответа
  response.end();                  // окончание соединения
}).listen(8080); // порт, который слушается
console.log('Загляни на http://localhost:8080');


// События
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('error', function(msg){ // обработка событий
  console.log('Ошибка! ' + msg);
});

logger.emit('error', 'Недостаточно средств на счёте.'); // вызов события
logger.emit('error', 'Что-то сломалось.'); // вызов другого события


// Потоки
http.createServer(function(request, response){
  response.writeHead(200);
  request.pipe(response);
}).listen(8080);
// теперь можно передавать информацию на сервер через терминал
curl -d 'hello' http://localhost:8080

// Если нужно прочитать информацию из одного файла и записать в другой, то можно воспользоваться пайпом
var file_1 = fs.createReadStream("readme.md");
    file_2 = fs.createWriteStream("writeme.md");
file_1.pipe(file_2);

// запись в файл через поток
http.createServer(function(request, response){
  var newFile = fs.createWriteStream("writeme.md");
  request.pipe(newFile);

  request.on('end', function(){
    response.end('file uploaded!');
  });
}).listen(8080);
// передаём файл
curl --upload-file readme.md http://localhost:8080

// для мониторинга загрузки можно сделать progress bar с помощью такого кода
http.createServer(function(request, response){
  var newFile = fs.createWriteStream("writeme.md");
  var fileBytes = request.headers['content-length'];
  var uploadedBytes = 0;

  request.pipe(newFile);

  request.on('data', function(chunk){
    uploadedBytes += chunk.lenght;
    var progress = (uploadedBytes / fileBytes) * 100
    response.write('progress: ' + parseInt(progress, 10) + '%\n');
  });
}).listen(8080);


// Express Framework
$ npm install express

// Запуск сервера
var express = require('express');
var app = express.createServer();

app.get('/', function(request, response){
  response.sendfile(__dirname + '/index.html'); // __dirname — текущая папка
});

app.listen(8080);

// Routes
var request = require('request');
var url = require('url');

app.get('/tweets/:username', function(req, response){
  var username = req.params.username // считываем информацию из запроса

  options = {
    protocol: 'http',
    host: 'api.twitter.com',
    pathname: '/1/statuses/user_timeline.json',
    query: {
      screen_name: username,
      count: 10
    }
  }

  // Запрос информации с другого сайта
  var twitterUrl = url.format(options);
  request(twitterUrl).pipe(response);

  // Использование HTML-шаблонов
  request(url, function(err, res, body){
    var tweets = JSON.parse(body);
    response.render('template.ejs', { // шаблон
      // переменные шаблона
      tweets: tweets,
      name: username
    });
  });
});

// файл template.ejs — это HTML с JS-вставками
<h1>Твиты пользователя @<%= name%></h1>
<ul>
  <% tweets.forEach(function(tweet){ %>
    <li><% }); %></li>
  <% }); %>
</ul>

/// Кроме этого должен быть главный шаблон layout.ejs, в который подключается тот шаблон, который рендерится
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <%- body %>
</body>
</html>

// обращение по адресу
$ curl -s //localhost:8080/twitter/anyUser


// socket.io
// для одновременной передачи информации от сервера к клиенту и обратно используются сокеты (с их помощью можно писать такие приложения как месседжеры)
$ npm install socket.io

// установим соединение сервера
var socket = require('socket.io');
var app = express.createServer();
var io = socket.listen(app);
var messages = []; // массив сообщений

io.sockets.on('connection', function(client){
  console.log('Соединение с сервером установлено.')

  // отправляем сообщение клиенту
  client.emit('messages', {
    hello: 'world'
  });

  // задаём имя пользователя
  client.on('join', function(name){
    client.set('nickname', name);

    // выводим все сообщения при подключении
    messages.forEach(function(message){
      client.emit('messages', message.name + ': ' + message.message);
    });
  });

  // принимаем сообщение от клиента
  client.on('messages', function(message){
    // отправка сообщения в месседжер с указанием имени отправителя
    client.get('nickname', function(err, name){
      messages.push({ // запоминаем все отправленные сообщения
        name: name,
        message: message
      })

      client.broadcast.emit('chat', name + ': ' + message); // передача отправленного сообщения всем подключенным клиентам
    });
  });
});

// теперь установим соединение клиента (браузера), прописав скрипт
<script src"/socket.io/socket.io.js"></script>
<script>
  var server = io.connect('http://localhost:8080');

  // принимаем сообщение от сервера
  server.on('messages', function(data){
    console.log(data);
  });

  // отправляем сообщение на сервер
  socket.emit('messages', 'привет)');

  // принимаем сообщение от сервера
  server.on('connect', function(data){
    nickname = prompt('Как тебя зовут?'); // спрашиваем имя у нового пользователя

    server.emit('join', nickname); // отправляем имя пользователя на сервер
  });
</script>

// Для хранения информации лучше пользоваться базами данных


// Базы данных (неблокирующиеся)
MongoDB
CouchDB
PostgreSQL
Memcached
Riak
redis — https://redis.io/

// Полезные модули
// организация бекенда
  express // http://expressjs.com/
  sails // http://sailsjs.com/ — улучшенный Express
  koa // http://koajs.com/ - наиболее современный фреймворк для организации бекенда
// сборщики кода (программы для создания фреймворков)
  gulp
  grunt
  webpack
nodemon // https://github.com/remy/nodemon — авто обновление сервера при изменениях кода
jake // позволяет создавать терминальные команды, выполняющие код node.js
bluebird // упрощает работу с промисами

// Источники
// https://nodejs.org/api/ — официальная документация
// https://www.codeschool.com/courses/real-time-web-with-node-js
// https://nodeschool.io/