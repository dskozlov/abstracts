# bash (Bourne Again Shell) — основной язык терминала


# В терминал можно перетащить папку и тогда введётся путь к этой папке.
# cmd + T — создать новую вкладку в терминале

# Команды
## документация по командам
man <команда>

## "очистка" экрана
clear

## вывести на экран
echo <smth>
echo {1..10} # 1 2 3 4 5 6 7 8 9 10
echo {A..D}  # A B C D

## путь к текущей папке (print working directory)
pwd

## всё, что находится в папке (list the content of the current directory)
ls # в текущей папке
ls <название папки>
  # Параметры
  -a # все (в том числе и скрытые) файлы (all)
  -l # отображение списком
    drwxrwxrwx # (d — папка; - — файл)
  -1 | wc -l # количество файлов в текущей папке

## перейти в папку <название папки> (change directory), ".." — родительский каталог
cd <название папки>
  ~ # корень файловой системы
  /home # папка в корне файловой системы

## создать папку <название папки> (make directory)
mkdir <название папки>

## создать файл
touch <file.txt>
touch {apple, banana, cherry, durian} # несколько файлов
touch file_{1..1000} # 1000 файлов с порядковой нумерацией
touch file_{1..1000}{A..C} # 3000 файлов

## копирование файла
cp <copy> <to>

## удаление файла
rm <file/folder>
rm * # удалить всё

## чтение файла
cat <file.txt>
more <file.txt> # с указанием прогресса
head <file.txt> # только верхняя часть файла
tail <file.txt> # только нижняя часть файла

## скрыть файл или папку
chflags hidden <path/to/file/or/folder>
## показать файл или папку
chflags nohidden <path/to/file/or/folder>


# Программы
## Midnight Commander (файловый менеджер внутри терминала)
# http://www.vivapage.info/midnight-commander-mac-os-x/


# Источники
# [ ] https://www.lynda.com/Bash-tutorials/Up-Running-Bash-Scripting/142989-2.html