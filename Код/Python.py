# Python


# Отступы здесь важны
# Дополнительные пакеты (например, какой-нибудь module) подключаются с помощью
import module

# Скрипты можно записывать в файлы с расширением .py, а запускать из терминала с помощью команды
python script.py

"Строка"
'Спецсимволы: \n \t'

# Математические операции
+
-
*
/  # деление
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

# Редакторы
# http://jupyter.org/
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