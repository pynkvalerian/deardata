import React from 'react';
import {Scatter} from 'react-roughviz'

export default class WeekOne extends React.Component {
  shouldComponentUpdate(nextProps) { // prevent chart from rendering twice due to window width calc
    return (this.props.messages !== nextProps.messages);
  }

  render() {
    return(
      <div className="row">
        <div className="one-half column">
          <Scatter
            data={{
              x: [1,1,1,1,1,2,2,2,2,2,3,3,3,4,4,4,5,5,6,6,6,7,7,7],
              y: [8,16,16.5,20.5,22,8,12,15,16,18.5,9,11,23,11.5,17,22.5,9,17,9,11,21,10,13,17.5]
            }}
            title='Negative Emotions'
            fillWeight={4}
            radius={[20,30,50,10,20,20,30,30,30,50,20,20,50,30,30,40,20,20,20,10,10,10,20,20]}
            colors={["#fdcc8a","#fc8d59","#b30000","#fef0d9","#fdcc8a","#fdcc8a","#fc8d59","#fc8d59","#fc8d59","#b30000","#fdcc8a","#fdcc8a","#b30000","#fc8d59","#fc8d59","#e34a33","#fdcc8a","#fdcc8a","#fdcc8a","#fef0d9","#fef0d9","#fef0d9","#fdcc8a","#fdcc8a"]}
            stroke='red'
            strokeWidth={0.4}
            roughness={1}
            width={this.props.maxWidth}
            height={450}
            font={0}
            yLabel='Hour'
            xLabel='Day of the Week'
            curbZero={false}
            labelFontSize='1.5rem'
            margin={{top: 50, right: 30, bottom: 50, left: 60}}
          />
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
          <p className="description-header">How to interpret:</p>
          <p>Each bubble represent when I have negative thoughts. The larger the bubble and the darker the color, the more severe the negativity.</p>
          <p>For example, the small yellow bubble on Friday morning is for the time I was mildly annoyed at myself for letting someone's words affect me, while the dark red bubble on Wednesday night is for the time when I cried because I was feeling lost and alone.</p>
          <p className="description-header">What I've learnt:</p>
          <p>I was more mindful of my negative thoughts throughout the week, and writing down the reason/trigger helped me realise a few things:</p>
          <ul>
            <li>I realised that sometimes I worry about things that are out of my control. For example, there were a few times in the week when I was worried about the signups for an event, but I realised that I've done my best to market an event, and worrying about it doesn't really help with my state of mind.</li>
            <li>I tend to have minor negative thoughts in the morning, usually when I'm getting ready to go to work. Probably need to monitor further on how it impacts the rest of my day.</li>
          </ul>
        </div>
      </div>
    )
  }
}
