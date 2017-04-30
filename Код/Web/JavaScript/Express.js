// Express.js


// Express.js — это фреймворк на Node.js для построения серверной части web-приложения.
// Установка
$ npm install express


// Запуск простейшего сервера
var express = require('express');
var app = express();

// GET-запрос
app.get('/', function(request, response){ // страница (Route), поведение которой задаётся далее
  response.send('Hello world'); // тот же эффект даёт response.write('Hello world'); response.end();

  // response.redirect(301, '/anotherPage'); // перенаправление на другую страницу (статус может быть другим, например, 302)
});

// Определяем порт, на котором слушается сервер
app.listen(8080, function(){
  console.log('Сервер доступен по адресу http://localhost:8080');
});
// Готово

$ curl -i http://localhost:8080 # опция -i выводит заголовки ответа от сервера


// Регистратор (Logger) действий на сервере
// https://github.com/expressjs/morgan
// создадим файл logger.js
module.exports = function(request, response, next) {
  var start = +new Date();
  var stream = process.stdout; // вывод данных
  // данные запроса
  var url = request.url;
  var method = request.method;

  // следим за ответом
  response.on('finish', function(){
    var duration = +new Date() - start;
    var message = 'Запрос ' + method + ' по адресу ' + url +
                  '\n занял ' + duration + ' мс\n\n';

    stream.write(message);
  });

  next();
}
// теперь можно воспользоваться регистратором в основном приложении
var logger = require('./logger');
app.use(logger);


// Routes и AJAX
// Создадим первичный запрос, который вернёт основной HTML-файл
app.get('/', function(request, response){
  // отправляем статический файл
  response.sendFile(__dirname + '/public/index.html'); // __dirname — текущая папка
});
// альтернативный вариант
app.use(express.static('public'));

// После этого отправим AJAX-запрос на сервер
$.get('/list', function(list){});

// Обработка запроса на сервере
app.get('/list', function(request, response){
  var list = ["one", "two", "three"];
  // можно также добавить обработку параметров с помощью request.query
  if (request.query.limit >= 0) {
    response.json(list.slice(0, request.query.limit));
  } else {
    response.json(list);
  }
});
$ curl http://localhost:8080/list?limit=1 # => ["one"]

// динамический путь
app.get('/users/:name', function(request, response){
  var users = {
    'iGor': 'Это iGor',
    'Alyona': 'Это Alyona'
  };
  var decription = users[request.params.name];
  if (!decription) {
    response
      .status(404) // меняем статус ответа
      .json('Нет описания для ' + request.params.name);
  } else {
    response.json(decription);
  }
});
$ curl http://localhost:8080/users/iGor # => 'Это iGor'
// также можно создать функцию, которую можно использовать в разных запросах
app.param('name', function(request, response, next) {
  var name = request.params.name;
  var user = name.toLowerCase();
  request.userName = user; // свойство доступно для других путей приложения
  next(); // функция должна быть вызвана для продолжения запроса
});
// теперь можно обращаться к новому свойству
app.get('/users/:name', function(request, response){
  var decription = users[request.userName];
});


// POST-запрос
// Отправляем запрос от клиента
$('form').on('submit', function(){
  var data = $(this).serialize(); // преобразует данные формы в URL-кодированную строку
  $.ajax({
    type: 'POST',
    url: '/users',
    data: data
  }).done(function(data) {
    form.trigger('reset'); // очищает поля формы
  });
});
// принимает запрос на сервере
var bodyParser = require('body-parser'); // $ npm i body-parser
var parseUrlencoded = bodyParser.urlencoded({ extended: false}); // парсим данные формы
app.post('/users', parseUrlencoded, function(request, response) {
  var newUser = request.body;
  users[newUser.name] = newUser.description;
  response // отвечаем
    .status(201)
    .json(newUser.name);
});


// DELETE-запрос
// отправляем от клиента запрос
$.ajax({ type: 'DELETE', url: '/users/iGor' });
// и обрабатываем его на сервере
app.delete('/users/:name', function(request, response) {
  delete users[request.blockName];
  response.sendStatus(200);
});


// Упрощённое обращение к путям
app.route('/users')
   .get(function(){
    // ...
   })
   .post(parseUrlencoded, function(){
    // ...
   });
// ещё лучше хранить все обращения по конкретному пути в отдельном файле
var users = require('./routes/users');
app.use('/users', users);
// теперь запросы хранятся в ./routes/users.js
var express = require('express');
var router = express.Router();

router.route('/')
  .get();
router.route('/:name')
  .all(function (request, response, next) {
    // то же, что и app.param()
  })
  .get(); // сначала будет обрабатываться all, а затем любой другой запрос

module.exports = router;