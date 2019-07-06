import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {

    const { items, clicked, deleteBtn, editBtn } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {
          items.map((todo) => {
            return <TodoItem
              key={todo.id}
              title={todo.title}
              deleteBtn={() => deleteBtn(todo.id)}
              editBtn={() => editBtn(todo.id)}
            />
          })
        }

        <button onClick={clicked} type="button" className="btn btn-danger btn-block text-capitalize mt-5">
          clear list
        </button>
        <h6 className="text-center">create by khánh đẹp zai :3</h6>
      </ul>
    );
  }
}

export default TodoList;