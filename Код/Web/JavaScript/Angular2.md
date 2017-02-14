# Angular 2


Нужно знать:
- [HTML](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/HTML/HTML.html)
- [CSS](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/CSS/CSS.css)
- [JavaScript](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/JavaScript/JavaScript.js)

Для того, чтобы овладеть фреймворком Angular 2 нет необходимости в том, чтобы знать ещё и [первый Angular](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/JavaScript/AngularJS.md).
Вторая версия быстрее и проще в использовании.


## Директивы

В Angular директивы позволяют в HTML задавать динамическое поведение.
Директивы бывают нескольких видов:
- Компонентная (содержит шаблон отображения данных)
- Структурная (определяет содержание шаблонов)
- Аттрибутная

### Компоненты

Создаём произвольный тег HTML.
```html
<my-app>Загрузка приложения...</my-app>
```
Текст внутри тега будет замещён содержимым компоненты.

Создадим компоненту (основной строительный элемент приложения на Angular 2, по сути информационный блок на веб-странице) для приложения в TypeScript-файле `app/main.ts`.
```ts
// Подключаем две библиотеки-модуля
import { bootstrap } from '@angular/platform-browser-dynamic'; // функция bootstrap используется для отображения приложения (ничего общего с Twitter Bootstrap)
import { Component } from '@angular/core'; // функция для создания компоненты

// Метаданные или декоратор (класс, расширяющий функциональность другого класса без использования наследования) объявляется непосредственно перед классом; таким образом обычный класс JavaScript становится компонентой
@Component({
  selector: 'my-app', // CSS-селектор (произвольный тег) того элемента, в который записываем контент
  template: '<h1 class="title">{{ title }}</h1>' // шаблон контента со свойством из класса
  // если нужен шаблон в несколько строчек, то используются штришки ``
  template: `
    <h1>{{ title }}</h1>
    <p>Дай пять! {{ giveFive() }}</p>
  `
  // если всё же нужно использовать контент, содержащийся внутри тега my-app, то в шаблоне компоненты следует добавить тег ng-content
  template: `
    <h1>{{ title }}</h1>
    <ng-content></ng-content>
  `
  // если нужно отобразить массив, используется структурная директива *ngFor
  template: `<ul>
    <li *ngFor="let link of links">
      <a href="{{ link.href }}">{{ link.name }}</a>
    </li>
  </ul>`

  // для данной компоненты можно задавать классы (они будут применяться ТОЛЬКО для этой компоненты)
  styles: [`
    .title {
      /* ... */
    }
  `]

  // вместо шаблонов HTML и стилей CSS кода внутри скрипта можно пользоваться и подключаемыми файлами:
  templateUrl: 'app/main.html',
  styleUrls: ['app/main.css'] // стили всё ещё будут принадлежать только данной компоненте
})
// Класс
class AppComponent {
  // Свойства, передаваемые в декоратор (для работы с переменными не нужно использовать ключевые слова var или let)
  title = 'Заголовок'
  links = [
    {
      href: "http://polyakovin.ru",
      name: "Мой сайт"
    },
    {
      href: "http://oywo.ru",
      name: "OYWO"
    }
  ]
  // для задания методов (функций) также не требуется ключевого слова function
  giveFive() {
    // внутри же функции НУЖНО пользоваться ключевыми словами ES2015
    let five = 5;
    return five;
  }
}

// Для отображения вызываем функцию bootstrap()
bootstrap(AppComponent)
```

### Структурные директивы
`*ngFor` — цикл
```html
  <li *ngFor="let link of links">
    <a href="{{ link.href }}">{{ link.name }}</a>
  </li>
```

`*ngIf` — условие, при котором отображается тег
```html
  <div *ngIf="user === 'admin'">Секрет</div>
```


## Связка данных (Data Binding)

### Непосредственно в шаблоне (String Interpolation)

В HTML можно пользоваться JS-выражения с помощью конструкции `{{ ... }}`:
```html
<div>
  {{ expression }}
</div>
```

#### Конвейер (pipe)

В первом Angular его называли фильтром.
Принцип работы такой же, как в [Bash](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Bash (UNIX).sh) — команды записываются поочерёдно через символ `|` и выходное значение любой команды используется на входе следующей.

Пример использования:
```html
{{ "Заголовок" | uppercase }} <!-- ЗАГОЛОВОК -->
```

[Примеры пайпов]((https://angular.io/docs/ts/latest/api/#!?query=pipe)):
- [uppercase](https://angular.io/docs/ts/latest/api/common/index/UpperCasePipe-pipe.html)
- [lowercase](https://angular.io/docs/ts/latest/api/common/index/LowerCasePipe-pipe.html)
- [date](https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html)
- [currency](https://angular.io/docs/ts/latest/api/common/index/CurrencyPipe-pipe.html) — оформление цен
- number
- [decimal](https://angular.io/docs/ts/latest/api/common/index/DecimalPipe-pipe.html)
- replace — замена определённых символов
- [slice](https://angular.io/docs/ts/latest/api/common/index/SlicePipe-pipe.html) — выборка из массива или части строки
- [json](https://angular.io/docs/ts/latest/api/common/index/JsonPipe-pipe.html) — преобразует строку в JSON

Можно также создавать свои пайпы.

### По атрибуту (Property Binding)

> JS —> HTML

При использовании квадратных скобок у атрибута фигурные скобки больше не нужны. При этом если изменится свойство в JS, то в HTML оно также поменяется.
```html
<img [src]="goods.image" [alt]="goods.description">

<div [hidden]="!user.isAdmin">Админка</div>

<button [disabled]="isDisabled">Заказать</button>
```

При помощи такой же техники можно добавлять класс элементу (`object.highlighted === true`) или убирать его (`object.highlighted === false`).
```html
<div [class.highlight]="object.highlighted">Супер-товар</div>

<!-- То же самое действие с помощью директивы ngClass -->
<div [ngClass]="{highlight: true}">Супер-товар</div>
<!-- Непосредственно стиль элементу можно задавать директивой ngStyle -->
<div [ngStyle]="{color: 'red'}">Супер-товар</div>
```

#### Создание собственной связки по атрибуту

В классе любой компоненты может быть создана своя связка при помощи следующей конструкции:
```ts
import { Component, Input } from '@angular/core';

@Component({ ... })
export class compName {
  @Input() someProperty = "";
}
```
После этого вместе с компонентой становится доступной и связка.
```html
<compName [someProperty]="any value"></compName>
```

### По событию (Event Binding)

> HTML —> JS

События активируются следующим образом:
```html
<button (click)="anyAction($event, anotherProperty)">Заказать</button>
```
Пользоваться можно любыми стандартными событиями JS.
В функцию можно передавать любые параметры.
Параметр `$event` (имеено со знаком `$`) передаёт всю информацию о событии (нажатая клавиша, положение курсора, ...).

Функция также описывается в классе компоненты.
```ts
anyAction(event, anotherProperty) {
  event.preventDefault(); // предотвратить стандартное действие
  ...
}
```

#### Создание собственной связки по событию

В классе любой компоненты также может быть создана своя связка и по событию:
```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'compName',
  template: '<button (click)="onClicked()">Кликни!</button>'
})
export class compName {
  @Output() clicked = new EventEmitter();
  onClicked() {
    this.clicked.emit('По кнопке кликнули!');
  }
}
```
После этого вместе с компонентой становится доступной и связка.
```html
<compName (clicked)="onClicked($event)"></compName>
```

Теперь в любой компоненте можно обработать новое событие clicked
```ts
onClicked(value) {
  alert(value);
}
```

### Комбинированная связка (Two-Way Binding)

> JS <–> HTML

Для того, чтобы информация синхронизировалась, следует задать тегу оба типа связок.
```html
<input type="text" [value]="user.name" (input)="user.name = $event.target.value">
```
То же самое можно записать в более простом виде:
```html
<input type="text" [(ngModel)]="user.name">
```
> Синтаксическую форму `[()]` иногда называют бананом в коробке.


## Разбивка кода по модулям

Главный файл `main.ts` должен содержать только подключать компоненты.
```ts
import { bootstrap } from '@angular/platform-browser-dynamic';
// подключение компонент
import { AppComponent } from './app.component'; // имя компоненты AppComponent должно быть везде одинаковым

bootstrap(AppComponent)
```

Каждая компонента описывается в отдельном файле, например `app.component.ts`, (не забываем добавить `export`!).
```ts
import { Component } from '@angular/core';

@Component({})
export class AppComponent {} // теперь перед объявлением класса нужно ставить export
```

Для того, чтобы пользоваться компонентами внутри другой, нужно перечислить директивы внутри декоратора. К примеру, в файле `other.component.ts` это будет выглядеть следующим образом:
```ts
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'other',
  template: '...',
  directives: [AppComponent]
})
export class NewComponent {}
```


## Модели

Модели позволяют пользоваться возможностями объектно-ориентированного программирования. Создадим модель в файле `person.ts`.
```ts
export class Person {
  id: number;
  firstName: string;
  secondName: string;
  age: number;
}
```
Модели дают компилятору возможность проверить правильность обрабатываемой информации.

Далее модель подключается к компоненте и используется в классе.
```ts
import { Component } from '@angular/core';
import { Person } from './person';

export class PersonsComponent {
  persons: Person[] = [{ // такая запись сообщает компилятору о том, что persons — массив объектов класса Person
    "id": 1,
    "firstName": "iGor",
    "secondName": "Polyakov",
    "age": 23
  }, { ... }, { ... }];
}
```

При этом данные (заглушку) лучше держать в отдельном файле `mocks.ts`.
```ts
import { Person } from './person';

// в данном случае используем const, поскольку эти данные не меняются
export const PERSONS: Person[] = [{
  "id": 1,
  "firstName": "iGor",
  "secondName": "Polyakov",
  "age": 23
}, { ... }, { ... }];
```

Тогда класс в файле компоненты будет выглядеть следующим образом:
```ts
import { Component } from '@angular/core';
import { Person } from './person';
import { PERSONS } from './mocks';

export class PersonsComponent {
  persons: Person[];

  // функция вызывается после того, как будет собрана компонента
  ngOnInit() {
    this.persons = PERSONS;
  }
}
```

Такой способ работы с данными практически не используется.
Гораздо эффективнее применять сервисы.


## Сервисы

Сервис — это набор методов для работы с компонентой.
Создать сервис можно по аналогии с компонентой.
```ts
import { PERSONS } from './mocks';

export class PersonsService {
  // создаём функцию, которая возвращает
  getPersons() {
    return PERSONS;
  }
}
```

Теперь воспользуемся сервисом в компоненте.
```ts
import { Component } from '@angular/core';
import { Person } from './person';
import { PersonsService } from './persons.service';

export class PersonsComponent {
  persons: Person[];

  ngOnInit() {
    // запоминаем сервис в переменной
    let personsComponent = new PersonsComponent();

    // пользуемся сервисом по назначению (задаём значение свойству данного класса)
    this.persons = personsComponent.getPersons();
  }
}
```

Таким образом сервис помог абстрагироваться в коде от данных.
Однако пользоваться им всё ещё не удобно.

### Внедрение зависимостей (Dependency Injection)

__Dependency Injector__ создаёт (если нужно) и отправляет компоненте необходимые зависимости (классы).
Для его работы требуется указать провайдеров (поставщиков зависимостей).

Таким образом, чтобы улучшить сервис, в `persons.service.ts` следует добавить декоратор `@Injectable()`.
```ts
import { Injectable } from '@angular/core';

@Injectable()
```

Затем подключить все сервисы (провайдеры) в основном файле приложения `main.ts`.
```ts
...
import { PersonsService } from './persons.service';

@Component({
  ...
  providers: [PersonsService]
})
...
```

Осталось только внедрить зависимость в компоненту.
```ts
import { PersonsService } from './persons.service';

@Component({ ... }) // здесь провайдеры не указываются!
export class PersonsComponent {
  persons: Person[];

  constructor(private personsService: PersonsService) {} // private автоматически определяет свойства компоненты на основании параметров

  ngOnInit() {
    // теперь можно воспользоваться сервисом
    this.persons = this.personsComponent.getPersons();
  }
}
```


## HTTP запросы

Для того, чтобы пользоваться данными с сервера, прежде всего создадим JSON-файл.
```json
{
  "data": [
    { ... },
    { ... },
    { ... }
  ]
}
```

Теперь подключим провайдер HTTP в главном файле.
```ts
...
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  ...
  providers: [..., HTTP_PROVIDERS]
})
...
```

Создадим сервис для отработки HTTP-запроса.
```ts
...
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonsComponent {
  constructor(private http: Http) {}

  getPersons() {
    return this.http.get('file.json')
      .map(response => <Person[]>response.json().data);
  }
}
```

Наконец, воспользуемся сервисом в компоненте.
```ts
...
export class PersonsComponent {
  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    // в конце концов нужно подписаться о получении данных
    this.personsComponent.getPersons()
      .subscribe(person => this.person = person);
  }
}
```
> Если возникает ошибка из-за того, что какая-то переменная не определена, то это из-за того, что при первичной загрузке никакой информации с сервера не приходит до тех пор, пока не сделан запрос.
> Решить эту проблему можно поставив в соответствующем месте проверку, содержит ли переменная информацию.
> Например,
> ```ts
> if (Array.isArray(this.person)) {}
> ```

Теперь при разработке и тестировании можно просто подключить либо сервис с заглушкой, либо с HTTP-запросом.
Для полноценной работы осталось описать правила обработки ошибок (404, 403, ...).


## Command Line Interface (CLI)

Если установить фреймворк [по инструкции на сайте](https://angular.io/docs/ts/latest/quickstart.html), то в основном проекте будет довольно много лишних файлов — разобраться с таким проектом будет сложнее, чем если бы в нём содержалось минимум информации.

Существует довольно удобный метод работы с Angular 2 — использование CLI, который можно установить из командной строки:
```sh
npm install -g angular-cli
```

После этого можно создавать новые приложения с помощью одной из следующих команд:
```sh
ng new <app-name> # в папке app-name

ng init # в текущей папке
```

Как только приложение будет создано, его можно будет скомпилировать и запустить.
```sh
ng build # разовая компиляция

ng serve # компиляция, создание сервера и отслеживание изменений в проекте
```

Можно создать новую компоненту с помощью одной из следующих команд:
```sh
ng generate component compName

ng g c compоName
  # Опции
  --flat # не создавать новую папку
  --inline-styles, -is # стили внутри скрипта
  --inline-template, -it # шаблон внутри скрипта

# помимо компоненты можно создать всё что угодно
ng g
  component
  directive
  pipe
  service
  class
  module
```


## Источники
- [x] [Установка](https://angular.io/docs/ts/latest/quickstart.html)
- [x] [Курс на Code School](https://www.codeschool.com/courses/accelerating-through-angular-2)
- [ ] [Angular 2 - The Complete Guide](https://www.udemy.com/the-complete-guide-to-angular-2/)
- [ ] [Официальная документация](https://angular.io/docs/ts/latest/)
- [ ] [Style Guide](https://angular.io/styleguide)
- [ ] [TypeScript](http://www.typescriptlang.org/)