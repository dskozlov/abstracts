<!-- PHP -->


<!-- Код PHP выполняется непостредственно в разметке HTML внутри специальной вставки: -->
<?php ?>
<!-- или -->
<? ?>

<?
  // Переменные
  $var = 'smth';  // имена переменных начинаются со знака доллара, после которого не может стоять цифра; далее переменная может содержать _, буквы и цифры.
  // правило хорошего тона: использовать одинарные кавычки для строк
  // другие типы данных
  $num = -123;  // целые
  $fl = 3.14;   // числа с плавающей точкой
  $bool = true; // булевы операторы. отображаютсяч на странице как 1 (true) или 0 (false)

  // Конкатенация строк
  $message = 'say ' . $smth;
  // при использовании двойных кавычек становится возможным использование переменных внутри строк
  $message = "say $smth";

  // Вывод информации
  echo "Hello, World!";




  // Разделить строку string с разделителем «delim» в массив
  explode (string, «delim»);

  //// Сниппеты
  // Вытаскивание информации из MySQL
  $tablename_query=mysql_query("SELECT * FROM tablename ORDER BY id DESC") or die("Invalid query: " . mysql_error());
  $tablename=mysql_fetch_array($tablename_query);
  do
  {

  }
  while($tablename=mysql_fetch_array($tablename_query));

  // Источники
  // http://symfony.com/
?>