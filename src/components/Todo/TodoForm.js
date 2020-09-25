import React, {Component} from 'react';
import './Todo.css';


class TodoForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
  
      this.handleInputForm = this.handleInputForm.bind(this)
      this.handleClickBtn = this.handleClickBtn.bind(this)
    }
  
    handleInputForm(e) {
      this.setState({
        value: e.target.value
      })
    }
  
    handleClickBtn() {
      if (this.input.value !== '') {
        this.setState({
          value: ''
        })
        this.props.addTask(this.input.value)
      }
    }
  
    render() {
      return (
        <div className="row todo-form">
          <input 
            ref = {node => {this.input = node}}
            type="text"
            placeholder="Add your new task here!"
            value={this.state.value}
            onChange={this.handleInputForm}
          />
          <button onClick={this.handleClickBtn} className="my-btn btn btn-outline-success">Add</button>
          <p>{this.state.value}</p> 
        </div>
      )
    }
  }

  export default TodoForm;