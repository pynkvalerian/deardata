import React from 'react';
import {Scatter} from 'react-roughviz'

export default class WeekOne extends React.Component {
  shouldComponentUpdate(nextProps) { // prevent chart from rendering twice due to window width calc
    return (this.props.messages !== nextProps.messages);
  }

  render() {
    return(
      <Scatter
        data={{
          x: [1,1,1,1,1,2,2,2,2,2,3,3,3,4,4,4,5,5,6,6],
          y: [8,16,16.5,20.5,22,8,12,15,16,18.5,9,11,23,11.5,17,22.5,9,17,9,11]
        }}
        title='Negative Emotions'
        x='Time'
        y='Days'
        fillWeight={4}
        radius={[20,30,50,10,20,20,30,30,30,50,20,20,50,30,30,40,20,20,20,10]}
        colors={["#fdcc8a","#fc8d59","#b30000","#fef0d9","#fdcc8a","#fdcc8a","#fc8d59","#fc8d59","#fc8d59","#b30000","#fdcc8a","#fdcc8a","#b30000","#fc8d59","#fc8d59","#e34a33","#fdcc8a","#fdcc8a","#fdcc8a","#fef0d9"]}
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
    )
  }
}
