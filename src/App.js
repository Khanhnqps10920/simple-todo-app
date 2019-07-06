import React from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <Input
              item={this.state.item}
              changed={this.handleChange}
              clicked={this.handleSubmit} />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
