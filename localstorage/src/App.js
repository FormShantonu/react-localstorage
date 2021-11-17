import React, { useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Component/Todos";
import TodoFrom from "./Component/TodoFrom";

const App = () => {
  const [todos, setTodos] = useState([]);
  // useEffect(()=>{},[]) syntext
  // this function call automatically but if we want to add any dependency for that we have to 
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async todo=>{
    setTodos([...todos, todo]);
  }
  // create the dependency
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const markComplete = id=>{
    setTodos(todos.filter(todo=>todo.id != id));
  }
  return (
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoFrom addTodos={addTodos} />
    </Container>
  );
};

export default App;
