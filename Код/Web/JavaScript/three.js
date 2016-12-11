// three.js


// Библиотека, использующая возможности WebGL для создания 3D сцен в браузере (в том числе и на мобильных устройствах).
// Преимущества этой библиотеки:
// - Наличие готовых графических примитивов
// - Возможность импортировать модели популярных форматов
// - Наличие полезных вспомогательных функций
// - Реализованы пост-эффекты типа тумана, частиц, спрайтов
// - Возможность работы с шейдерами
// - Определение пересечений
// - Много примеров
// - Большое сообщество разработчиков

// Создание проектов на three.js напоминает создание фильма, в котором присутствует
// - сцена
// - камера
// - освещение
// - актёры и декорации


// Сцена
var scene = new THREE.Scene();


// Визуализатор
var renderer = new THREE.WebGLRenderer();
// Визуализатор сообщает библиотеке, каким образом будет отображаться контент

// Задание размер области визуализатора (будущей сцены) и прикрепить к элементу DOM
renderer.setSize(width, height);
document.getElementById("tag_id").appendChild(renderer.domElement);

// Отображение сцены через камеру
renderer.render(scene, camera);


// Свет
var light = new THREE.AmbientLight(0xffffff);
// Добавление на сцену
scene.add(light);


// Камера
var camera = new THREE.PerspectiveCamera(FOV, aspect_ratio, near_plane, far_plane);
// обычно FOV (Field of View) ∈ [35, 45] — поле зрения
// aspect_ratio = width / height — соотношение сторон
// near_plane [int] — расстояние до плоскости, ближе которой объекты не будут видны
// far_plane [int] — расстояние до плоскости, дальше которой объекты не будут видны

// Расположение камеры
camera.position.x = 10;
camera.position.y = 10;
camera.position.z = 10;
// Добавление на сцену
scene.add(camera);


// Примитивы
// Общая методика создания объекта
// Создаём геометрическую модель объекта
var geometry = new THREE.BoxGeometry(1, 1, 1);
// Готовим для него материал
var material = new THREE.MeshBasicMaterial({color: 0xff0000});
// Натягиваем материал на объект и получаем Mesh
var box = THREE.Mesh(geometry, material);
// Добавляем на сцену
scene.add(box);


// Инструменты
// [Текстовый онлайн редактор](https://threejs.org/editor/)
// [Интерактивный текстовый онлайн редактор](https://brian.peiris.io/RiftSketch/)
// [Текстовый CoffeeScript онлайн редактор](http://www.sketchpatch.net/labs/livecodelabIntro.html)
// [Логический онлайн редактор](http://idflood.github.io/ThreeNodes.js/)
// [Графический онлайн редактор](http://blackjk3.github.io/threefab/)
// https://aframe.io/
// https://clara.io/
// http://vr.chromeexperiments.com/
// http://www.shapespark.com/
// https://sparklinlabs.itch.io/superpowers

// Примеры
// http://www.vill.ee/eye/
// https://threejs.org/examples/#webgl_geometry_colors_lookuptable
// https://threejs.org/examples/#webgl_multiple_elements_text
// https://threejs.org/examples/#webgl_loader_pdb
// https://threejs.org/examples/#webgl_physics_convex_break
// https://threejs.org/examples/#css3d_periodictable
// https://threejs.org/examples/#canvas_ascii_effect
// https://threejs.org/examples/#webgl_loader_mmd
// https://threejs.org/examples/#webgl_loader_ctm_materials
// https://threejs.org/examples/#webgl_loader_collada_keyframe
// http://www.playkeepout.com/
// http://networkeffect.io/
// http://www.porsche.com/microsite/911/usa.aspx#showroom/911-carrera-s/3/3/50/0/0
// http://campaign.au.kddi.com/hello/
// http://oletus.github.io/lasertown/
// https://virtualart.chromeexperiments.com/
// https://predictiveworld.watchdogs.com/en/

// Коллекции примеров
// https://threejs.org/
// https://threejs.org/examples
// http://mrdoob.com/
// https://www.chromeexperiments.com/webgl
// https://www.chromeexperiments.com/globe
// http://helloenjoy.com/

// Интерактивные музыкальные клипы
// http://www.ro.me/
// http://acko.net/
// http://lights.helloenjoy.com/
// https://www.justareflektor.com/
// https://throughthedark.withgoogle.com/


// Источники
// [ ] https://www.pluralsight.com/courses/webgl-threejs-fundamentals
// [ ] https://aerotwist.com/tutorials/getting-started-with-three-js/
// [ ] http://www.smartjava.org/content/all-109-examples-my-book-threejs-threejs-version-r63
// [ ] https://threejs.org/docs/
// [ ] http://learningwebgl.com/blog/?page_id=1217
// [ ] https://code.tutsplus.com/tutorials/webgl-with-threejs-basics--net-35688
// [ ] https://habrahabr.ru/post/224509/
// https://pragprog.com/book/csjava/3d-game-programming-for-kids
// http://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
// https://stemkoski.github.io/Three.js/

// Альтернативные библиотеки для WebGL
// [Babylon.js](babylonjs.com)
// [PhiloGL](senchalabs.org/philogl)
// [03D](code.google.com/p/o3d)
// [GLGE](glge.org)
// [J3D](github.com/drojdjou/J3D)