import React, { Component } from 'react';

class Input extends Component {
  render() {

    const { item, changed, clicked } = this.props;

    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              value={item}
              onChange={changed}
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item" />
          </div>
          <button
            onClick={clicked}
            type="submit"
            className="btn btn-block btn-primary mt-3">add item</button>
        </form>
      </div>
    );
  }
}

export default Input;