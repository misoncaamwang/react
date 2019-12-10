// When creating a new component, import React and export the current component.
import React from 'react';

class TodoList extends React.Component {
    //State is just data.
    state = {
        name: 'Mison',
        age: 21
    }
    render() {
        return (
            <div>
                <h1>Hello World! My name is {this.state.name} and I am {this.state.age} years old.</h1>
            </div>
        )
    }
}

export default TodoList;