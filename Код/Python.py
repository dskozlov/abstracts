# Python


# Отступы здесь важны

# Скрипты можно записывать в файлы с расширением .py, а запускать из терминала с помощью команды
python script.py

# Можно просто войти в интерактивный режим (консоль) с помощью команды
python

5 # число
3 + 2j # комплексное число
"Строка" # строка
'Спецсимволы: \n \t' # строка

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
True
False
==
!=
>
<
<=
>=
&, and
|, or


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

# Можно переобозначать импортируемые пакеты
import pandas as pd

# Подключить только конкретную функцию
from math import factorial
factorial(10)



# Тип переменной
type(x)
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

# измерение времени выполнения
%%time
print 10 in range(11)

%%time
print 10 in set(range(11))

%timeit print 10 in set(range(11)) # однострочная запись

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




# Pandas — работа с таблицами
import pandas as pd
pd.DataFrame({'numbers': range(10), 'chars':['a']*10}) # таблица (Data Frame)
frame = pd.read_csv('data.tsv', header=0, sep='\t') # чтение CSV
frame.colums # показать имена столбцов таблицы
frame.shape # размеры таблицы

# Добавление новой строки в файл
new_line = {'name': 'iGor', 'surname': 'Polyakov'}
frame.append(new_line, ignore_index=True) # создаётся модифицированная копия таблицы

# Добавление нового столбца
frame['newCol'] = ['val_1']*3 + ['val_2']*2 # присваиваем значения существующим строкам
frame['IsStudent'] = [False, True]
frame['IsStudent'] = False, True
frame['IsStudent'] = (False, True)

# Удаление строк
frame.drop([5,6], axis=0, inplace=True) # удаление строк 5 и 6 с заменой таблицы

# Удаление столбцов
frame.drop('newCol', axis=1, inplace=True) # axis=1 указывает, что мы удаляем именно столбец

# Запись таблицы в файл
frame.to_csv('data.csv', sep=',', header=True, index=None)

frame.dtypes # типы объектов в таблице
frame.colName.apply(pd.to_datetime) # изменение типа данных в таблице на формат даты и времени

frame.info() # мини-сводка по всем колонкам
frame.fillna('заполнитель', inplace=True) # заполнение пустых ячеек

# обращение к колонке таблицы
frame.colName
frame[['colName']]
frame[['colName1', 'colName2']] # несколько столбцов

# вывод только части строк
frame.head(3) # первые 3
frame[:3]    # первые 3
frame[-3:]   # последние 3
frame.loc[[1,3,4,5], ['colName1', 'colName2']] # вывод двух столбцов строк 1,3,4,5
frame.ix[[1,3,4,5], ['colName1', 'colName2']]  # то же самое
frame.iloc[[1,3,4,5], [0, 2]] # вывод столбцов 0 и 2 строк 1,3,4,5
frame.ix[[1,3,4,5], [0, 2]]   # то же самое
# условная выборка по значениям строк
frame[frame.Birth >= pd.datetime(1992, 1, 1)]
frame[(frame.age >= 18) & (frame.sex != 'Female')] # сложная выборка


# NumPy — для упрощённой работы с массивами
# https://docs.scipy.org/doc/numpy/user/basics.creation.html — создание массивов
# https://docs.scipy.org/doc/numpy/reference/routines.linalg.html#matrix-and-vector-products — операции с векторами
import numpy as np
# создание массива NumPy
# вектор (одномерный массив) и вектор-столбец или вектор-строка (двумерные массивы) являются различными объектами в NumPy
x = np.array([2, 3, 4, 5])
y = np.array([1, 2, 3, 4]) #=> [1 2 3 4]
np.array([1, 2, 3, 4, 5], dtype=float) # указываем тип данных массива
y.dtype # тип значений массива
y.ndim # размерность массива
y.shape # размер массива
y = y.reshape((1, 4)) #=> переобозначить размер массива
y[[0, 2]] #=> [1 3]
y[y>3] #=> [3 4]
x + y #=> [3 5 7 9]
x - y #=> [1 1 1 1]
x * y #=> [2 6 12 20]
y * 3 #=> [3 6 9 12]
y ** 2 #=> [1 4 9 16]

# создание матриц
matrix = np.array([[1, 2, 4], [3, 1, 0]]) # матрица / двумерный массив
np.eye(3) # единичная матрица размера 3x3
np.eye(4, 5) # единичная матрица размера 4x5
np.ones((7, 5)) # матрица 7x5 из единиц
np.zeros((7, 5)) # матрица 7x5 из нулей
np.arange(0, 24, 2).reshape((3, 4)) # матрица 3x4
# обращение к элементам матрицы
# https://docs.scipy.org/doc/numpy/reference/arrays.indexing.html
matrix[1][2] #=> 0
matrix[1, 2] #=> 0
matrix[1, :] #=> вторая строка
matrix[:, 2] #=> третий столбец
matrix[[1, 0], [2, 3]] # элементы матрицы с координатами (1, 2) и (0, 3)

# транспонирование матриц
# https://docs.scipy.org/doc/numpy/reference/generated/numpy.transpose.html
# https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.T.html
matrix.T
np.transpose(matrix)
# обратные матрицы
np.linalg.inv(matrix)

np.linalg.det(matrix) # определитель матрицы
np.linalg.matrix_rank(matrix) # ранг матрицы
matrix.shape[0] # число столбцов в матрице
w, v = np.linalg.eig(matrix) # w — собственные числа, v — собственные векторы матрицы (могут быть комплексными)

numpy.linalg.solve(a, b) # решение системы уравнений
x, res, r, s = np.linalg.lstsq(a, b) # псевдорешение системы уравнений (если решений нет) по методу наименьших квадратов

np.dot(a, b) # перемножение матриц / скалярное произведение
a.dot(b) # то же самое
np.arange(0, 8, 0.1) # массив с дробным шагом (range() так не умеет)
np.arange(start=0, stop=8, step=0.1, dtype=np.float32) # то же самое + указание типа данных
np.random.rand() #=> случайное число из равномерного распределения
np.random.randn() #=> случайное число из нормального распределения
np.random.randn(4) #=> вектор случайных чисел
np.random.randn(4, 5) #=> матрица случайных чисел
np.exp(-x/3.0) #=> экспонента указанных значений

# добавление фиктивных осей
x[np.newaxis, :] # вектор-строка
x[:, np.newaxis] # вектор-столбец

# вычисление норм
from numpy.linalg import norm # p-норма (норма Гёльдера)
# https://docs.scipy.org/doc/numpy/reference/generated/numpy.linalg.norm.html
norm(x, ord=1) # манхэттенское расстояние
norm(x, ord=2) # евклидово расстояние
norm(x - y, ord=2) # расстояние между векторами


# SciPy — работа со сложными математическими операциями

# расстояние
from scipy.spatial.distance import cdist
# https://docs.scipy.org/doc/scipy-0.16.0/reference/generated/scipy.spatial.distance.cdist.html
# размерность a и b должна быть как минимум двумерная
a = np.array([6, 3, -5]) #.reshape((1, 3)) # если оставить так, то не нужно будет дописывать [np.newaxis, :]
b = np.array([-1, 0, 7]) #.reshape((1, 3))
cdist(a[np.newaxis, :], b[np.newaxis, :], metric='cityblock') # манхэттенское расстояние
cdist(a[np.newaxis, :], b[np.newaxis, :], metric='euclidean') # евклидово расстояние
cdist(m1, m2, metric='euclidean', p=2) # вычисляет попарные расстояния между векторами, образованными из строк матриц

# решение задач оптимизации
from scipy import optimize
def f(x): return (x[0] - 3.2) ** 2 + (x[1] - 0.1) ** 2 + 3 # задаём функцию
optimize.minimize(f, [5, 5]) # находит минимум функции
def f(x): return .5*(1 - x[0])**2 + (x[1] - x[0]**2)**2 # The rosenbrock function
# поиск минимума
optimize.brute(f, ((-5, 5), (-5, 5))) # перебор
optimize.differential_evolution(f, ((-5, 5), (-5, 5))) # генетический метод
# градиентные методы оптимизации
def g(x): return np.array((-2*.5*(1 - x[0]) - 4*x[0]*(x[1] - x[0]**2), 2*(x[1] - x[0]**2))) # градиент функции
optimize.check_grad(f, g, [2, 2]) # точность градиента функции
optimize.fmin_bfgs(f, [2, 2], fprime=g) # BFGS
optimize.minimize(f, [2, 2], method='BFGS', jac=g) # BFGS — по умолчанию; jac — градиент
optimize.minimize(f, [2, 2], method='Nelder-Mead')

# работа с линейной алгеброй
from scipy import linalg
# решение системы уравнений
a = np.array([[3, 2, 0], [1, -1, 0], [0, 5, 1]])
b = np.array([2, 4, -1])
linalg.solve(a, b) #=> [ 2. -2.  9.]
# сингулярные разложения
X = np.random.randn(4, 3)
U, D, V = linalg.svd(X)
print U.shape, D.shape, V.shape

# решение задач интерполяции
from scipy import interpolate
x = np.arange(0, 10, 2)
y = np.exp(-x/3.0)
f = interpolate.interp1d(x, y, kind='quadratic') # квадратичная интерполяция; linear — линейная
x_new = np.arange(0, 8, 0.1)
y_new = f(x_new)


# Matplotlib — построение графиков
%matplotlib inline # чтобы графики отображались сразу в jupyter
from matplotlib import pylab as plt

x = np.arange(-10, 10, 0.1)
y = x ** 3
plt.plot(x, y) # на входе — массивы аргументов и значений функции
plt.show() # выводим график на экран

plt.plot(x, y, 'o', x_new, y_new, '-') # два графика на одном изображении




# Библиотеки
# - scikit-learn

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

# http://docs.scipy.org/doc/scipy/reference/linalg.html — справка по функциям пакета scipy.linalg
# https://docs.python.org/2/tutorial/inputoutput.html#reading-and-writing-files — справка по работе с файлами в Python
# https://docs.python.org/2/library/re.html — справка по регулярным выражениям в Python (если вы захотите узнать про них чуть больше)