import logo from './logo.svg';
import './App.css';
//import UserForm from './components/UserForm/Form';
//import {TodoFunction, Todo} from './components/Todo';
import Characters from './components/Character';
//import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   {/*     <TodoFunction></TodoFunction>
        <Todo labor={'Learn React'}></Todo>
  <Counter></Counter>
        <UserForm></UserForm>*/}
        <Characters></Characters>
      </header>
    </div>
  );
}

export default App;
