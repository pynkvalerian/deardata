import React from 'react';
import {Line} from 'react-roughviz'

class LineChart extends React.Component {
  shouldComponentUpdate(nextProps) { // prevent chart from rendering twice due to window width calc
    return (this.props.messages !== nextProps.messages);
  }

  render() {
    const {data, y1, y2, y3, y4, y5, y6, y7, width} = this.props

    return (
      <Line
        data={data}
        y1={y1}
        y2={y2}
        y3={y3}
        y4={y4}
        y5={y5}
        xLabel='Hour'
        colors={["#F58272","#F08AB2","#B5A8E1","#59C3E2","#3AD2B4","#8DD575","#E1CA51"]}
        legendPosition="left"
        margin={{top: 50, right: 20, bottom: 70, left: 30}}
        circleRoughness={1}
        strokeWidth={3}
        roughness={1}
        labelFontSize='2rem'
        tooltipFontSize='5rem'
        axisFontSize="1.5rem"
        axisRoughness={0.3}
        axisStrokeWidth={.5}
        bowing={1}
        width={width}
      />
    );
  }
}

export default LineChart
