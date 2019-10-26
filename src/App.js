import React from 'react';
import LineChart from './components/lineChart'
import windowSize from 'react-window-size';
import ReactGA from 'react-ga';

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
      dataURL: "https://raw.githubusercontent.com/pynkvalerian/deardata/master/data",
      dataJson: null
    }
  }

  componentDidMount() {
    ReactGA.initialize('UA-79655857-1');
    ReactGA.pageview("/deardata");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dear Data by Ping</h1>
          <small>Inspired by <a class="App-link" href="http://www.dear-data.com/theproject">Dear Data</a></small>
        </header>
        <div className="container">
          <div className="row">
            <div className="one-half column" id="week-one">
              <LineChart
                data="https://raw.githubusercontent.com/pynkvalerian/deardata/master/data/weekOne.csv"
                y1='monday'
                y2='tuesday'
                y3='wednesday'
                y4='thursday'
                y5='friday'
                width={this.state.maxWidth}
              />
            </div>
            <div className="one-half column">
              <small>2019 Oct 20</small>
              <h3>Week One: A Week of Negative Emotions</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default windowSize(App);
