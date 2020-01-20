import React from 'react'; 
import './SortingVisualizer.css'

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    // Lifecycle method.
    componentDidMount() {
        this.resetArray()
    }

    // New Function.
    resetArray() {
        // console.log(randomNumFromInterval(0,10));
        let array = [];
        for(let i = 0; i < 300; i++) {
            array.push(randomNumFromInterval(5,720));   
        }
        this.setState({array: array});
    }

    //Bubble Sort.
    bubbleSort() {
        let {array} = this.state;
        // [13,4,5,2,1,3,1]
        // [4,5,2,1,3,1,13]
        // [4,2,1,3,1,5,13]
        // [2,1,3,1,4,5,13]
        // [1,2,1,3,4,5,13]
        // [1,1,2,3,4,5,13]
       
        
        for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length; j++) {
                if(array[j] > array[j+1]) {
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
            
        }
        this.setState({array: array});
        
    }

    render() {
        let array = this.state.array;

        return(
            <div className="main">
                <div>
                    <button onClick={()=>this.resetArray()}>Generate New Values</button>
                    <button className="bubble-sort" onClick={()=> this.bubbleSort()}>Bubble Sort</button>
                </div>

                <div className="array-container">
                    {array.map((value, index)=>(
                        <div 
                            className="array-bar" 
                            key={index}
                            style={{height: `${value}px`}}
                        >
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

// Generates a random integer from a given interval. 
function randomNumFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



export default SortingVisualizer;