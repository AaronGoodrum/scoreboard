import React, { Component } from 'react'

class Stopwatch extends Component {
    state= {
        clock: 0, time:''
    }

    startClock() {
        this.setState({clock: 10, time: '' })
      };

    resetClock() {
        this.setState({clock: 0, time: '' })
    };


    render() {
        return (
            <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{this.state.clock}</span>
            <button onClick={this.startClock.bind(this)}>Start</button> 
            <button onClick={this.resetClock.bind(this)}>Reset</button>
            </div>
        )
    }

}


export default Stopwatch;