import React from 'react'; 
import SortingVisualizer from './SortingVisualizer/SortingVisualizer.js';


class App extends React.Component {
	render() {
		return(
			<div className="App">
				<h1>Bubble Sort Visualizer</h1>
				<SortingVisualizer />
			</div>
		)
	}
}

export default App;