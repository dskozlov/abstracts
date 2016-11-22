<?
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