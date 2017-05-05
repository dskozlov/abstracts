// React.js


// React работает очень быстро благодаря использованию Virtual DOM (который генерируется до разметки).
// Код подсвечивать лучше как JavaScript (Babel)

// Компоненты
// Первый способ создания
class App extends React.Component {
  render() {
    var name = "Игорь";
    // Шаблон компоненты написанный на JSX
    return (
      <p className="paragraph">Привет, { name }!</p> {/* вместо class (зарезервированное слово) употребляется className */}
      <input type="text"/> {/* теги, которые не закрываются обязательно должны содержать слеш */}
      <CompName name={ name }/> {/* использование других компонент и передача параметра */}
    );
  }
}
// Второй способ создания
var CompName = React.createClass({
  render: function() {
    return (
      <p>Привет, { this.props.name }!</p> {/* приём параметра */}
    );
  }
});
// Теперь теперь поместим (отрендерим) компоненту <CompName/> внутри тега #app
ReactDOM.render(<App/>, document.querySelector('#app'));


// Роутер
// https://github.com/ReactTraining/react-router — инструмент для настройки путей в приложении
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component="CompName"/>
    <Route path="/user/:userId" component="UserComp"/>
    <Route path="*" component="NotFoundComp"/>
  </Router>
);


// Обработка событий
var FormComp = React.createClass({
  mixins: [ReactRouter.History], // добавляем миксин для навигации
  sendForm: function(event) {
    event.preventDefault();
    this.history.pushState(null, "/user/" + this.refs.userId.value); // переходим на страницу пользователя
  },
  render: function() {
    return (
      <form onSubmit={ this.sendForm }>
        <input type="text" ref="userId" defaultValue="123"/>
        <input type="submit"/>
      </form>
    );
  }
});


// Инструменты
// [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

// Источники
// https://facebook.github.io/react/
// https://www.codeschool.com/courses/powering-up-with-react
// https://reactforbeginners.com/
  // https://github.com/wesbos/React-For-Beginners-Starter-Files