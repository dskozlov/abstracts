# Angular 2


Нужно знать:
- [HTML](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/HTML/HTML.html)
- [CSS](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/CSS/CSS.css)
- [JavaScript](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/JavaScript/JavaScript.js)
- ООП

Для того, чтобы овладеть фреймворком Angular 2 нет необходимости в том, чтобы знать ещё и [первый Angular](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Web/JavaScript/AngularJS.md).
Вторая версия быстрее и проще в использовании.


## Организация структуры проекта



Рядом с файлом `index.html` должен находиться и главный файл `main.ts` проекта на Angular 2, который содержит следующую структуру:
```ts
// Подключаем две библиотеки-модуля
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
// и описание модулей приложения
import { AppModule } from './app/app.module';

// для отображения приложения пишем
platformBrowserDynamic().bootstrapModule(AppModule); // ничего общего с фреймворком Bootstrap от Twitter
```

Разбивка кода по модулям
только подключать компоненты.
Теперь для того, чтобы воспользоваться компонентой, её нужно объявить её в файле `app.module.ts` (так другие компоненты будут знать об этой):
```ts
// модули, необходимые для работы приложения
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// импортируем свои компоненты, директивы, сервисы, ...
import { AppComponent } from './app.component';

// декоратор (метаданные) для класса AppModule
@NgModule({
  declarations: [ // здесь подключаем компоненты, директивы
    AppComponent,
    MyComponent,
    MyDirective
    ...
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ MyService ], // здесь подключаем сервисы
  bootstrap: [ AppComponent ] // основная компонента, внутри которой находится приложение
})
export class AppModule {}
```


## Директивы

_Директивы — это инструкции_ для фреймворка, которые прописываются в HTML-разметке и позволяют задавать динамическое поведение элементов документа.
Директивы бывают нескольких видов:
- Компонентная (содержит шаблон отображения данных)
- Структурная (определяет содержание шаблонов)
- Атрибутная

### Компоненты

Создаём произвольный тег HTML.
```html
<my-app>Загрузка приложения...</my-app>
```
Текст внутри тега будет замещён содержимым компоненты.

Создадим компоненту (основной строительный элемент приложения на Angular 2, по сути информационный блок на веб-странице) для приложения в TypeScript-файле `app/main.ts`.
```ts
// функция для создания компоненты
import { Component } from '@angular/core';

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
export class AppComponent { // export нужен для того, чтобы компоненту можно было использовать в других компонентах
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

  // Метод (функция) также не требуется ключевого слова function
  giveFive() {
    // внутри же функции НУЖНО пользоваться ключевыми словами ES2015
    let five = 5;
    return five;
  }
}
```

### Структурные директивы

Структурные директивы изменяют структуру DOM.

`*ngIf` — условие, при котором отображается тег
```html
  <div *ngIf="user === 'admin'">Секрет</div>
```

`*ngFor` — цикл, согласно которому элемент будет дублироваться
```html
<li *ngFor="let link of links"> <!-- link — локальная для цикла переменная; links — свойство класса -->
  <a href="{{ link.href }}">{{ link.name }}</a>
</li>

<!-- Также можно воспользоваться индексом -->
<li *ngFor="let link of links; let i = '0' + index ">{{i}}: {{link.href}}</li>
```

`[ngSwitch]` — расширенная версия `*ngIf`
```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="1">Один</p>
  <p *ngSwitchCase="2">Два</p>
  <p *ngSwitchDefault>По умолчанию</p>
</div>
```

#### __*__ Создание собственной структурной директивы

Создаём директиву
```ts
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if(condition) {
      // спрятать контейнер
      this.vcRef.clear();
    } else {
      // контент контейнер
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}
```

И подключаем её в `app.module.ts`
```ts
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    ...
    UnlessDirective
  ]
})
```

### Атрибутные директивы

Атрибутные директивы меняют свойства элементов DOM.

`ngClass` позволяет включать и выключать классы
```html
<div [ngClass]="{className1: true, className2: false}"></div>
<!-- Другой способ включать и выключать классы -->
<div [сlass.className1]="true"></div>
```
`ngStyle` задаёт CSS-стиль
```html
<div [ngStyle]="{"color": "red"}"></div>
```

#### __*__ Создание собственной атрибутной директивы

Создаём директиву
```ts
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  // Dependency Injection
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // // Меняем стиль элемента (не самый лучший способ — иногда работает некорректно)
    // this.elementRef.nativeElement.style.backgroundColor = 'green';

    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", 'green');
  }
}
```

И подключаем её в `app.module.ts`
```ts
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    ...
    HighlightDirective
  ]
})
```

Также можно создать интерактивную директиву (например, действие применяется к элементу при наведении мыши).
```ts
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  // при наведении курсора элемент перекрашивается в зелёный
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };
  // при убирании — в белый
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  };
  // задаём параметры, которые будем изменять (вместо непосредственного прописывания пользуется этой функцией)
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor = 'white';
}
```


## Связка данных (Data Binding)

### Непосредственно в шаблоне (String Interpolation)

В HTML можно пользоваться JS-выражения с помощью конструкции `{{ ... }}`:
```html
<div>{{ expression }}</div>
```

#### Pipes

Pipe (пайп, конвейер) нужен для того, чтобы представлять данные в нужном виде в нужном месте.

> В первом Angular пайп называли фильтром.

Принцип работы такой же, как в [Bash](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Bash (UNIX).sh) — команды записываются поочерёдно через символ `|` и выходное значение любой команды используется на входе следующей.

Пример использования:
```html
{{ "Заголовок" | lowercase }} <!-- заголовок -->
```

Параметризация пайпов
```html
{{ myDate | date:"dd.MM.yyyy" }}
```

Цепочка преобразований:
```html
{{ "Заголовок" | slice:4:-1 | uppercase }} <!-- ЛОВОК -->
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
- [async](https://angular.io/docs/ts/latest/api/common/index/AsyncPipe-pipe.html) — возвращает значение как только оно будет получено

##### Создание пайпа

Создаём пайп.
```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  // pure: false // информация обновляется при изменениях значения
})
export class DoublePipe implements PipeTransform {
  transform(value: any, args?: any): any { // args — массив аргументов
    // то, что будет происходить со значением
    return value * 2;
  }
}
```

Подключаем его в файле `app.module.ts`.
```ts
import { DoublePipe } from './double.pipe';

@NgModule({
  declarations: [DoublePipe]
})
```

Пользуемся на здоровье!
```html
{{ 2 | double }}
```

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
  // для того, чтобы не писать ключевое слово @Input(), можно просто указывать названия свойств в @Component({ inputs: ['someProperty', ...] }) — тогда и импортировать Input не нужно

  // при задании атрибутной директивы можно делать так:
  @Input('attrName') anyVar = "any value";
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


## Обращение к элементу по ссылке

Обращение к элементу компоненты проводится по ссылке через символ `#`. Например:
```html
<input type="text" #input>
```

Обращаться к элементу можно как в HTML-разметке
```html
<div>{{ input.value }}</div>
```

Так и в классе компоненты.


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

[Подробнее](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html) о функциях типа `ngOnInit` (хуки жизненного цикла компоненты).


## Сервисы и внедрение зависимостей (Dependency Injection)

Сервис — это набор методов для работы с компонентой (в итоге помогают писать меньше кода).
Один сервис может быть использован в разных компонентах.
__Dependency Injector__ создаёт (если нужно) и отправляет компоненте необходимые зависимости (классы).

Создадим сервис в файле `persons.service.ts`
```ts
import { Injectable } from '@angular/core';

@Injectable() // декоратор необходим в том случае, если в сервис инжектируются другие сервисы. если этого не происходит, декоратор необязателен
export class PersonsService {
  PERSONS = [
    { ... },
    { ... },
    { ... }
  ]

  // создаём функцию, которая возвращает
  getPersons() {
    return PERSONS;
  }
}
```

Теперь воспользуемся сервисом в компоненте.
```ts
import { Component } from '@angular/core';
import { PersonsService } from './persons.service'; // будет работать только в этой компоненте. чтобы использовать везде, импортировать следует в app.modules.js в массиве providers

@Component({ ... })
export class PersonsComponent {
  persons: Person[];

  // Dependency Injection
  constructor(private personsService: PersonsService) {} // private автоматически определяет свойства компоненты на основании параметров

  ngOnInit() {
    // пользуемся сервисом
    this.persons = this.personsComponent.getPersons();
  }
}
```

Сервисы могут быть использованы другими сервисами.


## HTTP запросы

Для того, чтобы пользоваться данными с сервера, прежде всего создадим JSON-файл.
```json
[
  { ... },
  { ... },
  { ... }
]
```

Теперь подключим провайдер HTTP в файле.
```ts
import { HttpModule } from '@angular/http';

@Component({
  imports: [
    HttpModule
  ]
})
```

Создадим сервис `http.service.ts` для отработки HTTP-запроса.
```ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  getPersons() {
    return this.http.get('file.json')
      .map(response => response.json());
  }
}
```

Наконец, воспользуемся сервисом в компоненте.
```ts
import { HttpService } from './http.service';

export class MyComponent {
  data: any;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    // в конце концов нужно подписаться о получении данных
    this.httpService.getPersons()
      .subscribe(data => this.data = data);
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


## Пути (Routes)

Пути задавать будем в файле `app.routing.ts`:
```ts
import { Routes, RouterModule } from "@angular/router";

// компоненты, к которым подключаемся
import { MainComponent } from './main.component';
import { UserComponent } from './user/user.component';

// перечисляем пути
const APP_ROUTES: Routes = [
  { path: '', component: MainComponent }, // главная страница
  { path: 'user', component: UserComponent } // /user
];

// передаём пути на экспорт
export const routing = RouterModule.forRoot(APP_ROUTES);
```

Далее подключаем файл с путями в файл `app.modules.ts`:
```ts
import { routing } from "./app.routing";

@NgModule({
  imports: [ routing ]
})
```

В шаблоне основной компоненте приложения `app.component.ts` указывается место, куда подключаются другие компоненты при переходе по ссылке; а также сами ссылки для быстрого перехода между страницами.
```html
<div class="container">
  <div class="row">
    <div class="col">
      <!-- Навигация -->
      <a [routerLink]="['/']">Главная</a>
      <a [routerLink]="['/user']">Моя страница</a><!-- абсолютный путь -->
      <a [routerLink]="['../']">< Назад</a><!-- относительный путь -->
      <hr>
      <router-outlet><!-- сюда будут загружаться компоненты --></router-outlet>
    </div>
  </div>
</div>
```

Навигацией также можно пользоваться в классе компоненты.
```ts
import { Router } from "@angular/router";

@Component({
  template: `<button (click)="onNavigate()">На главную</button>`
})
export class AnyComponent {
  constructor(private router: Router) {}

  onNavigate() {
    this.router.navigate(['/']);
  }
}
```

### Параметризация пути

Для пути могут быть заданы параметры. Объявим параметр в файле `app.routing.ts`:
```ts
{ path: 'user/:id', component: UserComponent } // /user/{{id}}
```

Тогда в шаблоне можно будет задать параметр так:
```html
<a [routerLink]="['/user', user.id]">Пользователь №{{ user.id }}</a>
```

Этим параметром можно воспользоваться в компоненте следующим образом:
```ts
import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({ ... })
export class AnyComponent implements OnDestroy {
  id;
  private subscription: Subscription;

  // param; // для queryParam

  constructor(private activatedRoute: ActivatedRoute) {
    /*
     * // применяется только при первой генерации страницы
     * this.id = activatedRoute.snapshot.params['id'];
     */

    // применяется каждый раз при изменении параметра
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );


    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['anyParam'] // создаёт запрос /user?param=100
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

#### Запросы по параметру

Создаём запрос `/user?anyParam=100` через HTML
```html
<a [routerLink]="['/user']" [queryParams]="{anyParam: 100}">Пользователь</a>
```
либо через класс компоненты
```ts
import { Router } from "@angular/router";

@Component({ ... })
export class AnyComponent {
  constructor(private router: Router) {}

  onNavigate() {
    this.router.navigate(['/user'], {: {'anyParam': 100}}); // создаёт запрос
  }
}
```

И принимаем запрос
```ts
import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({ ... })
export class AnyComponent implements OnDestroy {
  private subscription: Subscription;

  param;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['anyParam'] // получение значения параметра anyParam
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

### Дочерние пути

Для компоненты, доступной по пути, можно создать свой файл с путями, аналогичный `app.routing.ts` (при этом в шаблон следует добавить `<router-outlet></router-outlet>`, где будут отображаться компоненты).
Тогда для доступа к этим путям следует в родительском `app.routing.ts` сказать об этом файле:
```ts
import { UserComponent } from './user/user.component';
import { USER_ROUTES } from './user/user.routes';

const APP_ROUTES: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user', component: UserComponent, children: USER_ROUTES }
];
```


## Работа с формами

- [Официальная документация](https://angular.io/docs/ts/latest/guide/forms.html)
- [Руководство по формам](http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/)

Для работы с формами требуется подключить модуль в файле `app.modules.ts`:
```ts
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [ FormsModule ]
})
```

Управлять формой можно прямо в шаблоне или же в TypeScript.
Рассмотрим далее оба этих метода.

### Управление из шаблона

Для этого метода обязательно нужно задать атрибуты `name` и `ngModel` полям формы, а также задать тегу `form` действие по событию `ngSubmit` и передать туда значение указателя на тег формы.
```html
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
  <input type="text" name="animal" ngModel>
</form>
```

После этого можно принять данные формы из параметра функции.
```ts
import { NgForm } from "@angular/forms";

export class FormComponent {
  onSubmit(form: NgForm) {
    console.log(form);
    // form.value — объект, в котором содержится вся переданная информация
    // form.controls —
    // form.valid — верно ли введены параметры в форму?
  }
}
```

> Данные из формы можно группировать, поместив нужные поля внутрь тега `ngModelGroup="groupName"`.
> Тогда данные появятся в объекте `form.value` внутри одной группы.

> Радио-кнопки удобно задавать следующим образом:
> ```html
> <label *ngFor="let lang of languages">
>   <input type="radio" name="language"
>     [(ngModel)]="user.nativeLang" [value]="lang">
> </label>
> ```

#### Валидация формы

С помощью атрибута `required` указывается поле, которое должно быть заполнено.
```html
<input type="text" name="animal" ngModel required>
```

Атрибут `pattern` задаёт [регулярным выражением](https://github.com/noggatur/abstracts/blob/master/%D0%9A%D0%BE%D0%B4/Regular%20Expressions.md), какой вид должна иметь введённая в поле информация.
```html
<input type="text" name="animal" ngModel required
  pattern="[\w\s]+">
```

> Задав ngModel, а также атрибут `#animal="ngModel"`, к полю можно будет обратиться по переменной `animal`. Например:
> ```html
> <div *ngIf="!animal.valid">Неверное значение поля</div>
> ```

В зависимости от состояния полей формы, им присваиваются CSS-классы, которые, в свою очередь можно стилизовать.
- классы `.ng-touched` и `.ng-untouched` говорят о том, изменялось ли значение поля или нет;
- `.ng-valid` и `.ng-invalid` — проходит ли информация, введённая в поле, валидацию;
- `.ng-pristine` и `.ng-dirty` — стоит ли в поле значение по умолчанию (задаётся атрибутом `[ngModel]`).

### Управление из класса компоненты

Для начала нужно подключить модуль `ReactiveFormModule` в `app.modules.ts`
```ts
import { ReactiveFormModule } from "@angular/forms";

@NgModule({
  imports: [ReactiveFormModule]
})
```

В шаблоне указывается имя формы через атрибут `[formGroup]`, а также имена полей через атрибут `formControlName`.
```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="username">
  <input type="email" formControlName="email"><span *ngIf="!myForm.controls['email'].valid">Неверный формат e-mail</span>
  <input type="password" formControlName="password">
  <input type="submit" [disabled]="!myForm.valid">
  <label *ngFor="let g of genders">
    <input type="radio" formControlName="gender" [value]="g">
  </label>
</form>
```

Тогда в компоненте становятся доступными форма и её поля, которым можно задавать значения по умолчанию, а также валидацию (см. [встроенные валидаторы](https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html))
```ts
import { FormGroup, FormControl, Validators } from "@angular/forms";

export class FormComponent {
  myForm: FormGroup;

  genders = [
    'мужчина',
    'женщина'
  ];

  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl('Ваня', Validators.required),
      'email': new FormControl('example@ya.ru', [
        Validators.required
        Validators.pattern("^[\w_\.]+@\w+\.\w{2,6}$")
      ]),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('мужчина')
    });
  }

  onSubmit() {
    console.log(this.myForm); // такой же объект, что и form из предыдущего подхода
  }
}
```

> Для группировки данных требуется объединить поля в HTML:
> ```html
> <div formGroupName="userData">
>   <input type="text" formControlName="username">
>   <input type="email" formControlName="email">
> </div>
> <input type="password" formControlName="password">
> ```
> а также в TS
> ```ts
> this.myForm = new FormGroup({
>   'userData': new FormGroup({
>     'username': new FormControl( ... ),
>     'email': new FormControl( ... )
>   }),
>   'password': new FormControl( ... )
> });
> ```

#### Массивы данных формы

Данные из формы можно записывать в массив.
Для этого добавим ещё один пункт в TS.
```ts
import { FormArray } from "@angular/forms";

export class FormComponent {
  constructor() {
    this.myForm = new FormGroup({
      'towns': new FormArray([
        new FormControl('Москва')
      ])
    });
  }

  // метод для добавления новых элементов в массив
  onAddTown() {
    (<FormArray>this.myForm.controls['towns']).push(new FormControls(''));
    // <FormArray> сообщает о том, что этот объект должен вести себя как массив (чтобы не ругался на применения метода push)
  }
}
```

В HTML создадим поля для добавления новых данных:
```html
<div formArrayName="towns">
  <h3>Города</h3>
  <div *ngFor="let town of myForm.controls['towns'].controls; let i = index">
    <input type="text" formControlName="{{i}}">
  </div>
  <button (click)="onAddTown()">Добавить город</button>
</div>
```

#### Упрощённый вариант

Та же модель может быть реализована в другом стиле с помощью модуля `FormBuilder`.
```ts
import { FormBuilder } from "@angular/forms";

export class FormComponent {
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Ваня', Validators.required],
        'email': ['example@ya.ru', [
          Validators.required
          Validators.pattern("^[\w_\.]+@\w+\.\w{2,6}$")
        ]]
      }),
      'password': ['', Validators.required],
      'gender': ['мужчина'],
      'towns': formBuilder.array([
        ['Москва']
      ])
    });
  }
}
```

#### Создание собственного валидатора

```ts
export class FormComponent {
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'password': ['', [Validators.required, this.myValidator]]
    });
  }

  myValidator(controls: FormControl): {[s: string]: boolean} {
    if (control.value === '1234') {
      return {'tooSimple': true};
    }
    return null; // иначе, форма валидна
  }
}
```

##### Создание асинхронного валидатора

Для того, чтобы проверить вводимую информацию на сервере, можно воспользоваться асинхронным валидатором.
```ts
import { Observable } from "rxjs/Rx";

export class FormComponent {
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'password': ['', Validators.required, this.myAsyncValidator]
    });
  }

  myAsyncValidator(controls: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        // создаём искусственную задержку
        setTimeout(() => {
          if (control.value === '1234') {
            resolve({'tooSimple': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }
}
```

#### Отслеживание изменений формы

```ts
export class FormComponent {
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({ ... });

    // отслеживание значений полей формы
    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );

    // отслеживание статуса формы
    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }
}
```

#### Сброс формы

Данные формы можно сбросить с помощью метода `reset()`.
```ts
// сброс всей формы
this.form.reset();

// сброс конкретных полей
this.form.reset({
  'username': 'iGor',
  'password': ''
});
```


## Command Line Interface (CLI)

Если установить фреймворк [по инструкции на сайте](https://angular.io/docs/ts/latest/quickstart.html), то в основном проекте будет довольно много лишних файлов — разобраться с таким проектом будет сложнее, чем если бы в нём содержалось минимум информации.

Существует довольно удобный метод работы с Angular 2 — использование CLI, который можно установить из командной строки:
```sh
npm install -g angular-cli
```

После этого можно создавать новые приложения с помощью одной из следующих команд:
```sh
ng new <app-name> # в папке app-name
  --prefix prefname # префикс для компонент

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
  component (c)
  directive (d)
  pipe (p)
  service (s)
  class (cl)
  module (m)
```

Также можно быстро удалить существующую компоненту (включая связи):
```sh
ng destroy component compName
```


## Источники
- [x] [Установка](https://angular.io/docs/ts/latest/quickstart.html)
- [x] [Курс на Code School](https://www.codeschool.com/courses/accelerating-through-angular-2)
- [ ] [Angular 2 - The Complete Guide](https://www.udemy.com/the-complete-guide-to-angular-2/)
- [ ] [Официальная документация](https://angular.io/docs/ts/latest/)
- [ ] [Style Guide](https://angular.io/styleguide)
- [ ] [TypeScript](http://www.typescriptlang.org/)
- [ ] [Отладчик Angular 2](https://augury.angular.io/)