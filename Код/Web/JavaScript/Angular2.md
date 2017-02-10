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
      href: "http://polyakovin.ru"
      name: "Мой сайт"
    },
    {
      href: "http://oywo.ru"
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


## Конвейер (pipe)

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



## Источники
- [ ] [TypeScript](http://www.typescriptlang.org/)
- [ ] [Установка](https://angular.io/docs/ts/latest/quickstart.html)
- [ ] [Официальная документация](https://angular.io/docs/ts/latest/)
- [ ] [Курс на Code School](https://www.codeschool.com/courses/accelerating-through-angular-2)