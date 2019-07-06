import React, { Component } from 'react';

class TodoItem extends Component {
  render() {

    const { title, deleteBtn, editBtn } = this.props

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span onClick={editBtn} className="mx-2 text-sucess"><i className="fas fa-pen"></i></span>
          <span onClick={deleteBtn} className="mx-2 text-danger"><i className="fas fa-trash"></i></span>
        </div>
      </li>
    );
  }
}

export default TodoItem; 