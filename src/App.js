import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import { connect } from 'react-redux'
import { addTodo, delTodo, lineTodo, editTodo } from './actions/actions'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      edit: false
    }
  }
  handleChange = e => {
    // this.setState({ text: e.target.value, id: uuidv4(), para: false })
    this.setState({ text: e.target.value })

  }

  addOrEdit = () => {
    if (this.state.edit) {
      this.props.editNewTodo(this.state) // this.state win fama l todo eli editineha (text, id, complete) 
      this.setState({ text: '', edit: false }) // reset lel this.state.text farra8neh 
      //this.state.edit to false (bech el button yarja3 add)
    } else {
      this.props.addNewTodo({ text: this.state.text, id: uuidv4(), complete: false })
      this.setState({ text: '', edit: false })
    }
  }
  saveTodo = todos => {
    this.setState({ ...todos, edit: true })
  }
  render() {
    return (
      <div className="todo">

        <div className="objet  ">
          <div className="todo">
            <h1>Daily To Do List<br /><br /> </h1>
          </div>
          <div><input value={this.state.text} name="organism" type="text" onChange={this.handleChange} className="form-control " placeholder="Add your todo" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div><button className="btn btn-info" onClick={this.addOrEdit}>{this.state.edit ? 'Edit' : 'ADD'} </button></div>
          {/* <div><button onClick={() => this.props.addNewTodo({ text: this.state.text, id: uuidv4() })} type="button" className="btn btn-info">Add</button></div> */}
        </div>
        <div></div>
        <div className="container d-flex ">
          {this.props.allTodos.map(el =>
            <div className="btnr">
              <button onClick={() => this.props.lineNewTodo(el.id)} type="button" className="btn btn-info">{el.para ? 'undo' : 'complete'}</button>
              <button onClick={() => this.props.delNewTodo(el.id)} type="button" className="btn btn-info">Delete</button>
              {/* <button onClick={() => this.editMode(el)} type="button" className="btn btn-info">Edit</button> */}
              <button className="btn btn-info" onClick={() => this.saveTodo(el)}>Edit</button>
              <h1 className={el.para ? "coucou" : ""}>{el.text}</h1>
              {/* onClick={() => organisme = this.props.editNewTodo(el.id)} */}
            </div>
          )}
        </div >
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    allTodos: state.todos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: todo => dispatch(addTodo(todo)),
    delNewTodo: todo => dispatch(delTodo(todo)),
    lineNewTodo: todo => dispatch(lineTodo(todo)),
    editNewTodo: todo => dispatch(editTodo(todo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
