# CpffeeScript


`js-code syntax`


# Переменные
a = 3
# Воспользоваться переменной внутри строки
$("#content").append "<em>#{name}</em>"

# Многострочные строки
str = "
  This
  is
  sparta!
"
# Перенос строк сохраняется
str = '
  This
  is
  sparta!
'
# Heredoc (Форматирование сохраняется)
str = """
This
  is
    sparta!
"""
# Регулярное выражение
regexp = ///
  <p>   # Открывающий тег
  (*.)  # Пояснение
  </p>  # Закрывающий тег
///


# Массивы
arr = [
  "Ray"
  3
  true
]
# Можно делать даже так
[a, b] = [1, 2]

# Диапазоны
a = [1..4]  # [1, 2, 3, 4]
a = [1...4] # [1, 2, 3]
# Обрезать массив
named = [
  "Ray"
  "iGor"
  "Andrew"
][0..1] # .slice(0, 2)
# [3..] # .slice(3)


# Сращивание (splice) элементов массива
names[1..2] = ["Sasha", "Masha"]


# Функции
a -> alert("AAAAA!")
# or
a ->
  alert("AAAAA!")
# Вызов функции
a()
# Если нужно задать параметры
sum = (a, b, message = "default") ->
  a + b
  alert message


# Объекты
obj =
  name: "iGor"
  surname: "P."
  site: "polyakovin.ru"


# Условия
if name == "Ray" then name = "Ray V."
# or
if name == "Ray"
  name = "Ray V."
# or
if name is "Ray"
  name = "Ray V."
# or
name = "Ray V." if name is "Ray"
# Для отрицания
if name != "Ray"
  name = "Ray V."
# or
if name isnt "Ray"
  name = "Ray V."
# Если переменная существует
$("#content").append name if name?

# Логические операторы
and(&&), or(||), not(!), is (===), isnt (!==)
# Можно записывать подобные выражения (в математическом виде)
if a < b < c
  act()

# Switch
switch author
  when "iGor" then append "Frontend"
  when "Uasya" then append "Design"
  else append "Training"

# this
@ - this

# Циклы
for thing in names
  console.log thing
# or
console.log thing for thing in names
# добавим условие...
console.log thing for thing in names when thin isnt "iGor"
# Чтобы вынуть индекс, нужно добавить вторую переменную:
for thing, i in names
  console.log "#{i} #{thing}"
# Для вынимания свойств объекта
for key, value of info  # Появилось of
  console.log "#{key}: #{value}"
# Манипуляция с неопределённым количеством аргументов
info = [
  'portfolio'
  'vv67.ru'
  'tr67.ru'
  'polyakovin.ru'
]
fillOut = (name, links...) ->
  $("#content").append "#{name}<br>"
  for item in links
    $("#content").append "#{item}<br>"
fillOut info...

# Таким же образом можно работать с каждым элементом массива
["a", "b", "c"]...

# While
while a > b
  c()

unless # while not





# Элементы ООП
## Классы
class Person
  constructor: (@name, @age) ->

  # Метод класса
  can_drive: ->
    min_age = 18
    @age >= min_age

igor = new Person "iGor", 23
console.log igor.name + igor.can_drive()

## Расширение класса
class Male extends Person
  @sex = "Male"

  describe: ->
    console.log Male.sex
    super # становится также методом класса Person


# Источники
###
  [x] https://www.codeschool.com/courses/coffeescript
  [ ] http://coffeescript.org
  [ ] A Little Book on CoffeeScript
  [ ] CoffeeScript: Accelerated JavaScript Development
  [ ] http://coffeescript-cookbook.github.io
  http://js2.coffee/
###