// Canvas


// Начало отсчёта в верхнем левом углу, ось абсцисс направлена вправо, а ординат — влево.
// Для работы нужно расположить тег <canvas width="400" height="300">Ваш браузер не поддерживает Canvas<canvas> в нужном месте

window.onload = function () {
  // Обязательный код для начала рисования на холсте
  var canvas = document.getElementById("id");
    // Можно также задать его размеры при желании
    canvas.width = 150;   // Ширина холста
    canvas.height = 150;  // Высота холста
  var ctx = canvas.getContext("2d");
  if (ctx) {
    // Примитивы

    // Прямоугольник
    // Линия
    // Дуга
    // Контур
    // Цвет, стиль
    // Кривая Безье
    // Квадратичная кривая
    // Текст

    // Композиция
    // Шаблон
    // Градиент
    // Тень
    // Кадрирование

    // Трансформации
    // Изображение
    // Видео
    // Пиксели
  } else {}
};

// Примеры проектов
// http://alteredqualia.com/canvasmol/
// http://raphaeljs.com — не работает
// http://www.thewildernessdowntown.com
// https://sketch.io/sketchpad/
// http://www.pirateslovedaisies.com