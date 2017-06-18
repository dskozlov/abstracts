# Python


# Отступы здесь важны

# Скрипты можно записывать в файлы с расширением .py, а запускать из терминала с помощью команды
python script.py

# Можно просто войти в интерактивный режим (консоль) с помощью команды
python

"Строка"
'Спецсимволы: \n \t'

# Математические операции
+
-
*
/  # деление
10./3  # результат деления — число с плавающей точкой
// # целочисленное деление
7 // 2 #=> 3
** # возведение в степень
-2 + -2 # отрицательные числа
# Модуль math
import math
math.ceil(4.8)  #=> 5


# Логические операторы
>
<
==
<=
>=
!=
True or False
True and True


# Переменные
var_name = 42
# переменные не могут содержать пробелов, а также чисел и спецсимволов в начале
# PEP 8 Style Guide: lowercase + underscore
first_name = "iGor"
global var_name # программе сообщается о том, что берётся глобальная переменная (например, в функции)
del var_name # удалить объявленную переменную


# Константы
__name__ # имя файла ("__main__", если основной)


# Массивы
days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]


# Конкатенация
full_name = first_name + " " + last_name
# Обращение к символам
first_name[0] #=> "i"
first_name[1:3] #=> "Go"
first_name[:2] #=> "iG"
first_name[2:] #=> "or"


# Функции
def func_name(arg_1, arg_2 = "default string"): # объявление
  print "I'm a function with " + arg_2

func_name(123) # вызов
func_name(arg_2 = 123, arg_1 = 234)

# если параметров много и неизвестно сколько
def func_sum(*args):
  sum = 0
  for x in args:
    sum = sum + x
  return sum


# Встроенные функции
name = input("Введите своё имя") # присваивает переменной результат ввода пользователя. в Python 2 — raw_input()
print("iGor", "Polyakov") #=> "iGor Polyakov"
print name # в Python 2 можно не ставить скобки. а в Python 3 — нужно
str(123)  #=> "123"
len("iGor") #=> 4
round(10./3, 2) #=> 3.33 # округление числа с указанием количества знаков после запятой

# Условный оператор
if(a < b):
  print("a меньше b")
elif(a == b):
  print("a равняется b")
else:
  print("a больше b")
# тернарная запись
answer = "a меньше b" if (a < b) else "a больше или равно b"


# Циклы
for x in range(1,10): # все значения массива или диапазона
  print x
  if (True): continue # переход к следующей итерации
  if (True): break # прерывание цикла

for i, d in enumerate(days): # даёт доступ к номеру элемента
  print i, d

while (True):
  print "infinity"


# Классы
class ClassName():
  def method_1(self):
    print "method_1 of ClassName"

  def method_2(self, arg):
    print "method_2 of ClassName", arg

c = ClassName()
c.method_1()
c.method_2("Argument")

# расширение класса
class AnotherClass(ClassName):
  def method_1(self):
    ClassName.method_1(self);
    print "method_1 of AnotherClass"


# Есть мнение, что для того, чтобы хорошо владеть языком программирования, нужно хорошо знать его библиотеки.
# Подключение библиотеки
# Дополнительные пакеты (например, какой-нибудь module) подключаются с помощью
import module
# Проверить версию библиотеки
module.__version__

# Подключить только конкретную функцию
from math import factorial
factorial(10)



# Тип переменной
type(x)
True
False
and
or
int(x) # сделать целочисленным
x = None # нет типа и значения

"строка".upper()
"СтРоКа".lower()
len('длина')
bool('') #=> false
bool('asdf') #=> true
str[0:4:2] # 2 — величина шага

x = u'Привет' # unicode
str.encode('utf-8') # unicode -> str
str.decode('utf-8') # str -> unicode
str.decode('cp1251')

# разбить строку на элементы массива
"12,23,34,23,1,5".split(',')

" + ".join(array) # соединение всех элементов массива в одну строку

array.append(123) # добавить значение в конец массива
del array[2] # удалить значение

(1, "2", "name") # tuple — тот же массив, но его нельзя изменять
names = {1, "2", "name"}  # set — набор уникальных значений в массиве
"2" in names #=> True
"3" in names #=> False
names.add('iGor') # добавить элемент в set. добавлять можно только те элементы, которые нельзя изменять (в том числе и tuple)
names.remove('iGor') # удалить элемент из set
set(arr) # сделать обычный массив set'ом (поиск по массиву будет производиться быстрее). это можно проверить

%%time
print 10 in range(11)

%%time
print 10 in set(range(11))


dict # ассоциативный массив
dct = dict()
dct['n'] = 1
dct['n'] += 1
dct = {'n': 2, 'm': 1}




xrange(2, 5) #=> генератор массива (не заполняет память, а генерируется только тогда, когда данные необходимо извлечь)

# list comprehension
# так можно легко создавать списки
[x**2 for x in range(1, 11) if x % 2 == 0]
# и генераторы
(x**2 for x in range(1, 11) if x % 2 == 0)

# аналогичную вещь можно сделать с помощью функции map
# определим функцию возведения в квадрат
def sq(x):
  return x ** 2

# и воспользуемся ею в функции map
map(sq, range(10))

# того же результата можно добиться с помощью lambda-выражений
map(lambda x: x ** 2, range(10))


# Документация по функциям
?function_name

# Чтение файла
file = open("path/to/file.txt", "r") # открытие файла в режиме чтения
file.read()
file.readline() # вызвать строку из файла (каждый новый вызов — новая строка)

for line in file:
  print line.strip() # убирает пробельные символы в конце строки (в т.ч. знаки переноса)

# можно также преобразовать файл в массив из строк файла
data = list(file)
data = file.readlines() # альтернативный способ


# Работа с кодировкой
import codecs
codecs.open("path/to/file.txt", "r", encoding="koi8-r")

# Запись в файл
file = open("path/to/file.txt", "w") # открытие файла в режиме записи (файл перезапишется)
file = open("path/to/file.txt", "a") # открытие файла в режиме записи (новая строка добавится в конец файла)
file.write("какая-то строка")
file.close() # закрываем файл

# Запись нескольких строк в файл
with open("path/to/file.txt", "w") as file:
  file.writelines(digit + '\n' for digit in map(str, range(1, 11)))



# Можно переобозначать импортируемые пакеты
import pandas as pd
pd.DataFrame({'numbers': range(10), 'chars':['a']*10}) # таблица
frame = pd.read_csv('data.tsv', header=0, sep='\t') # чтение CSV
frame.colums # показать имена столбцов таблицы
frame.shape # размеры таблицы

# Добавление новой строки в файл
new_line = {'name': 'iGor', 'surname': 'Polyakov'}
frame.append(new_line, ignore_index=True) # создаётся модифицированная копия таблицы

# Добавление нового столбца
frame['newCol'] = ['val_1']*3 + ['val_2']*2 # присваиваем значения существующим строкам

# Удаление строк
frame.drop([5,6], axis=0, inplace=True) # удаление строк 5 и 6 с заменой таблицы

# Удаление столбцоы
frame.drop('newCol', axis=1, inplace=True) # axis=1 указывает, что мы удаляем именно столбец

# Запись таблицы в файл
frame.to_csv('data.csv', sep=',', header=True, index=None)




# Библиотеки
# scikit-learn

# Редакторы
# http://jupyter.org/
  # В этом редакторе можно одновременно работать с кусками текста на Markdown + LaTeX и кода на Python + Bash
  # Запуск
  ipython2 notebook
  # или
  jupyter notebook
# http://pythonfiddle.com/


# Источники
# [ ] https://python.org/
# [ ] https://docs.python.org/3.5/tutorial/
# [ ] https://www.python.org/dev/peps/pep-0008/
# [ ] https://docs.python.org/3.5/library/
# [ ] https://automatetheboringstuff.com/
# [ ] http://pythontutor.com/
# [ ] https://www.codeschool.com/courses/try-python
# [ ] https://www.codeschool.com/courses/flying-through-python
# [ ] https://www.pluralsight.com/browse/software-development/python
# [ ] [Изучение Python вместе с машинным обучением]https://www.coursera.org/learn/mathematics-and-python/
# [ ] https://www.coursera.org/courses?query=Python
# [ ] https://www.codeacademy.com
# [ ] http://www.pythontutor.ru
# [ ] http://www.learnpythonthehardway.org
# [ ] http://snakify.org
# [ ] https://www.checkio.org