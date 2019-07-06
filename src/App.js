import React from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    items: [],
    id: uuid(),
    title: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.title
    }
    console.log(newItem);

    const updateTodoList = [...this.state.items];
    updateTodoList.push(newItem);
    this.setState({
      items: updateTodoList,
      title: '',
      id: uuid(),
      editItem: false,
    });

  }

  clearList = () => {
    this.setState({
      items: [],
    })
  }

  handleDelete = (id) => {
    const items = [...this.state.items];

    const filterItems = items.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      items: filterItems,
    });
  }

  handleEdit = (id) => {

    const items = [...this.state.items];
    const filterItems = items.filter((todo) => {
      return todo.id !== id;
    });

    const selectedItem = items.find(item => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filterItems,
      title: selectedItem.title,
      editItem: true,
      id: id
    });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <Input
              title={this.state.title}
              changed={this.handleChange}
              clicked={this.handleSubmit}
              editItem={this.state.editItem} />
            <TodoList
              clicked={this.clearList}
              items={this.state.items}
              deleteBtn={this.handleDelete}
              editBtn={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
