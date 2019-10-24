import React from 'react';
import {Bar, Donut, Line} from 'react-roughviz'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="ten columns">
              <h1>Dear Data by Ping</h1>
              <Line
                data='https://raw.githubusercontent.com/jwilber/random_data/master/tweets.csv'
                title='Line Chart'
                y='favorites'
                y2='retweets'
                y3='tweets'
                yLabel='Negative emotions'
                xLabel='Time'
                colorVar='continent'
                highlightLabel='country'
                highlight='red'
                strokeWidth={3}
                roughness={1}
                width={window.innerWidth * .7}
                labelFontSize='2rem'
                tooltipFontSize='5rem'
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
