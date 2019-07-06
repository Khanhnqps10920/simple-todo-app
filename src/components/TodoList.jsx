import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo list</h3>
        <TodoItem />
        <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">
          clear list
        </button>
        <h6 className="text-center">create by khánh đẹp zai :3</h6>
      </ul>
    );
  }
}

export default TodoList;