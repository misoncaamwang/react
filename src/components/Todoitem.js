import React from 'react';
//import ReactDOM from 'react-dom';

class Todoitem extends React.Component {
  render() {
    return (
        <div>
            <p>{this.props.todo.title}</p>
        </div>
    )
  }
}

export default Todoitem;