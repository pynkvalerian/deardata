import React from 'react';
import windowSize from 'react-window-size';
import ReactGA from 'react-ga';
import WeekOne from './components/weekOne';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    let maxWidth;
    if (props.windowWidth > 550) {
      maxWidth = 960/2
    } else {
      maxWidth = props.windowWidth * .9
    }

    this.state = {
      maxWidth: maxWidth,
    }
  }

  componentDidMount() {
    ReactGA.initialize('UA-79655857-1');
    if (window.location.href.match(/deardata/)) {
      ReactGA.pageview("/deardata");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dear Data by Ping</h1>
          <small>Inspired by <a className="App-link" href="http://www.dear-data.com/theproject">Dear Data</a></small>
        </header>
        <div className="container">
          <div className="row week-header">
            <div className="twelve columns">
              <small>2019 Oct 20</small>
              <h3>Week One: A Week of Negative Emotions</h3>
            </div>
          </div>
          <WeekOne maxWidth={this.state.maxWidth}/>
        </div>
      </div>
    );
  }
}

export default windowSize(App);
