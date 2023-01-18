import { Component }  from 'react'

class ClassComponent extends Component {
    state = { counter: 0 } 

    increment = () => {
        // state component state
        this.setState({
            counter: this.state.counter += 1
        })
    }

    decrement= () => {
        this.setState({
            counter: this.state.counter -= 1
        })
    }

    render() { 
        return (
            <div>
                <h1> Hello </h1>
                <h2> counter: {this.state.counter} </h2> 
                <button onClick={this.increment}> + </button>
                <button onClick={this.decrement}> - </button>
            </div>
            
        );
    }
}
 
export default ClassComponent;