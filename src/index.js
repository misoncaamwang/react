import React from 'react'; // This is the main React Librart
import ReactDOM from 'react-dom'; // This injects react to the DOM.
import App from './App';

// Can use bable to compile jsx to javascript
// React starts in this file. App is a componenet which is rendered. 
// ReactDOM is needed to render all the components.
ReactDOM.render(<App />, document.getElementById('root'));
