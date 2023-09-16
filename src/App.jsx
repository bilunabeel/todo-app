import {useState} from 'react';
import Header from './section/Header';
import Hero from './section/Hero';

function App () {
  const [todo, setTodo] = useState ('');
  const [todos, setTodos] = useState ([]);

  return (
    <div>
      <Header todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <Hero  todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
