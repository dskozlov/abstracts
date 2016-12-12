# three.js


Библиотека, использующая возможности WebGL для создания 3D сцен в браузере (в том числе и на мобильных устройствах).
Преимущества этой библиотеки:
- Наличие готовых графических примитивов
- Возможность импортировать модели популярных форматов
- Наличие полезных вспомогательных функций
- Реализованы пост-эффекты типа тумана, частиц, спрайтов
- Возможность работы с шейдерами
- Определение пересечений
- Много примеров
- Большое сообщество разработчиков

Создание проектов на three.js напоминает создание фильма, в котором присутствует
- сцена
- камера
- освещение
- актёры и декорации

Причины не увидеть объект:
- ошибка в коде
- перекрытие объектов
- отсутствие света
- маленький масштаб

## Сцена
```js
var scene = new THREE.Scene();
```


## Визуализатор
```js
var renderer = new THREE.WebGLRenderer();
```
Визуализатор сообщает библиотеке, каким образом будет отображаться контент

Задание размер области визуализатора (будущей сцены) и прикрепить к элементу DOM
```js
renderer.setSize(width, height);
document.getElementById("tag_id").appendChild(renderer.domElement);
```

Отображение сцены через камеру
```js
renderer.render(scene, camera);
```


## Свет
```js
var light = new THREE.AmbientLight(0xffffff);
```
Добавление на сцену
```js
scene.add(light);
```


## Камера
```js
var camera = new THREE.PerspectiveCamera(FOV, aspect_ratio, near_plane, far_plane);
```
- обычно `FOV` (Field of View) ∈ [35, 45] — поле зрения
- `aspect_ratio` = width / height — соотношение сторон
- `near_plane` [int] — расстояние до плоскости, ближе которой объекты не будут видны
- `far_plane` [int] — расстояние до плоскости, дальше которой объекты не будут видны

Добавление на сцену
```js
scene.add(camera);
```


## Общая методика создания объекта
Создаём геометрическую модель объекта
```js
var geometry = new THREE.BoxGeometry(1, 1, 1);
```
Готовим для него материал
```js
var material = new THREE.MeshBasicMaterial({color: 0xff0000});
```
Натягиваем материал на объект и получаем Mesh
```js
var box = THREE.Mesh(geometry, material);
```
Добавляем на сцену
```js
scene.add(box);
```


## Геометрические модели
### Встроенные модели (примитивы)
```js
new THREE.BoxGeometry(width, height, depth);
new THREE.SphereGeometry(radius, widthSegments, heightSegments);  // сфера
```

### Произвольные модели
готовим объект для модели
```js
var myGeometry = new THREE.Geometry();
```
добавляем вершины модели
```js
myGeometry.vertices.push(new THREE.Vector3(0, 1, 0));
myGeometry.vertices.push(new THREE.Vector3(-1, -1, 0));
myGeometry.vertices.push(new THREE.Vector3(1, -1, 0));
```
образуем грань из точек
```js
myGeometry.faces.push(new THREE.Face3(0, 1, 2));
```
Дополнительно можно задать цвет вершинам (тогда грань раскрасится по градиенту)
```js
myGeometry.faces[0].vertexColors[0] = new THREE.Color(0xff0000);
myGeometry.faces[0].vertexColors[1] = new THREE.Color(0x00ff00);
myGeometry.faces[0].vertexColors[2] = new THREE.Color(0x0000ff);
```
делаем Mesh
```js
myMesh = new THREE.Mesh(myGeometry);
```

### Импортированные модели
https://github.com/mrdoob/three.js/tree/dev/src/loaders
Для загрузки каждого из форматов (допустимы практические любые известные) требуется специальный загрузчик (loader), который можно взять из проекта three.js.
Стандартный (родной) формат — three.js
```js
var loader = THREE.JSONLoader();
loader.load("./obj.js", function (geometry) {
  obj = new THREE.Mesh(geometry);
  scene.add(obj);
});
```

### Экспортирование модели
производится с помощью вспомогательных библиотек GeometryExporter.js или SceneExporter.js


## Материалы
если материал не указывается, то объекту присваивается произвольный цвет
```js
.MeshBasicMaterial({ // не взаимодействует со светом
  vertexColors: THREE.VertexColors,
  side: THREE.DoubleSide
});
```

Примитивы, камеры, свет являются объектами класса Object3D.
Для объектов Object3D характерны следующие свойства
- `.id`
- `.uuid`
- `.name`
- `.position`
- `.userData`
- `.parent`
- `.children`

и методы
- `.getObjectByName()`
- `.getObjectById()`
- `.lookAt()`


## Трансформации
- `.position` — перемещение (в координатах)
- `.scale` — масштабирование (в коэффициентах)
- `.rotate` — вращение (вокруг соответствующей оси в радианах = градусы * pi / 180)
все трансформации родителей также распространяются и на детей

Трансформации могут задаваться тремя различными способами
```js
obj.position.x = 10;
obj.position.set(x, y, z);
obj.position = new THREE.Vector3(x, y, z);
```

### Модификации моделей
изменение положения вершины
```js
obj.geometry.vertices[0].z = 1;
```
Можно также вычитать модели друг из друга, складывать и оставлять пересечённую часть
http://evanw.github.io/csg.js/


## Вспомогательные элементы
### Отображение статистики
https://github.com/mrdoob/stats.js
```js
var stats = new Stats();
stats.setMode(0);
stats.domElement.style({
  position: "absolute",
  left: 0,
  top: 0
});
document.getElementById("tag_id").appendChild(stats.domElement);
// обновление статистики
stats.update();
```

## Инструменты
- [Текстовый онлайн редактор](https://threejs.org/editor/)
- [Интерактивный текстовый онлайн редактор](https://brian.peiris.io/RiftSketch/)
- [Текстовый CoffeeScript онлайн редактор](http://www.sketchpatch.net/labs/livecodelabIntro.html)
- [Логический онлайн редактор](http://idflood.github.io/ThreeNodes.js/)
- [Графический онлайн редактор](http://blackjk3.github.io/threefab/)
- https://aframe.io/
- https://clara.io/
- http://vr.chromeexperiments.com/
- http://www.shapespark.com/
- https://sparklinlabs.itch.io/superpowers

## Примеры
- http://www.vill.ee/eye/
- https://threejs.org/examples/#webgl_geometry_colors_lookuptable
- https://threejs.org/examples/#webgl_multiple_elements_text
- https://threejs.org/examples/#webgl_loader_pdb
- https://threejs.org/examples/#webgl_physics_convex_break
- https://threejs.org/examples/#css3d_periodictable
- https://threejs.org/examples/#canvas_ascii_effect
- https://threejs.org/examples/#webgl_loader_mmd
- https://threejs.org/examples/#webgl_loader_ctm_materials
- https://threejs.org/examples/#webgl_loader_collada_keyframe
- http://www.playkeepout.com/
- http://networkeffect.io/
- http://www.porsche.com/microsite/911/usa.aspx#showroom/911-carrera-s/3/3/50/0/0
- http://campaign.au.kddi.com/hello/
- http://oletus.github.io/lasertown/
- https://virtualart.chromeexperiments.com/
- https://predictiveworld.watchdogs.com/en/

## Коллекции примеров
- https://threejs.org/
- https://threejs.org/examples
- http://mrdoob.com/
- https://www.chromeexperiments.com/webgl
- https://www.chromeexperiments.com/globe
- http://helloenjoy.com/

## Интерактивные музыкальные клипы
- http://www.ro.me/
- http://acko.net/
- http://lights.helloenjoy.com/
- https://www.justareflektor.com/
- https://throughthedark.withgoogle.com/

## Источники
- [ ] https://threejs.org/docs/
- [ ] http://davidscottlyons.com/threejs/presentations/frontporch14/#slide-0
- [x] https://www.pluralsight.com/courses/webgl-threejs-fundamentals
- [ ] Jos Dirksen - Three.js Essentials - 2014
- [ ] Dirksen J. - Learning Three.js The JavaScript 3D Library for WebGL (2nd Edition) - 2015
- [ ] Frahaan Hussain - Three js and WebGL 3D Programming
- [ ] https://www.udemy.com/threejs-programming/
- [ ] Jos Dirksen - Three.js Cookbook - 2015
- [ ] Isaac Sukin - Game Development with Three.js - 2013
- [ ] https://aerotwist.com/tutorials/getting-started-with-three-js/
- [ ] http://www.smartjava.org/content/all-109-examples-my-book-threejs-threejs-version-r63
- [ ] http://learningwebgl.com/blog/?page_id=1217
- [ ] https://code.tutsplus.com/tutorials/webgl-with-threejs-basics--net-35688
- [ ] https://habrahabr.ru/post/224509/
- [ ] https://pragprog.com/book/csjava/3d-game-programming-for-kids
- [ ] http://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
- [ ] https://stemkoski.github.io/Three.js/

## Стоки моделей
- http://tf3dm.com/

## Альтернативные библиотеки для WebGL
- [Babylon.js](babylonjs.com)
- [PhiloGL](senchalabs.org/philogl)
- [03D](code.google.com/p/o3d)
- [GLGE](glge.org)
- [J3D](github.com/drojdjou/J3D)