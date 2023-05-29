import './App.css';
import { TodoApp } from './entities/TodoApp';
import { GlobalStyle } from './components/gloablStyles';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <TodoApp/>
      </header>
    </div>
  );
}

export default App;
