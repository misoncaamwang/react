import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  // State is getting passed to Todo component here. You can acess this in Todos.js as props
  state = {
    todo: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Learn React',
        completed: false
      },
      {
        id: 3,
        title: 'Finish dinner',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todo}/>
      </div>
    );
  }
}

export default App;
