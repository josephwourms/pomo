import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'material-ui/styles/colors';

import TimeSpinner from './components/TimeSpinner';
import TimeDisplay from './components/TimeDisplay';

import formatTime from './lib/core';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      working: false,
      started: false,
      time: 5,
      workTime: 5,
      breakTime: 10,
      prompt: 'Tap to begin',
      status: 'Work Session',
      percentDone: 0,
    };
    
    this.initialTime = this.state.workTime;
    
    this.onWorkSpinnerChange = this.onWorkSpinnerChange.bind(this);
    this.onBreakSpinnerChange = this.onBreakSpinnerChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
  }
  
  onWorkSpinnerChange(e, value) {
    this.setState({
      workTime: value,
      time: value,
    });
  }
  
  onBreakSpinnerChange(e, value) {
    this.setState({
      breakTime: value,
    });
  }
  
  onClick(e) {
    if (this.state.started) {
      this.setState(prevState => ({
        started: !prevState.started,
        working: !prevState.working,
      }));
      this.setState({
        prompt: 'Tap to begin',
      })
      this.stopTimer();
    } else {
      this.setState(prevState => ({
        started: !prevState.started,
        working: !prevState.working,
      }));
      this.setState({
        prompt: 'Tap to stop',
      })
      this.startTimer();
    }
  }
  
  startTimer() {
    this.timer = setInterval(this.tick, 1000);
  }
  
  stopTimer() {
    clearInterval(this.timer);
  }
  
  tick() {
    if (this.state.time <= 0) {
      if (this.state.working) {
        this.setState(prevState => ({
          working: !prevState.working,
        }));
        this.setState({
          time: this.state.breakTime,
          status: 'Break Session',
        });
      } else {
        this.setState(prevState => ({
          working: !prevState.working,
        }));
        this.setState({
          time: this.state.workTime,
          status: 'Work Session',
        });
      }
    }
    this.setState(prevState => ({
      time: prevState.time - 1,
      percentDone: (this.initialTime - (prevState.time - 1)) * 100 / this.initialTime,
    }));
  }
  
  render() {
    let time = this.state.time;
    this.initialTime = this.state.working ? this.state.workTime : this.state.breakTime;
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Pomo" />
          <div className="AppBody">
            <TimeSpinner label="Work" value={1500} onChange={this.onWorkSpinnerChange} />
            <TimeSpinner label="Break" value={300} onChange={this.onBreakSpinnerChange} />
            <TimeDisplay 
              time={formatTime(time)} 
              prompt={this.state.prompt} 
              status={this.state.status}
              percentDone={this.state.percentDone}
              onClick={this.onClick}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
