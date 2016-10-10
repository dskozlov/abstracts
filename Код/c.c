// C


// Директивы процессора
// Стандартные
#include <stdio.h>		// Интерфейс ввода (input) - scanf / вывода (output) - printf
#include <stdbool.h>	// Определяет булевы переменные (True и False). Их также можно задать следующим образом:
	typedef int Bool;
	#define True 1
	#define False 0
	// typedef unsigned short bool;
	// Но вообще это всё фигня и прикольно разве что для читабельности кода. Некоторые пакеты с этой фигнёй конфликтуют.
#include <math.h>		// Определяет константу M_PI - число пи; функцию возведения в степень pow(x, 2)
#include <string.h>		// Добавляет полезные функции для строк
	strlen(str);			// Вывести длину строки
	strcmp(str1, str2);		// Сравнить 2 строки: выводит 0, если одинаковые; отрицательное число, если strlen(str1) < strlen(str2); положительное число, если strlen(str1) > strlen(str2)
	strcpy(dest, src);		// Скопировать строку src в dest
	memcpy(dest, src, n);	// Скопировать n символов строки src в dest
#include <stdlib.h>
	compare(a,b);	// Сравнение переменных
	qsort();		// Сортировка массива
#include <time.h>	// Генерирует текущее время, что позволяет сделать нормальный рандоматор:
	srand(time(NULL));	// Нужно писать только один раз в программе — один раз запускаем таймер (иначе не работает)
	x = rand() % 100;	// Оператор случайной величины
#include <ctype.h>
	toupper();		// Переводит буквы в верхний регистр
#include <conio.h>	// Определяет функцию очистки экрана
	clrscr();
#include "file.h"	// Пользовательские, которая вызывает 2 файла: file.h и file.c
// Макросы
#define PI 3.14159	// Постоянная
#define NUMBERS 1, 2, 3	// Объект
#define greet(name) \
	printf("Thank you for shopping here, " #name "\n")
#define max(X, Y) ((X) > (Y) ? (X) : (Y))	// Типа функции. Данное выражение равносильно следующему выражению:
// то есть
x = max(12, 5);		// x = ((12) > (5) ? (12) : (5))
#undef PI	// забывает определение PI. после этого можно снова определить
// Условные директивы
#ifdef MACRO
	controlled text
#endif
// или
#if exspression
	controlled text
#endif
// или
#if exspression
	text-if-true
#else
	text-if-false
#endif
// или
#ifndef SMTH	// если макрос не определён
	text-if-true
#else
	text-if-false
#endif
// Предопределённые макросы
__FILE__	// путь к файлу
__DATE__	// текущая дата
__TIME__	// текущее время
__LINE__	// номер строки в коде
__STDC__	// версия ANSI

// Здесь могут быть объявлены глобальные переменные (которые будут использоваться во всех программе).

// Для разбиения кода на блоки используются функции (мини программы). Это называется функциональным программированием.
// Функция просто выполняет некие действия
void function_name(void) {
	/* тело функции */
	// здесь задаются локальные переменные, которые работают только внутри этой функции. локальная заменит глобальную, если их названия идентичны
}
// Функция возвращает некоторое значение
float sumOfTwo(float x, float y) {
	return x+y;
}
// Рекурсия - функция, которая вызывает сама себя. Программа будет зависать при её использовании, если не поставить ограничитель
void recursiveIncrement(int i){
	printf("i: %d\n", i);
	if(i<20)
		recursiveIncrement(i+1)
}
// Функции могут быть поставлены как до main, так и после неё. Но обязательно должны быть хотя бы объявлены до неё (не нужно при этом прописывать их работу)
// Рекомендуется оставлять здесь прототипы будущих функций (без тела), а уже после int main (void) определять эти функции. Удобно для того, чтобы видеть, как пользоваться функцией (параметры какого типа можно задавать). А вообще нет. Просто можно потом не париться, в каком порядке их размещать. Но если не объявлять в начале, то надо внимательно следить, чтобы не было конфликтов.
float sumOfTwo(float, float);
// После написания функции проверить,
// ----- Валидация данных -----
// - находятся ли числа в разумных пределах?
// - размер данных соответствует тому, который будет использован в течение времени равботы функции?
// - есть ли пустые поля, элементы массива и т.п.?
// - во всех ли файлах с данными есть эти самые данные?
// - все ли файлы читаемые?
// ----- Обработка данных -----
// - определи необходимые формулы, форматы и стандарты.
// ----- Анализ результатов -----
// - если нужно, выведи графики, таблицы, списки.
// - произведи статистический анализ, если нужно.
// - определи специфику выходящих за рамку теории выбросов.
// ----- Составление отчёта -----
// - создай отформатированный отчёт согласно требованиям.
// ----- Архивирование данных -----
// - сделай копии данных, результатов и отчётов.
// ----- Распространение результатов -----
// - храни результаты и отчёты в подходящих местах.
// - производи коммуникативные обновления.
// ----- Другое -----
// - Тип возвращаемой переменной такой же как тип данных функции?
// - Имя функции подходит для того, что она делает?
// - Параметры функции введены верно?
// - Количество вводимых параметров соответствует тому, которое задано у функции?
// - Функция работает корректно при всех вводах?
//		- отрицательные числа
//		- одинаковые числа
//		- а если введено нецелое число?
//		- есть ли вариант изменить тип переменной?
// - Имей в виду, что функцию можно запустить с двумя аргументами типа float.
// - Учти, что функцию можно запустить с двумя аргументами типа char.


int main(void){	// Пустой список параметров. Можно (или даже нужно) задать int argc, char *argv[] - главные аргументы проекта
	// Типы данных (определяют, сколько нужно выделять памяти на переменную). Программы будут работать эффективнее и быстрее, если выбирать соответствующие нуждам типы данных
	char s;				// %c; 1 байт; диапазон: [-128; 127] или [0; 255]
	unsigned char x;	// 1 байт; диапазон: [0; 255]
	signed char x;		// 1 байт; диапазон: [-128; 127]
	int i;				// %d (%3d - посмотреть, что выводит), %i; 2 или 4 байта; диапазон: [-32 768; 32 767] или [-2 147 483 648; 2 147 483 647]
	unsigned int j;		// 2 или 4 байта; диапазон: [0; 65 535] или [0; 4 294 967 295]
	signed int k;
	short c;			// 2 байта; диапазон: [-32 768; 32 767]
	unsigned short j;	// 2 байта; диапазон: [0; 65 535]
	long d;				// %ld, %hd; 4 байта; диапазон: [-2 147 483 648; 2 147 483 647]
	unsigned long j;	// 4 байта; диапазон: [0; 4 294 967 295]
	// Типы данных с плавающей точкой
	float a;			// %f, %.2f (количество знаков после запятой); 4 байта; диапазон: [1.2E-38;3.4E+38]; количество знаков после запятой - 6
	double b;			// %lf; 8 байт; диапазон: [2.3E-308;1.7E+308]; количество знаков после запятой - 15
	long double b;		// 16 байт; диапазон: [3.4E-4932;1.1E+4932]; количество знаков после запятой - 19

	sizeof(int);	// Выводит размер (в байтах) типа данных

	void	// Говорит (как правило, в функциях) о том, что не требуется никаких значений (данных). Вносит ясность в код и отладку (debugging)

	Bool isGood = True;	// Булевы (George Boole) переменные (TRUE || FALSE) && (1 || 0)

	// Общие правила для переменных (для понятности кода):
	// давать им понятные имена (не a,b,c, а height,length...)
	// если слов в имени несколько, то каждое слово писать с большой буквы: maxNameLength (кстати говоря, переменные чувствительны к регистру)
	// по возможности следует добавлять комментарии возле объявления переменной, зачем они нужны
	// стараться не задавать переменным и функциям одинаковые названия
	// Имеют ли смысл обозначения для тебя?
	// Имеют ли смысл обозначения для других?
	// Делают ли они код более читаемым?
	// Делают ли они код лучше хоть как-нибудь?

	// Переменные следует объявлять перед их использованием (можно все в одном месте (можно даже в специальном файле), а можно прямо перед использованием)

	// Массивы (группы данных)
	int i[32];	// Количество ячеек в массиве — 32. Можно использовать константы внутри квадратных скобок.
	char address[30];	// Строка (серия символов). В C нет типа данных string. Строки хранятся в массивах char.
	// Задание массивов
	int classrooms[5] = {15, 18, 10, 23, 15};
	float heights[] = {5.5, 6.1, 5.8};
	char lastName[MAX_LETTERS] = "Mr. Johnson";
	// Элементы массива вызываются по номеру (начиная с 0)
	classrooms[0] = classrooms[0] + 2	// 17
	// Двумерные массивы
	int table[2][3] = {
		{132, 142, 23},
		{0, 76, 872}
	}
	// Главное правило использования массивов: следи за индексом! Он всегда на единицу меньше номера элемента.
	// Параметры функции (если это массивы) следует делать указателями, чтобы лишний раз не тратить вычислительный ресурс

	// Указатели (переменные, которые содержать адрес на данные). Позволяют получать мощный доступ к памяти
	int size = 15;	// Переменная
	int *ptr;		// Указатель
	ptr = &size;	// Записываем в указатель адрес переменной
	printf("Address %x contains %d", ptr, *ptr);	//=> Address 54de1c88 contains 15
	// При использовании указателей программа иногда может вести себя непредсказуемо
	// Арифметика указателей
	int data[] = {15, 20, 30};
	int *ptr = data;	// ptr указывает на начало массива
	ptr++;	// ptr теперь указывает на второе значение массива
	ptr--;	// а теперь снова на первое
	// Можно также узнать количество элементов в массиве, размер которого не указывался
	int numElements = sizeof(data) / sizeof(int);
	// Благодаря указателям можно создавать динамические массивы. Например, статический массив будет выглядеть так:
	int staticArray[20];
	// а динамический с тем же зарезервированным количеством ячеек -
	int *dynamicArray = malloc(20 * sizeOf(int));
	free(dynamicArray);	// Освобождает неиспользованную память

	// Структуры (формируют группы переменныху)
	struct person{
		char firstName[20];
		char lastName[20];
		int age;
		char eyeColor[15];
		float height;
	};
	struct person citizen;
	citizen.age = 38;
	citizen.height = 38;
	strcpy(citizen.lastName, "Johnson");
	strcpy(citizen.firstName, "Sasha");
	strcpy(citizen.eyeColor, "Green");
	// Можно также задавать структуру целым массивам данных
	struct person teams[10];
	teams[0].age = 24;
	// Для структур также советуют пользоваться таким объявлением переменных, как
	extern int x;
	static int x;	// Если функция вызывается несколько раз , то для переменной следует прописать эту опцию
	// Если структуру нужно использовать в функциях, то её следует объявить глобальной переменной ещё до прототипов функции
	// Параметры функции (те, которые структуры) при этом следует делать указателями

	// Объединение (позволяет иметь один адрес для разных переменных)
	union symbol{
		int number;
		char letter;
	};
	union symbol value;
	value.number = 25;
	value.letter = "m";
	union symbol *ptr;	// указатель на объединение
	ptr = &value;
	char myLetter = ptr->letter;
	printf("Letter field %c\n", myLetter);		// m
	printf("Letter field %d\n", ptr->number);	// 109
	printf("Letter field %c\n", ptr->number);	// m

	// Файлы (проименованные части области памяти (например, жёсткого диска))
	// Чтение из файла
	int ch;
	FILE *fp;	// указатель на файл
	fp = fopen("./file", "r");	// открыть файл только для чтения
	ch = getc(fp);	// получить символ из файла
	while(ch != EOF){	// зациклить, пока не достигнем конца файла (-1). можно указать любой символ
		putschar(ch);	// печатать символ на экран
		ch = getc(fp);
	}
	fclose(fp);	// закрыть файл
	remove("./file");	// Удаление файла
	// Запись в файл
	fp = fopen("./file", "w");	// открыть файл для записи (если файла нет, он создастся)
	a	// добавить в конце файла
	a+	// добавить в конце файла и чтение файла
	w+	// открыть файл для чтения и записи
	r+	// открыть файл для чтения и записи
	fprintf(fp, "Some message and the value of variable: %s.\n", ch);	// запись в файл
	char messageToWrite[] = "Some message";
	char textBuffer[30];
	fwrite(messageToWrite, strlen(messageToWrite)+1, 1, fp);	// Записать сообщение в файл
	fseek(fp, SEEK_SET, 0);	// вернуться к началу файла
	fread(textBuffer, strlen(messageToWrite)+1, 1, fp);	// Прочитать сообщение из файла в textBuffer
	fseek(fp, 8, SEEK_SET);	// записывать с 8го символа
	fputs("Some message", fp);	// Запись в файл
	putc(ch, fp);	// печатать символ в файл


	// Команды ввода
	scanf ("Enter your name: %s", &name);
	gets (name);
	c = getchar();	// записываем результат в char c;

	// Команды вывода
	printf ("Hello, %s!\n", name);
	puts ("Something on the screen");

	// Основные конструкции программирования
	// Арифметические операторы
	+	// Сложение
	-	// Вычитание
	*	// Умножение
	/	// Деление (без остатка для int)
	%	// Остаток от деления
	++	// Увеличение int на 1 (++x || x++)
	--	// Уменьшение int на 1
	=	// Присвоение
	x += 2;	// x = x + 2
	x -= 2;	// x = x - 2
	x *= 2;	// x = x * 2
	x /= 2;	// x = x / 2
	x %= 2;	// x = x % 2
	(typecast)	// (int) x; (float) y - для изменения типа данных переменной
	// Логические операторы
	!	// не
	==	// равно
	!=	// не равно
	>	// больше
	<	// меньше
	>=	// больше или равно
	<=	// меньше или равно
	&&	// и
	||	// или
	()	// скобки для комбинации операторов
	// Логические операторы для двоичной системы
	&	// и
	|	// или
	^	// XOR
	~	// поразрядное дополнение (замена 0->1 и 1->0)
	>>	// сдвиг вправо (деление на 2)
	<<	// сдвиг влево (умножение на 2)
	?:	// оператор if-else
	resilt = (a > b) ? c : d	// то же самое, что и
	if(a > b){
		resilt = c;
	else
		resilt = d;
	// Математика
	sqrt()	// Корень ()

	// Условный оператор
	if (/* условие */){
		/* действие */
	}else if(/* другое условие */){
		/* другое действие */
	}else{
		/* третье действие */
	}

	switch (x) {
		case 1:
			printf ("Hello, Paul!\n");
			break;
		case 2:
			printf ("Hello, John!\n");
			break;
		default:
			return 0;
	}

	// Циклы (в отличие от рекурсии съедают меньше памяти компьютера)
	for (int i = 0; i < 100; ++i)	// Хорош, когда известно точное количество итераций
	{
		/* тело цикла */
	}

	while () {
		/* code */
	}

	do {

	} while ()	// В этом случае тело цикла прогоняется хотя бы раз

	break;	// Прерывает цикл


	return 0;
}

	// Задачи
// [Математика] Перевести сантиметры в дюймы
// [Математика] Перевести градусы Цельсия (температуру замерзания 0 и кипения 100) в градусы Фаренгейта и Кельвины по следующим формулам: F=C*9/5+32 и K=C+273.
// [Функции] С помощью рекурсивной функции вывести на экран все числа по порядку от меньшего к большему.
// [Условные операторы] Спросить стоимость акций. В зависимости от неё посоветовать продавать, покупать или удерживать акции. (Предельные цены покупки и продажи заданы)
// [Циклы] Создать горизонтальную столбчатую диаграмму.
// [Массивы] Улучшить горизонтальную столбчатую диаграмму, используя случайные значения в массиве.


// Источники
// [V] https://www.lynda.com/C-tutorials/C-Essential-Training/164457-2.html