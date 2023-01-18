import { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        // Daftarin method di constructor biar bisa kepanggil.
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() { 
        return (
            <>
            <h3> counter: {this.state.counter} </h3>
            <button onClick={this.increment}> + </button>
            <button onClick={this.decrement}> - </button>
            </>
        );
    }
}
 
export default MyComponent;