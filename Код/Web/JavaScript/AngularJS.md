# AngularJS

Нужно знать:
- HTML
- CSS
- JavaScript

Angular помогает грамотно организовать js-код и создать отзывчивый веб-сайт (ощущается как обычное приложение).
Управление сайтом ведётся через описанные в HTML директивы (атрибуты типа `ng-...`), которые вызывают работу контроллеров, описанных в js-коде.

Части приложения на Angular описываются в так называемых модулях, что делает код читабельным, а также более пригодным к поддержке и тестированию.
Кроме того, модули могут использовать функционал друг от друга.

Основной функционал прописывается в файле `app.js`:
```js
// Оборачивать код в замыкание — хорошая привычка
(function () {
  // Создание модуля
  var app = angular.module('appName', ['dep-module-1', 'dep-module-2'...]); // при необходимости в квадратных скобках указываются зависимости (модули, в которых описан необходимый функционал: контроллеры, директивы...), которые находятся в другом замыкании (например, в другом файле)

  // Создание контроллера
  app.controller('controllerName', function(){
    // Создаём в качестве свойства контроллера объект, к которому можно будет получить доступ в HTML
    this.user = {
      name: "iGor",
      surname: "Polyakov",
      avatar: "ip.jpg"
      isPhystech: true,
      skills: [
        {
          name: "Angular",
          mark: 4
        },
        {
          name: "Git",
          mark: 5
        }
      ]
    };

    // Аналогичным образом может быть задан функционал контроллера
    this.funcName = function(arg) {
      return arg;
    };
  });
})();
```

После чего нужно подключить модуль в теге `html`:
```html
<html ng-app="appName">
  <!-- Содержимое воспринимается как часть приложения, написанного на Angular. -->
  <!-- Поэтому в этом месте имеют смысл выражения, записанные в двойных фигурных скобках. -->
  <!-- Например: -->
  {{ 4 + 6 }}                 <!-- => 10 -->
  {{ "Hello, " + "World!" }}  <!-- => Hello, World! -->
  <!-- Можно задавать переменные, которые действуют внутри соответствующего элемента: -->
  <div ng-init="variable = 'Hi!'">
    {{ variable }}            <!-- => Hi! -->
  </div>

  <!-- Воспользуемся теперь созданным контроллером -->
  <body ng-controller="controllerName as aliasName">  <!-- таким образом можно воспользоваться любым удобным именем переменной -->
    <!-- Доступ к этой переменной сохраняется только внутри этого тега. -->
    <h1>
      {{ aliasName.user.name + aliasName.user.surname }}
      <!-- Показать элемент, если выражение соответствует истине -->
      <span ng-show="aliasName.user.isPhystech">, MIPT</span> <!-- для отрицания можно использовать символ ! в выражении, либо использовать директиву ng-hide -->
    </h1>

    <!-- Для отображения изображений воспользуемся соответствующей директивой -->
    <img ng-src="{{ aliasName.user.avatar }}">

    <!-- Для отображения элементов массива можно обращаться к ним непосредственно: -->
    {{ aliasName.user.skills[0] }}
    <!-- Но гораздо удобнее пользоваться соответствующей директивой: -->
    <ul ng-repeat="skill in aliasName.user.skills">
      <li>{{ skill.name }}: {{ skill.mark }}</li>
    </ul>

    <!-- Выражения можно фильтровать, задавая формат фильтра через | -->
    {{ data* | filter:options* }}
    <!-- Вот некоторые примеры фильтров: -->
    {{ 2 | currency }}  <!-- => $2.00 -->
    {{ 1388123412323 | date:'dd.MM.yyyy h:mm' }}  <!-- => 27.12.2013 12:50 -->
    <!-- Другие фильтры: -->
    uppercase     <!-- все заглавные -->
    lowercase     <!-- все строчные -->
    limitTo:8     <!-- отобразить только первые 8 символов (или элементов массива) -->
    orderBy:'value'   <!-- сортировка по значению -->


    <!-- Директивы -->
    <div ng-click="action"></div> <!-- действие по щелчку по объекту -->
    <div ng-class="{ className:condition }"></div> <!-- добавление класса при определённом условии -->
    <!-- Работа с формами -->
    <form name="formName" ng-controller="ctrl as c" novalidate ng-submit="formName.$valid && c.myFunc()"> <!-- отменяем стандартную валидацию; при отправке формы (если она прошла валидацию) происходит действие, соответствующее функции myFunc, объявленной в теле контроллера -->
      <input ng-model="variable"> <!-- при изменении полей формы меняется и переменная -->

      <input required> <!-- так помечаются обязательные поля -->
      <!-- при этом полю присваиваются классы соответственно (их можно настроить в CSS) -->
      .ng-pristine.ng-invalid <!-- до печатания, невалидное поле -->
      .ng-dirty.ng-invalid <!-- после печатания, невалидное поле -->
      .ng-dirty.ng-valid <!-- после печатания, валидное поле -->
      <div>Форма прошла валидацию: {{formName.$valid}}</div>
      <!-- Встроенные поля с валидацией -->
      <input type="email">
      <input type="url">
      <input type="number"> <!-- дополнительные атрибуты: min=1 max=10 -->
    </form>

    <!-- Подгрузка куска HTML-кода из файла -->
    <div ng-include="'included.html'"></div>
    <!-- то же самое можно сделать, создав директиву -->
  </body>
</html>
```

### Создание собственных директив
```js
app.directive("directiveName", function() {
  return {
    restrict: 'E', // создаётся HTML-элемент (тег) directive-name; или атрибут (если указать A) с тем же именем
    templateUrl: 'included.html',
    controller: function(){...}, // можно также описать здесь контроллер, чтобы упростить HTML код; либо описать его в другом месте, а здесь просто сослаться на него
    controllerAs: 'aliasName' // также нужно указать имя переменной, используемой в файле 'included.html'
  };
});
```


## Сервисы
Расширить функциональность AngularJS позволяют так называемые сервисы.
```js
// Разберём принцип работы с сервисами на примере сервиса $http (асинхронный запрос к серверу)
$http({ method: "GET", url: '/data.json' }); // $http.get('/data.json', { apiKey: 'myApiKey' });
  // этот запрос возвращает объект Promise (см. функционал jQuery) c .success() и .error()
  // в результате данные будут преобразованы в объекты и массивы js

// для того, чтобы воспользоваться сервисом в контроллере, нужно инъектировать зависимость с помощью массива:
app.controller('ctrl', [ '$http', function($http){...} ]);
app.controller('ctrl', [ '$http', '$log', function($http, $log){...} ]);

// Итак
app.controller('ctrl', [ '$http', function($http){
  var objName = this;
  objName.data = []; // так как скрипт начнёт работать до загрузки страницы, нужно передать свойству хотя бы пустой массив
  $http.get('/data.json').success(function(data){
    objName.data = data;
  });

  // основные методы
  $http.get // получить данные
  $http.post // создать данные
  $http.put // обновить данные
  $http.delete // удалить данные
}]);
```


## Разбиение проекты на страницы
```html
<div ng-view></div> <!-- здесь меняется контент от страницы к странице -->
```

```js
// Для удобства каждый контроллер описывается в своём модуле
// подключаем этот модуль, чтобы была возможность работать со страницами
angular.module('moduleName', ['ngRoute']).config(function($routeProvider){
  // добавляется страница по ссылке
  $routeProvider.when('/notes', {
    templateUrl: '/path/to/pages/notes/index.html'
  })
  .when('/edit', {
    templateUrl: '/path/to/pages/edit/index.html'
  })
  .otherwise({ redirectTo: '/' }); // что делать, если ничего из перечисленного не подошло
});
```


## Источники
- [ ] https://docs.angularjs.org/api
- [ ] https://www.codeschool.com/courses/shaping-up-with-angular-js
- [ ] https://www.codeschool.com/courses/staying-sharp-with-angular-js
- [ ] https://habrahabr.ru/post/149060/
- https://egghead.io/technologies/angularjs
- https://thinkster.io/topics/angular

### Angular 2
- [ ] https://angular.io/docs/ts/latest/tutorial/
- [ ] https://www.codeschool.com/courses/accelerating-through-angular-2
- https://egghead.io/technologies/angular2