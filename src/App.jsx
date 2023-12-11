import {useState} from 'react';
import Header from './section/Header';
import Hero from './section/Hero';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './section/Footer';

function App () {
  const [todo, setTodo] = useState ('');
  const [todos, setTodos] = useState ([]);

  return (
    <Router>

      <div>
        <Header
          todo={todo}
          setTodo={setTodo}
          todos={todos}
          setTodos={setTodos}
        />
        <Hero todos={todos} setTodos={setTodos} />
<Footer/>


      </div>
    </Router>
  );
}

export default App;
