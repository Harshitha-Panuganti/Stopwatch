import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    this.setState({timeElapsedInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{timer}</h1>
            <div className="timer-buttons">
              <button
                onClick={this.onStartTimer}
                className="start-button button"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onStopTimer}
                className="stop-button button"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onResetTimer}
                className="reset-button button"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
