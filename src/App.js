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
          <div className="row">
            <div className="one-half column" id="week-one">
              <WeekOne maxWidth={this.state.maxWidth}/>
            </div>
            <div className="one-half column">
              <p>I thought it would be interesting to track the negative emotions I have throughout my period week. So my period came on Tuesday, and it seems my mood were somewhat affected by it.</p>
              <p>To make it simple to track, I set up a Google sheets with 4 columns:</p>
              <ol>
                <li>Day of the week</li>
                <li>Time of the day</li>
                <li>Scale of 1-5 (to represent how bad the negativity is, the higher the scale the worse it is)</li>
                <li>Reason or triggers</li>
              </ol>
              <p>I was more mindful of my negative thoughts throughout the week, and writing down the reason/trigger helped me realise a few things:</p>
              <ul>
                <li>I realised that sometimes I worry about things that are out of my control. For example, there were a few times in the week when I was worried about the signups for an event, but I realised that I've done my best to market an event, and worrying about it doesn't really help with my state of mind.</li>
                <li>I tend to have minor negative thoughts in the morning, usually when I'm getting ready to go to work. Probably need to monitor further on how it impacts the rest of my day.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default windowSize(App);
