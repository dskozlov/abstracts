// D3


// CDN для HTML:
// <script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>

/*global d3:false */	// нужно для того, чтобы не ругался JSHint

// Выбор элемента
// d3.select('.item').text('select');

// Выбор всех элементов
// d3.selectAll('.item').text('select');

// Выбор конкретного(ых) элемента(ов)
// d3.selectAll('.item:nth-child(2)').text('select');

// Вставить элемент в конце
// d3.select('.item')
// 	.append('div')
// 	.html('<strong>selection</strong>');

// Вставить элемент на какое-то место
// d3.select('#chart')
// 	.insert('div', ':nth-child(3)')
// 	.html('<strong>selection</strong>');

// // Удаление
// d3.select('.item:nth-child(3)')
// 	.remove();

// Присвоить класс
// d3.selectAll('.item')
// 	.attr('class', 'highlight');

// Присвоить класс
// d3.selectAll('.item:nth-child(3)')
// 	.classed('highlight', true);

// Присвоить классы
// d3.selectAll('.item:nth-child(3)')
// 	.classed({
// 		'highlight': true,
// 		'item': false,
// 		'bigger': true
// 	});

// // Прописать класс
// d3.selectAll('.item:nth-child(3)')
// 	.style({
// 		'background': '#268BD2',
// 		'padding': '10px',
// 		'margin': '5px',
// 		'color': '#EEE8D5'
// 	});

// // Выбор элементов массива
// d3.selectAll('.item')
// 	.data([true, true, true])
// 	.style('background', '#268BD2');

// // Выбор элементов массива
// var myStyles = ['#268BD2'];
// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style('background', myStyles[0]);

// Цикл по всему диапазону data
// var myStyles = [
// 	'#268BD2',
// 	'#C61C6F',
// 	'#BD3613',
// 	'#595AB7',
// 	'#738A05',
// 	'#259286'
// ];
// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style('background', function(d){
// 		return d;
// 	});

// // Взаимодействие с массивом данных
// var myStyles = [
// 	'#268BD2',
// 	'#C61C6F',
// 	'#BD3613',
// 	'#595AB7',
// 	'#738A05',
// 	'#259286'
// ];
// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style({
// 		'color': 'white',
// 		'background': function(d){
// 			return d;
// 		}
// 	});

// // Взаимодействие с массивом данных
// var myStyles = [
// 	{	width: 230,
// 		color: '#268BD2'},
// 	{	width: 220,
// 		color: '#C61C6F'},
// 	{	width: 290,
// 		color: '#BD3613'},
// 	{	width: 236,
// 		color: '#595AB7'},
// 	{	width: 230,
// 		color: '#738A05'},
// 	{	width: 210,
// 		color: '#259286'}
// ];
// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style({
// 		'color': 'white',
// 		'background': function(d){
// 			return d.color;
// 		},
// 		'width': function(d){
// 			return d.width + 'px';
// 		}
// 	});

// Теперь в HTML остаётся только элемент с id="chart"

// // Взаимодействие с массивом данных
// var myStyles = [
// 	{	width: 230,
// 		name: 'Игорь',
// 		color: '#268BD2'},
// 	{	width: 220,
// 		name: 'Андрей',
// 		color: '#C61C6F'},
// 	{	width: 290,
// 		name: 'Алёна',
// 		color: '#BD3613'},
// 	{	width: 236,
// 		name: 'Антон',
// 		color: '#595AB7'},
// 	{	width: 230,
// 		name: 'Вася',
// 		color: '#738A05'},
// 	{	width: 210,
// 		name: 'Тигран',
// 		color: '#259286'}
// ];
// d3.selectAll('#chart').selectAll('div')	// Для того, чтобы div'ы вставились в #chart
// 	.data(myStyles)
// 	.enter().append('div')
// 	.classed('item', true)
// 	.text(function(d){
// 		return d.name;
// 	})
// 	.style({
// 		'color': 'white',
// 		'background': function(d){
// 			return d.color;
// 		},
// 		'width': function(d){
// 			return d.width + 'px';
// 		}
// 	});

// // Работа с SVG
// d3.select('#chart')
// 	.append('svg')
// 		.attr('width', 600)
// 		.attr('height', 400)
// 		.style('background', '#93A1A1')
// 	.append('rect')
// 		.attr('x', 200)
// 		.attr('y', 100)
// 		.attr('width', 200)
// 		.attr('height', 200)
// 		.style('fill', '#CB4B19');
// d3.select('svg')
// 	.append('circle')
// 		.attr('cx', 300)
// 		.attr('cy', 200)
// 		.attr('r', 50)
// 		.style('fill', '#840043 ');

// Много полезного также в примере d3_barchart.js

	// Pie Chart
var width = 400,
	height = 400,
	radius = 200,
	colors = d3.scale.category20c();	// предопределённые цвета

var piedata = [
	{
		label: "Игорь",
		value: 50
	},
	{
		label: "Алёна",
		value: 50
	},
	{
		label: "Андрей",
		value: 50
	}
];

var pie = d3.layout.pie()
	.value(function(d){
		return d.value;
	});

var arc = d3.svg.arc()
	.outerRadius(radius);

var myChart = d3.select('#piechart').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
	.selectAll('path').data(pie(piedata))
	.enter().append('g')
		.attr('class', 'slice');	// Сформировали кусочки для дальнейшей работы

var slices = d3.selectAll('g.slice')
	.append('path')
	.attr('fill', function(d, i){
		return colors(i);
	})
	.attr('d', arc);

var text =d3.selectAll('g.slice')
	.append('text')
	.text(function(d, i){
		return d.data.label;
	})
	.attr('text-anchor', 'middle')
	.attr('fill', 'black')
	.attr('transform', function(d){
		d.innerRadius = 0;
		d.outerRadius = radius;
		return 'translate(' + arc.centroid(d) + ')';
	})


// Источники
/*
	[V] https://www.lynda.com/D3js-tutorials/Data-Visualization-D3js/162449-2.html
	[ ] https://github.com/d3/d3/wiki/Scales (Про масштабирование)
	[ ] https://github.com/d3/d3/wiki/Transitions (Про анимацию)
	[ ] https://github.com/d3/d3/wiki/SVG-Axes (Про оси)
	[ ] http://bl.ocks.org/mbostock/3019563 (Про отступы)
	[ ] http://bl.ocks.org/mbostock (Куча примеров)
*/