import React from 'react';
import TodoList from './TodoList';

//This is the root. Class based component. App is able to inherit all the methonds from React.Componenet (React was imported in line one) object because its a sub-class
class App extends React.Component {
	render() {
		return (
			<div>
				<TodoList />
			</div>
		  )
	}
}

export default App;
