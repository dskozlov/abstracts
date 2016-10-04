	// Гистограмма
// // Конкретные значения
// var bardata = [20, 30, 105, 15, 50, 10, 40, 50, 60, 77, 88];
// // Случайные значения
// var bardata = [];
// for (var i = 0; i < 100; i++) {
// 	bardata.push(Math.round(Math.random()*20)+5);
// }
// Значения из файла
var bardata = [];
d3.tsv('data.tsv', function(data){	// Google Crome запрещает захват данных с другого сервера (но защиту можно отключить на время)
	for(key in data){
		bardata.push(data[key].value);
	}

		// Начало кода графика (в случае получения значений другим методом код засовывать в функцию не нужно)
	// // Сортировка
	// bardata.sort(function compareNumbers(a, b){
	// 	return a -b;
	// });

	// Отступы по краям (нужны для того, чтобы вместить оси)
	var margin = {top: 30, right: 30, bottom: 40, left:50};

	var width = 800 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom,
		tempColor;
		// barWidth = 50,
		// barOffset = 5;

	// Раскрашивание диаграммы
	var colors = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range(['#FFB832', '#D11C24']);	// цвета, соответствующие минимальному и максимальному значениям
		// .domain([0, d3.max(bardata)*0.5, d3.max(bardata)])
		// .range(['#FFB832', '#259286', '#C61C6F']);	// здесь включено также промежуточное значение (можно сделать сколько угодно)

	// Масштабирование по горизонтали
	var xScale = d3.scale.ordinal()
		.domain(d3.range(0, bardata.length))	// ширина полосок
		.rangeBands([0, width], 0.5, 0);		// отступы (диапазон, промежутки, какой отступ по бокам)

	// Масштабирование по вертикали (чтобы помещались все значения)
	var yScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height]);

	// Подсказка
	var tooltip = d3.select('body').append('div')
		.style('position', 'absolute')
		.style('padding', '0 10px')
		.style('background', 'white')
		.style('opacity', 0);

	// Задание диаграммы
	var myChart = d3.select('#barchart')
		.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			// .style('background', '#93A1A1')
		.append('g')	// добавление результатов в группу
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
		.selectAll('rect')
		.data(bardata)
		.enter()
		.append('rect')
			// .transition().duration(1000)	// задержка
			.style('fill', colors)
			.attr('width', xScale.rangeBand())
			.attr('x', function(d, i){
				return xScale(i);
			})
			// обнуляем значения для последующей анимации
			.attr('height', 0)
			.attr('y', height)
		.on('mouseover', function (d){
			tempColor = this.style.fill;
			d3.select(this)
				.style('opacity', 0.5)
				.style('fill', 'yellow');

			// Появление подсказки
			tooltip.transition()
				.style('opacity', 0.9);

			// Расположение подсказки
			tooltip.html(d)
				.style('left', (d3.event.pageX - 20) + 'px')
				.style('top', (d3.event.pageY - 30) + 'px');
		})
		.on('mouseout', function (d){
			d3.select(this)
				.style('opacity', 1)
				.style('fill', tempColor);

			// Исчезновение подсказки
			tooltip.transition()
				.style('opacity', 0);
		});

	// Анимирование диаграммы
	myChart.transition()
			.attr('height', function(d){
				return yScale(d);
			})
			.attr('y', function(d){
				return height - yScale(d);
			})
			.delay(function(d, i){	// задержка появления каждого столбика
				return i * 10;
			})
			.duration(1000)		// время появления каждого столбика
			.ease('elastic');	// способ возникновения столбиков

			// Оси координат
		// горизонтальная ось
	// Диапазон оси
	var vGuideScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([height, 0]);

	// Создание оси
	var vAxis = d3.svg.axis()
		.scale(vGuideScale)
		.orient('left')
		.ticks(10);

	// Положение оси
	var vGuide = d3.select('svg').append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	// Применить стиль к оси
	vAxis(vGuide);

	// Стиль оси
	vGuide.selectAll('path')
		.style({
			fill: 'none',
			stroke: "#000"
		});

	// Стиль отметок (делений)
	vGuide.selectAll('line')
		.style({
			stroke: "#000"
		});

		// вертикальная ось
	// Определение цены деления
	var hAxisTicks = [];
	for (var i = 0; i < bardata.length; i+=10) {
		hAxisTicks.push(i);
	}
	// Создание оси
	var hAxis = d3.svg.axis()
		.scale(xScale)
		.orient('bottom')
		.tickValues(hAxisTicks);
		// .tickValues(xScale.domain().filter(function(d, i){
		// 	return !(i % (bardata.length/5));
		// }));

	// Положение оси
	var hGuide = d3.select('svg').append('g')
		.attr('transform', 'translate(' + margin.left + ',' + (height + margin.top) + ')');

	// Применить стиль к оси
	hAxis(hGuide);

	// Стиль оси
	hGuide.selectAll('path')
		.style({
			fill: 'none',
			stroke: "#000"
		});

	// Стиль отметок (делений)
	hGuide.selectAll('line')
		.style({
			stroke: "#000"
		});
});	// Конец захвата данных из файла