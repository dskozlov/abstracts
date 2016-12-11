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
// Для отображения сцены в тех браузерах, в которых нет поддержки WebGL:
var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();


// Инструменты
// [Онлайн редактор](https://threejs.org/editor/)

// Примеры
// https://stemkoski.github.io/Three.js/
// https://github.com/stemkoski/three.js
// https://github.com/mrdoob/three.js
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

// Источники
// [ ] https://www.pluralsight.com/courses/webgl-threejs-fundamentals
// [ ] https://aerotwist.com/tutorials/getting-started-with-three-js/
// [ ] http://www.smartjava.org/content/all-109-examples-my-book-threejs-threejs-version-r63
// [ ] https://threejs.org/docs/
// [ ] http://learningwebgl.com/blog/?page_id=1217
// [ ] https://code.tutsplus.com/tutorials/webgl-with-threejs-basics--net-35688
// [ ] https://habrahabr.ru/post/224509/
// https://pragprog.com/book/csjava/3d-game-programming-for-kids

// Альтернативные библиотеки для WebGL
// [Babylon.js](babylonjs.com)
// [PhiloGL](senchalabs.org/philogl)
// [03D](code.google.com/p/o3d)
// [GLGE](glge.org)
// [J3D](github.com/drojdjou/J3D)