import React, { useReducer } from "react";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todo-action";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [], // {id, text, complete}
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const deleteTodo = (todoId) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoId,
    });
  };

  const toggleTodo = (todoId) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoId,
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
