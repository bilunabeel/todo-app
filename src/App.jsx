import {useState} from 'react';
import Header from './section/Header';
import Hero from './section/Hero';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import SignUp from './section/SignUp';
import SignIn from './section/SignIn';

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



        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
