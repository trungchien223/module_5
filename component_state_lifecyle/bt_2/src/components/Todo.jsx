import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      list: []
    }
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleAddItem = () => {
    if (this.state.item.trim() !== '') {
      this.setState(prevState => ({
        list: [...prevState.list, prevState.item],
        item: ''
      }))
    }
  }

  render() {
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        
        <div className="input-section">
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
            placeholder="Nhập công việc cần làm"
            className="todo-input"
          />
          <button onClick={this.handleAddItem} className="add-button">
            Add
          </button>
        </div>

        <div className="todo-list">
          {this.state.list.map((todo, index) => (
            <div key={index} className="todo-item">
              {todo}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Todo
