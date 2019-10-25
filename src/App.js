import React from 'react';
import {Line} from 'react-roughviz'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dear Data by Ping</h1>
        <small>Inspired by <a href="http://www.dear-data.com/theproject">Dear Data</a></small>
      </header>
      <div className="container">
        <div className="row">
          <div className="ten columns">
            <Line
              data='https://raw.githubusercontent.com/pynkvalerian/deardata/master/data/weekOne.csv'
              title='Week one - a week of negative emotions'
              y='monday'
              y2='tuesday'
              y3='wednesday'
              y4='thursday'
              yLabel='Negative emotions'
              xLabel='Time'
              circleRoughness={1}
              circleRadius={1}
              strokeWidth={3}
              roughness={1}
              width={window.innerWidth * .7}
              labelFontSize='2rem'
              tooltipFontSize='5rem'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
