import React, { useState } from "react";
import {
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { v4 } from "uuid";
// addTodos send like a parameter but it is a method
const TodoFrom = ({addTodos}) => {
  const [todoString, setTodoString] = useState("");
 
  const handelSubmit = e=>{
    e.preventDefault()
    if(todoString ==""){
      return alert("Filed can't be empty!")
    }
    const todo = {
      todoString,
      id:v4()
    }
    //TODO:
    addTodos(todo)
    setTodoString("");
  }
  return (
    <Form onSubmit={handelSubmit}>
      <FormGroup>
        <Input type="text" value="todo" id="todo" placeholder="todo" value={todoString} onChange = {e=>setTodoString(e.target)} />
        <InputGroupAddon>
          <Button color="success">Add Todo</Button>
        </InputGroupAddon>
      </FormGroup>
    </Form>
  );
};

export default TodoFrom;
