// Processing


/*
  Можно посмотреть примеры программ: cmd+shift+O

  Также можно подключить целую кучу библиотек (Sketch > Import Library > Add Library...) и посмотреть их описание на сайте.

  Комментарии — как в C

  Запустить программу - cmd+R
  Комментарий — cmd+/
*/

// Размер окна при выводе
size(500, 500);

// Включить сглаживание (анти-алисинг)
smooth(); // Автоматически подключена с версии 3.0
noSmooth();

radians(deg); // Перевод из градусов в радианы

random(100);     // Случайное вещественное число из диапазона [0; 100)
random(50, 100); // Случайное вещественное число из диапазона [50; 100)
noise(.05);      // Случайное число из диапазона [0; 1], которое изменяется на 0.05

// Константы
PI, HALF_PI, TWO_PI

//// Переменные
int x = 10;
float e = 2.71828;
boolean switchVariable = true;
char charVar = 'V';
byte dozen = 12;
color cherryBlossomPink = #FFB7C5;
String str = "CCCP";

// Операции со строками.
// Можно перетягивать в окно Processing файлы и затем обращаться к ним по имени.
String poemLines[] = loadStrings("file.txt");
quote = trim(quote); // Убрать лишние пробелы
nf(x, 10);           // Преобразовать 10 цифр числа в строку

// Операции с переменными
+, -, *, /, atan(), sqrt(), int();

// Вывод сообщения в консоль
println("Hello, World! color = #" + hex(cherryBlossomPink, 6));

// Массивы
int[] a = {100, 200, 300, 400};
int[] b = new int[3]; // Пустой массив из 3х элементов (можно указывать переменную вместо числа)
println(a);           // Вывод всех элементов массива
a.length              // Длина массива
arrayCopy(a, b);      // Скопировать значения a в b
a = sort(a);          // Сортировка массива
reverse(a);           // Обратный порядок
append(a, 9);         // Добавить элемент в конец массива
splice(a, 11, 2)  ;   // Добавить элемент в середину массива в качестве индекса под номером 2
concat(a, b);         // Объединение двух массивов



//// Примитивы

// Фоновый цвет
background(255);         // Градации серого
background(0, 100, 255); // RGB
background(#333333);     // hex-код

// Стили (прописываются до объявления)
stroke(#ff0000);    // Цвет пера
strokeWeight(20);   // Размер пера
noStroke();         // Не рисовать
strokeCap(ROUND);   // Форма линии на концах (SQUARE, PROJECT)
strokeJoin(MITER);  // Форма линии на соединениях (BEVEL, ROUND)
fill(#00ff00);      // Цвет заливки
fill(#00ff00, 100); // Цвет заливки с прозрачностью
noFill();           // Не заливать
// Цветовые схемы
colorMode(RGB);
colorMode(HSB, 360, 100, 100);
colorMode(HSB, 360, 255, 255);
pushStyle(); // Контрольная точка изменения стилей
popStyle();  // Вернуться к контрольной точке изменения стилей

// Точка
point(x, y);

// Линия
line(x1, y1, x2, y2);

// Эллипс
ellipse(x, y, width, heigth);
ellipseMode(CORNER); // Расположение эллипса (CENTER, CORNERS, RADIUS):  CORNER - по верхнему левому углу; CENTER — по центру; CORNERS — вместо размеров задаются координаты углов; RADIUS - с указанием большой и малой полуосей

// Дуга
arc(x, y, width, height, start, stop); // Углы измеряются в радианах

// Прямоугольник
rect(x, y, width, height);
rectMode(CORNER); // Расположение прямоугольника (CENTER, CORNERS)

// Четырёхугольник
quad(x1, y1, x2, y2, x3, y3, x4, y4);

// Треугольник
triangle(x1, y1, x2, y2, x3, y3);

// Многоугольник
beginShape();
  vertex(x, y); // Точка 1
  vertex(x, y); // Точка 2
  vertex(x, y); // Точка 3
  // ...
endShape(CLOSE);

// Кривая
curve(x1, y1, x2, y2, x3, y3, x4, y4);
curveTightness(3); // Кривизна
// С бОльшим количеством точек
beginShape();
  curveVertex(x, y); // Точка 1
  curveVertex(x, y); // Точка 1
  curveVertex(x, y); // Точка 2
  curveVertex(x, y); // Точка 3
  // ...
  curveVertex(x, y); // Точка n
  curveVertex(x, y); // Точка n
endShape();

// Кривая Безье (cx1, cy1) и (cx2, cy2) — контрольные точки
bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);

// Текст
text("Smth", x, y, z);



// Трансформации
translate(x, y); // Сдвиг
scale(2);        // Масштабирование
rotate(PI);      // Вращение

pushMatrix(); // Контрольная точка изменения трансформации
popMatrix();  // Вернуться к контрольной точке изменения трансформации



// Анимация
// Глобальные переменные
float x;
float y;

// Блок со стилями
void setup() {
  color darkGray = #333333; // Локальная переменная

  size(512, 512);
  smooth();
  noStroke();
  background(darkGray);

  x = width;
  y = height;

  frameRate(5); // Частота кадров
}

// Блок рисования
void draw() {
  ellipse(x, y, 40, 40);

  x--;
  y *= .99;

  x = constrain(x, 100, width); // Условие выхода
}

void keyPressed() {
  // Действие при нажатии на клавишу на клавиатуре
}

void mousePressed() {
  // Действие при нажатии на клавишу мыши
}

// Цикл
for (int i = 0; i < 1000; ++i) {

}


// Использование кода java
import java.util.*;

Integer[] nums = {1, 2, 3, 4, 5};
Collection.shuffle(Arrays.asList(nums));  // Перемешать элементы массива



// Источники
/*
  [ ] http://fyprocessing.tumblr.com
*/