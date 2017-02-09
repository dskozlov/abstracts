# Angular 2


Нужно знать:
- [HTML](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/HTML/HTML.html)
- [CSS](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/CSS/CSS.css)
- [JavaScript](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/JavaScript/JavaScript.js)

Для того, чтобы овладеть фреймворком Angular 2 нет необходимости в том, чтобы знать ещё и [первый Angular](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/JavaScript/AngularJS.md).
Вторая версия быстрее и проще в использовании.

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
    template: '<h1>{{ title }}</h1>' // шаблон контента со свойством из класса
    // если нужен шаблон в несколько строчек, то используются штришки ``
    template: `
      <h1>{{ title }}</h1>
      <p>Какой-то текст</p>
    `
  })
  // Класс
  class AppComponent {
    // Свойства, передаваемые в декоратор (для работы с переменными не нужно использовать ключевые слова var или let)
    title = 'Заголовок'
  }

  // Для отображения вызываем функцию bootstrap()
  bootstrap(AppComponent)
```

## Источники
- [ ] [TypeScript](http://www.typescriptlang.org/)
- [ ] [Установка](https://angular.io/docs/ts/latest/quickstart.html)
- [ ] [Официальная документация](https://angular.io/docs/ts/latest/)
- [ ] [Курс на Code School](https://www.codeschool.com/courses/accelerating-through-angular-2)