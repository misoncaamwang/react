import React from 'react';
import Todoitem from './Todoitem'
//import ReactDOM from 'react-dom';

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo}/>
    ))
  }
}

export default Todos;