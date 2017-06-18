-- SQL

-- выбрать данные из таблицы
SELECT col1, col2 FROM table; -- выбрать конкретные колонки из таблицы
SELECT * FROM table; -- выбрать все колонки
SELECT col1 FROM table WHERE id = 1; -- конкретизировать выбор строк (можно также пользоваться знаками >, <, >=, <=, != (или <>) )
SELECT col1 FROM table WHERE name = 'iGor' OR name = 'Alenushka' AND surname = 'Polyakov'; -- более сложная выборка
SELECT * FROM table ORDER BY col1; -- выбрать в порядке возрастания
SELECT * FROM table ORDER BY col1 DESC; -- выбрать в порядке убывания

-- вставить данные в таблицу
INSERT INTO table (col1, col2)
VALUES ('Something', 42)