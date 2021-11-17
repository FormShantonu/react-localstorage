import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icon/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 md-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-right" onClick = {()=>markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
