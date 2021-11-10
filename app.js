import React, { Component, useState } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.interval;
    this.state = {
      hour: ((new Date().getHours() - 1) % 12) + 1,
      min:
        new Date().getMinutes() < 10
          ? '0' + new Date().getMinutes()
          : new Date().getMinutes(),
      sec:
        new Date().getSeconds() < 10
          ? '0' + new Date().getSeconds()
          : new Date().getSeconds(),
      status:
        new Date().getHours() < 24 && new Date().getHours() > 11 ? 'PM' : 'AM',
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        hour: ((new Date().getHours() - 1) % 12) + 1,
        min:
          new Date().getMinutes() < 10
            ? '0' + new Date().getMinutes()
            : new Date().getMinutes(),
        sec:
          new Date().getSeconds() < 10
            ? '0' + new Date().getSeconds()
            : new Date().getSeconds(),
        status:
          new Date().getHours() < 24 && new Date().getHours() > 11
            ? 'PM'
            : 'AM',
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <div className="Clock">
          <h3 id="time">
            {this.state.hour +
              ':' +
              this.state.min +
              ':' +
              this.state.sec +
              ' ' +
              this.state.status}
          </h3>
        </div>
      </>
    );
  }
}

export default App;
