# R


# Установка и подключение дополнительных пакетов
install.packages("extra_pkg")
library(extra_pkg)

# Помощь
help(func)    # документация по функциям
help(package = "extra_pkg") # документация по пакетам
example(func) # пример использования функции

# Математические операторы
+
*
/

# Логические операторы
<
>
==
TRUE, T
FALSE, T

# Переменные
x <- 42

# Функции
sum(1, 2, 3)             #-> 6
sqrt(16)                 #-> 4
sin(0)                   #-> 0
rep("Yo ho!", times = 3) # цикл
min(1, 2)                #-> 1
list.files()             # показать список файлов
source("script.r")       # запустить скрипт из файла
length()                 # количество элементов
mean()                   # средне арифметическое
median()                 # медиана (серединное значение из всего списка, отсортированных по возрастанию или убыванию)
sd()                     # отклонение от среднего
factor()                 # распределяет значения по категориям (представлены как ссылки на значения)
as.integer()             # показать численные значения (адреса) разбитых на категории данных
levels()                 # показать категории

# Векторы (массивы, списки значений)
c(1, TRUE, "three")
5:9            # диапазон
seq(5, 9)      # диапазон ещё один
seq(5, 9, 0.5) # диапазон с шагом 0.5

arr <- c(1, TRUE, "three")
# доступ к элементам массива
arr[1]  # порядок начинается с 1
arr[4] <- "another value" # вставка нового элемента (или замещение старого)
arr[c(1,3)] # доступ к нескольким значениям
arr[2:4]    # доступ к диапазону значений
arr[5:7] <- c('the', 'poop', 'deck')

# Векторная математика
# Если добавить скаляр к вектору, то значение прибавится к каждой составляющей вектора.
c(1,2,3) + 1  #-> c(2,3,4)
# То же и для умножения, деления, вычитания, а также для функций, действующих на вектор
sin(c(1,2,3)) #-> 0.8414710 0.9092974 0.1411200
# Операции с векторами производятся поэлементно.
c(1,2,3) + c(1,2,3) #-> c(2,4,6)
# Также можно сравнивать вектора (опять же, сравнение ведётся поэлементно), например
c(1,2,3) == c(2,2,4)  #-> FALSE TRUE FALSE

# Если операцию провести невозможно, то возвращается NA.
# Например, элементом вектора может быть NA.
# Тогда для того, чтобы сработала функция сложения, следует сделать следующее
sum(c(1,NA,3), na.rm = TRUE)

# Ассоциативные массивы
ranks <- 1:3
names(ranks) <- c("first", "second", "third")
# Теперь обратиться к данным можно следующим образом
ranks["first"]  #-> 1
# Менять значения можно с помощью
ranks["third"] <- 4

cor.test()  # корреляция значений
lm(y ~ x)   # линейная зависимость (приближённая)


# Матрицы
matrix(0, 3, 4)      # нулевая матрица 3x4
matrix(1:12, 3, 4)   # матрица 3x4 со значениями из диапазона 1:12
dim(1:12) <- c(3, 4) # задание размерности для диапазона 1:12 (запись, аналогичная предыдущим)
matr_name[1,4]       # получить значение из ячейки матрицы
matr_name[1,]        # получить строчку матрицы
matr_name[,4]        # получить колонку матрицы
matr_name[,2:4]      # получить колонки (со 2 по 4) матрицы

# Таблицы
data.frame()         # создаёт группу данных (таблицу) из векторов одной размерности
read.csv("data.csv") # загрузить таблицу из внешнего файла (csv)
read.table("infantry.txt", sep="\t", header=TRUE) # загрузить таблицу из внешнего файла с любым заданным разделителем (как например \t — таб). Если header=TRUE, то для название столбцов используется первая строка файла
# доступ к столбцам таблицы
data_frame[[1]]
data_frame[[name]]
data_frame$name

merge(x = data_frame_1, y = data_frame_2) # объединить таблицы в одну при условии, что у обеих есть одинаковые колонки

# Отображение данных
print()   # вывести значения на экран
barplot() # столбчатая диаграмма на основе данных массива (ассоциативные массивы отображаются с подписями)
abline(h = mean(arr)) # дополняет диаграмму (которая была нарисована последней) горизонтальной линией (h) или вертикальной линией (v) на указанном уровне
plot()    # график на основе двух массивов
plot(x, y, pch = as.integer(factor(xy_label))) # различные маркеры в зависимости от категории
legend("topright", levels(factor(xy_label)), pch=1:length(levels(factor(xy_label)))) # легенда графика
contour() # контурная карта матрицы
persp()   # перспектива (из значений матрицы)
persp(matr_name, expand=0.2) # уменьшить масштаб перспективы по вертикали в 5 раз
image()   # тепловая карта


# Источники
# [x] http://tryr.codeschool.com/
# [ ] https://www.r-project.org/
# [ ] https://cran.r-project.org/
# [ ] https://habrahabr.ru/post/160373/
# [ ] http://www.oreilly.com/data/try-r/thanks.html
# [ ] http://www.oreilly.com/data/try-r/congrats.html
# [ ] Мастицкий С.Э. Визуализация данных с помощью ggplot2

# Библиотеки
# [ ] [ggplot2](http://ggplot2.org/)