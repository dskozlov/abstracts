# ruby-lang.org
# ruby-doc.org
# ruby-doc.org/core
# https://www.ozon.ru/context/detail/id/5704300/

# можно ставить сколько угодно пробелов

## Команды терминала
# Версия Ruby
ruby -v
# Расположение Ruby на компьютере
which ruby
# Запуск интерпретатора Ruby
ruby -e 'код'
# Выполнение кода из файла
ruby path/to/file.rb
# Interactive Ruby Shell (IRB) — позволяет играть с Ruby в терминале (real time). Выйти из этого режима: quit
irb
irb --simple-prompt # Упрощённая (визуально) версия
# Документация (ruby information). q - выйти
ri <команда>

## Код
# Вывод на экран (в консоль терминала) и переход на следующую строку
puts 123
# Вывод на экран (в консоль терминала) и переход на следующую строку
print 123


## Переменные
# Локальная
variable = 1
# Глобальная
$variable
# Классовая
@@variable
# Instance
@variable


# ОБъекты
# Почти все типы данных в Ruby — объекты
## Целые числа и операции над ними
4 + 2
4 - 2
4 / 2
4 % 2 # Остаток от деленя
4 * 2
4 ** 2 # Возведение в степень
x = 1
x += 2
### Методы
12345.class # => Fixnum (какому классу принадлежит объект)
-20.abs # => 20
20.next # => 21

## Вещественные числа
## Если в операциях с числами фигурируют вещественные числа, то результат тоже будет вещественным
### Методы
12.67.round # => 13 (округление)
12.67.to_i # => 12 (округление вниз)
12.67.floor # => 12 (округление вниз)
12.67.ceil # => 13 (округление вверх)

## Строки
greeting = "Hello"
target = "world!"
greeting + ' ' + target # => "Hello world!"
"Xa"*3 # => "XaXaXa"
"Puts #{variable} into string"
### Спецсимволы (работают в двойных кавычках "")
\t # Tab
\n # Перенос строки
### Методы
"Hello".reverse # => "olleH"
"Hello".capitalize # => "Hello"
"Hello".downcase # => "hello"
"Hello".upcase # => "HELLO"
"Hello".length # => 5
"H,e,l,l,o".split(',') # => ["H", "e", "l", "l", "o"]
#### Можно навешивать цепочки методов
"Hello".reverse.upcase

## Массивы
data_set = ["a", "b", "c"]
data_set = [0] # => "a"
data_set << "d" # => ["a", "b", "c", "d"] (добавляет в конец)
data_set + ["d", "e"] # => ["a", "b", "c", "d", "e"]
data_set - ["b"] # => ["a", "c"]
### Методы
data_set.push("d") # => ["a", "b", "c", "d"] (добавляет в конец)
data_set.unshift("Z") # => ["Z", "a", "b", "c"] (добавляет в начало)
data_set.shift # => ["b", "c"] (удаляет первый элемент)
data_set.pop # => ["a", "b"] (удаляет последний элемент)
data_set.clear # => []
data_set.inspect # => "[\"a\", \"b\", \"c\"]" (строка с массивом)
puts data_set # =>
				"a"
				"b"
				"c"
puts data_set.inspect # Удобно использовать для отладки
data_set.to_s # => "[\"a\", \"b\", \"c\"]"
data_set.join # => "abc"
data_set.join(", ") # => "a, b, c"
data_set.reverse # => ["c", "b", "a"]
data_set.delete_at(1) # => ["a", "c"]
data_set.delete("b") # => ["a", "c"]
["c", "a", "b"].sort # => ["a", "b", "c"]
[1, 1, 2, 3].uniq # => [1, 2, 3]
[1, 1, 2, 3].uniq! # => [1, 2, 3] (с обновлением массива)

## Хэши, Ассоциативные массивы (Hashes)
## Значения элементов массива можно определять по ключу (как в объектах)
person = {'first_name'=>'iGor', 'last_name'=>'Polyakov'}
person['first_name'] # => "iGor"
person.index('iGor') # => 'first_name'
person['gender'] = "male" # добавляет ещё один элемент с указанным ключом
person.to_a # => [["first_name", "iGor"], ["last_name", "Polyakov"]]

## Символ (значение, которое занимает в памяти фиксированное место в памяти. работают как указатели)
:symbol
## Как правило используются для задания ключей в ассоциативных массивах
person = {:first_name=>'iGor', :last_name=>'Polyakov'}

## Булевы операторы
==, <, >, <=, >=, !, !=, &&, ||
a <=> b # -1 (a < b); 0 (a = b); 1 (a > b);
### Методы
x.nil? # проверяет, равно ли nil значение x
2.between?(1,4) # находится ли 2 между 1 и 4
[1, 2, 3].empty? # пустой ли массив
[1, 2, 3].include?(2) # содержится ли 2 в массиве
{'a'=>1, 'b'=>2}.has_key?('a') # есть ли ключ 'a'
{'a'=>1, 'b'=>2}.has_value?(2) # есть ли значение 2

## Диапазоны
x = 1..10  # всё, включая последнее значение
y = 1...10 # всё, исключая последнее значение
z = [*x] # => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
alphabet = "a".."z"
### Методы
x.begin # => 1
x.end # => 10
y.end # => 10
x.first # => 1
x.last # => 10
alphabet.include?('g') # => true

## Постоянные — переменные, которые начинаются с большой буквы
Const, CONST


# Условный оператор
if condition
	# code
elsif condition
	# code
else
	# code
end

if y # если у y есть значение
	x = y
else
	x = z
end
# Аналогичную запись можно также представить в виде:
x = y || z

unless x
	x = y
end
# или
x ||= y

## Однострочная запись
puts "Hello, #{name}!" if name == "Aleshik"
## ещё одна распространённая запись
boolean ? code_1 : code_2

# Switch
case object
when condition_1
	# code
when condition_2
	# code
else
	# code
end


# Циклы
loop do
	# code

	break # прервать цикл
	next # перейти к следующей итерации
	redo # начать цикл (итерацию) заново
	retry # начать цикл заново
end

## Пока...
while x < 100
	x += 2
	puts x
end
### сокращённая запись
puts x += 2 while x < 100

## Пока не...
until y <= 1
	y /= 2
	puts y
end
### сокращённая запись
puts y /= 2 while y <= 1


# Iterators
5.times do
	puts "Hello!"
end
## Дополнительный параметр (номер каждого элемента)
1.upto(5) do |i|
	puts "Hello!" + i.to_s
end
## Аналогичный результат дают следующие функции
1.upto(5) {puts "Hello!"}
### С дополнительным параметром
1.upto(5) {|i| puts "Hello!" + i.to_s}
5.downto(1) {puts "Hello!"}
(1..5).each {puts "Hello!"}

for fruit in ["banana", "apple", "pear"]
	puts fruit.capitalize
end

## Какой цикл использовать
# Для чисел
times, upto, downto, step
# Диапазонов
each, step
# Строк
each, each_line, each_byte
# Массивов
each, each_index, each_with_index
# Hash'ей
each, each_key, each_value, each_pair


# Операции с блоками кода
## Поиск
find/detect # находит какое-нибудь значение
find_all/select # находит все значения
any? # соответствует ли какое-нибудь значение этому требованию?
all? # соответствуют ли все значения этому требованию?
delete_if # удалить из массива в случае совпадения
### как пользоваться:
(1..10).find {|i| i == 5}
(1..10).find_all {|i| i % 3 == 0}

## Объединение (merge)
h1 = {"a"=>111, "b"=>222}
h2 = {"b"=>333, "b"=>444}
h1.merge(h2) # =>  {"a"=>111, "b"=>333, "b"=>444}
h2.merge(h1) # => {"a"=>111, "b"=>222, "b"=>444}
h1.merge(h2) {|key, old, new| new} # =>  {"a"=>111, "b"=>333, "b"=>444}
h1.merge(h2) {|key, old, new| old} # =>  {"a"=>111, "b"=>222, "b"=>444}
h1.merge(h2) {|key, old, new| old * 5} # =>  {"a"=>111, "b"=>1110, "b"=>444}
.merge! # заменяет значение оригинала
h1.merge(h2) do |key, old, new|
	if old < new
		old
	else
		new
	end
end

## Действие над каждым элементом массива, диапазона или хэша (collect/map)
[1, 2, 3, 4, 5].collect {|i| i + 1} # => [2, 3, 4, 5, 6]
['apple', 'banana', 'orange'].map {|fruit| fruit.capitalize if fruit == 'banana'} # => [nil, "Banana", nil]

## Сортировка (sort)
[3, 1, 5, 2, 4].sort # => [1, 2, 3, 4, 5]
[3, 1, 5, 2, 4].sort! # => [1, 2, 3, 4, 5] (заменяет массив)
a <=> b # передвинуть влево (a < b); оставить на месте (a = b); передвинуть вправо (a > b);
[3, 1, 5, 2, 4].sort {|v1,v2| v1 <=> v2} # => [1, 2, 3, 4, 5]
[3, 1, 5, 2, 4].sort {|v1,v2| v2 <=> v1} # => [5, 4, 3, 2, 1]
["aa", "bbb", "c"].sort_by {|item| item.length} # => ["c", "aa", "bbb"]

## (inject)
[*1..10].inject {|memo, n| memo + n} # => 55 (memo = 1; memo += 2; ...)
[*1..10].inject(100) {|memo, n| memo + n} # => 155 (memo = 100; memo += 2; ...)



# Методы
def name
	# тело функции
	puts "Hello, World!"
end
## вызов метода
name
## подгрузить файл (например, с методами)
require "methods.rb" # => true (если файл найден и исполняем)