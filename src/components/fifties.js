import React, { Component } from 'react';
import FiftiesData from '../json/fifties.json';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  Hint,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';
import { PieChart, Pie, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <p
        style={{
          borderRadius: '5px',
          backgroundColor: '#181818',
          opacity: '0.8',
          padding: '2px',
          color: 'white'
        }}
      >
        <span>Opposition:{payload[0].payload.opposition}</span>
        <br />
        <span>Fifties:{payload[0].payload.fifties}</span>
      </p>
    );
  }

  return null;
};

class Fifties extends Component {
  state = {
    yearlyFiftiesHoverBar: false,
    montlyFiftiesHoverBar: false
  };

  render() {
    const { yearlyFiftiesHoverBar, montlyFiftiesHoverBar } = this.state;
    return (
      <div className="runStats">
        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={600}
          height={350}
          getX={d => d.year}
          getY={d => d.fifties}
          margin={{ left: 75, bottom: 60 }}
          color="#74cdf5"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            data={FiftiesData.yearWiseFifties}
            onValueMouseOver={val =>
              this.setState({ yearlyFiftiesHoverBar: val })
            }
            onValueMouseOut={() =>
              this.setState({ yearlyFiftiesHoverBar: false })
            }
          />
          {yearlyFiftiesHoverBar && (
            <Hint value={yearlyFiftiesHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Year:{yearlyFiftiesHoverBar.year}</span>
                <br />
                <span>Fifties:{yearlyFiftiesHoverBar.fifties}</span>
              </p>
            </Hint>
          )}
          <XAxis tickLabelAngle={-45} />
          <YAxis />
        </XYPlot>

        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={600}
          height={350}
          getX={d => d.month}
          getY={d => d.fifties}
          margin={{ left: 75, bottom: 60 }}
          color="#74cdf5"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            data={FiftiesData.monthWiseFifties}
            onValueMouseOver={val =>
              this.setState({ montlyFiftiesHoverBar: val })
            }
            onValueMouseOut={() =>
              this.setState({ montlyFiftiesHoverBar: false })
            }
          />
          {montlyFiftiesHoverBar && (
            <Hint value={montlyFiftiesHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Month:{montlyFiftiesHoverBar.month}</span>
                <br />
                <span>Fifties:{montlyFiftiesHoverBar.fifties}</span>
              </p>
            </Hint>
          )}
          <XAxis tickLabelAngle={-45} />
          <YAxis />
        </XYPlot>

        <PieChart width={400} height={400}>
          <Pie
            dataKey="fifties"
            isAnimationActive={true}
            data={FiftiesData.opponentWiseFifties}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip content={CustomTooltip} />
        </PieChart>
      </div>
    );
  }
}

export default Fifties;
