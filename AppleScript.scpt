-- AppleScript
(*
https://developer.apple.com/library/content/documentation/AppleScript/Conceptul/AppleScriptLangGuide/introduction/ASLR_intro.html

После того, как скрипт написан, следует нажать кнопку "скомпилировать" и тогда будет видно, не допущены ли ошибки в коде. Если нет, то скрипт можно уже и запустить.
*)

-- Переменные
set intVar to 5
set strVar to "String"
intVar as string
-- Массив
set arrVar to intVar & strVar --> {5, "String"}
"Hello " & "World!" --> "Hello World!"
{2, 3, 17, 18, 43, 45} & {6} --> {2, 3, 17, 18, 43, 45, 6}



-- Модальное окно с сообщением:
display dialog "Hello World!"
-- и пропадает через 3 секунды
display dialog "Hello World!" giving up after 3

-- AppleScript понимает команды (display, get, tell) и объекты (dialog, name, playlist) а также ссылки, указанные "в кавычках".

tell application "iTunes" to get the first playlist

tell application "iTunes" to get the name of every playlist

tell application "iTunes" to get the duration of playlist "Recently Played"

tell application "iTunes" to play

tell application "iTunes" to play playlist "Top 25 Most Played"

tell application "iTunes"
   track 1 of playlist 1 of source 1
end tell
 
-- Команды
count "Hello World!" --> 12
count {2, 3, 17, 18, 43, 45} --> 6

-- Операторы
---- Математические
+, -, *, /
---- Логические
"HELLO" is equal to "hello" --> true
99 < 3.5 --> false



-- Переменные
set lucky_numbers to {2, 3, 17, 18, 43, 45}

-- lucky_numbers
--> {2, 3, 17, 18, 43, 45}

(count lucky_numbers) is equal to 6
--> true

-- Условия
if 2 + 2 is equal to 4 then
	display dialog "Two plus two is four."
end if

-- Цикл
repeat 15 times
	display dialog "Hello again!"
end repeat

-- Можно программировать приложения, установленные в системе
tell application "Finder"
	-- Для того, чтобы увидеть список команд, нужно перейти в библиотеку (shift + cmd + L)
	make new folder
end tell