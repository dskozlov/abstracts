-- AppleScript


-- После того, как скрипт написан, следует нажать кнопку "скомпилировать" и тогда будет видно, не допущены ли ошибки в коде. Если нет, то скрипт можно уже и запустить.


-- Переменные
set intVar to 5
set strVar to "String"
intVar as string
global intVar -- сделать переменную глобальной
-- Массив
set arrVar to intVar & strVar --> {5, "String"}
"Hello " & "World!" --> "Hello World!"
{2, 3, 17, 18, 43, 45} & {6} --> {2, 3, 17, 18, 43, 45, 6}
item 2 of arrVar -- второй элемент массива
items 1 through 2 of arrVar -- два элемента массива



-- Модальное окно с сообщением:
display dialog "Hello World!"
-- и пропадает через 3 секунды
display dialog "Hello World!" message "" giving up after 3

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
---- Операторы
= (is equal to), < (is less than), > (is greater than), ≠
-- https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_operators.html#//apple_ref/doc/uid/TP40000983-CH5g-124070


-- Цикл
repeat 15 times
	display dialog "Hello again!"
end repeat

-- Функции
on myFunc()
	return "smth"
end myFunc
---- Вызов
myFunc()

-- Можно программировать приложения, установленные в системе
tell application "Finder"
	-- Для того, чтобы увидеть список команд, нужно перейти в библиотеку (shift + cmd + L)
	---- Создать папку
	make new folder at folder "iMac" with properties {name: "new folder"}
	------ Универсальный путь к папке с документами пользователя
	make new folder at (path to documents folder) with properties {name: "new folder"}
	path to documents folder	-- ~/Documents
	path to downloads folder	-- ~/Downloads
	path to desktop folder		-- ~/Desktop
	path to applications folder	-- /Applications
	-- ...

	------ Путь к папке может быть указан в 3х разных видах:
	folder "Documents" of folder "iGor" of folder "Users" of folder "iMac"
	folder "/iMac/Users/iGor/Documents"
	folder "iMac:Users:iGor:Documents"
end tell




-- Примеры скриптов
-- Добавить водяной знак к картинкам
tell application "Finder"
	set hasPS to get exists folder ((path to applications folder) & "Adobe Photoshop CC")
	-- http://www.adobe.com/devnet/photoshop/scripting.html


	set theImagesFolder to ((path to desktop folder) & "images") as string as alias
	set theImages to the name of every file of theImagesFoder

	repeat with anImage in theImages -- repeat with i from 1 to the count of theImages
		return anImage
	end repeat
end tell


-- Скрипт можно засунуть в приложение. А затем приложение заархивировать с помощью команды в терминале: hdiutil create -srcfolder myApp.app/ myApp.dmg
-- Можно выполнять действия при открытии файлов приложенем
on open theFiles
	-- do smth
end open


-- Выполнить команду терминала в скрипте
do shell script "ls"


-- Выполнение скриптов из командной строки
osascript -e "display dialog \"hi\""
---- Печатать текст скрипта до тех пор, пока не появится "EOF"
osascript << EOF
---- Выполнить скрипт из файла
osascript filename.scpt


-- Источники
(*
	[ ] https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html
	[ ] http://macscripter.net
	[ ] http://hints.macworld.com
	[ ] http://dougscripts.com/itunes/index.php
*)