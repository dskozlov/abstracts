// TypeScript


// TypeScript — это прекомпилятор JavaScript, целью которого является типизация  JS. То есть код, написанный на TS проверяется на простые логические ошибки прежде чем скомпилироваться в JS.

// По сути TS отличается от JS только добавлением типов данных, классов и модулей. Рассмотрим эти особенности.


// Типы данных

let aString: string; // строка
let aNumber: number; // число
let aBoolean: boolean; // булева переменная
let anything: any; // любой тип
let voidVar: void; // без типа
// если не указывать тип, то автоматически присваивается тип void
// при этом переменной присваивается такой тип, тип данных которой был присвоен ей первым


// Обобщённые типы

let numberArray: Array<number>; // массив, каждый элемент которого — числа
numberArray = [1,2,3];


// Классы

// Классы позволяют создавать шаблоны объектов (каждому свойству приписывается определённый тип данных
class Car {
  // свойства объекта
  public model: string; // переменная доступна как в классе, так и вне класса
  private speed: number; // переменная доступна только внутри класса

  // конструктор позволяет передавать параметры объекту
  constructor(speed: number) {
    this.speed = speed || 0;
  }

  // метод объекта
  getSpeed() {
    console.log(this.speed);
  }

  // к статическим свойствам и методам можно обращаться без создания экземпляра класса
  static numberOfWheels(): number {
    return 4;
  }
}
// создание объекта класса Car()
let car = new Car(5);
console.log(car.model);
console.log(car.getSpeed());
console.log(Car.numberOfWheels());


// Интерфейсы

// Интерфейс — то же, что и класс, но, в отличие от класса, интерфейс не компилируется в JS
interface User {
  username: string;
  password: string;
  confirmPassword?: string; // необязательное свойство
}


// Модули

// Благодаря модульной системе классы, интерфейсы и переменные можно экспортировать
export class ExportedClass {}
// теперь класс ExportedClass стал доступным в других файла п команде import
import { ExportedClass } from './exported.class'


// Источники
// [ ] http://www.typescriptlang.org/