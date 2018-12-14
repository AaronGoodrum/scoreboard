import React, { Component } from 'react'

class Stopwatch extends Component {
    state= {
        clock: 0, 
        elapsedTime: 0,
        prevTime: 0 ,
        isRunning: false
    }

    componentDidMount(){
       this.intervalID = setInterval(() => this.tick(), 100)
    }
    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                prevTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.prevTime)
            }))
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }))
        if (!this.state.isRunning){
            this.setState({ prevTime: Date.now() })    
        }
    };

    resetClock = () => {
        this.setState({clock: 0, elapsedTime: 0, isRunning: false})
    };


    render() {
        return (
            <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{this.state.clock}</span>
            <button onClick={this.handleStopwatch.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</button> 
            <button onClick={this.resetClock.bind(this)}>Reset</button>
            </div>
        )
    }

}


export default Stopwatch;