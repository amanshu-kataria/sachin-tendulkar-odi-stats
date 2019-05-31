import React, { Component } from 'react';
import InningsData from '../json/innings.json';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  Hint,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

class Innings extends Component {
  state = {
    matchesHoverBar: false,
    centuriesHoverBar: false,
    runsHoverBar: false,
    winsHoverBar: false
  };
  render() {
    const {
      matchesHoverBar,
      centuriesHoverBar,
      runsHoverBar,
      winsHoverBar
    } = this.state;
    return (
      <div className="runStats">
        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={200}
          height={200}
          getX={d => d.innings}
          getY={d => d.matches}
          margin={{ left: 75, bottom: 60 }}
          color="#74cdf5"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            barWidth={0.4}
            data={InningsData.inningsWiseStats}
            onValueMouseOver={val => this.setState({ matchesHoverBar: val })}
            onValueMouseOut={() => this.setState({ matchesHoverBar: false })}
          />
          {matchesHoverBar && (
            <Hint value={matchesHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Innings:{matchesHoverBar.innings}</span>
                <br />
                <span>Matches:{matchesHoverBar.matches}</span>
              </p>
            </Hint>
          )}
          <XAxis />
          <YAxis />
        </XYPlot>

        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={200}
          height={200}
          getX={d => d.innings}
          getY={d => d.centuries}
          margin={{ left: 75, bottom: 60 }}
          color="#74cdf5"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            barWidth={0.4}
            data={InningsData.inningsWiseStats}
            onValueMouseOver={val => this.setState({ centuriesHoverBar: val })}
            onValueMouseOut={() => this.setState({ centuriesHoverBar: false })}
          />
          {centuriesHoverBar && (
            <Hint value={centuriesHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Innings:{centuriesHoverBar.innings}</span>
                <br />
                <span>Centuries:{centuriesHoverBar.centuries}</span>
              </p>
            </Hint>
          )}
          <XAxis />
          <YAxis />
        </XYPlot>

        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={200}
          height={200}
          getX={d => d.innings}
          getY={d => d.runs}
          margin={{ left: 75, bottom: 60 }}
          color="#74cdf5"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            barWidth={0.4}
            data={InningsData.inningsWiseStats}
            onValueMouseOver={val => this.setState({ runsHoverBar: val })}
            onValueMouseOut={() => this.setState({ runsHoverBar: false })}
          />
          {runsHoverBar && (
            <Hint value={runsHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Innings:{runsHoverBar.innings}</span>
                <br />
                <span>Runs:{runsHoverBar.runs}</span>
              </p>
            </Hint>
          )}
          <XAxis />
          <YAxis />
        </XYPlot>

        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={200}
          height={200}
          getX={d => d.innings}
          getY={d => d.wins}
          margin={{ left: 75, bottom: 60 }}
          color="#74cdf5"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            barWidth={0.4}
            data={InningsData.inningsWiseStats}
            onValueMouseOver={val => this.setState({ winsHoverBar: val })}
            onValueMouseOut={() => this.setState({ winsHoverBar: false })}
          />
          {winsHoverBar && (
            <Hint value={winsHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Innings:{winsHoverBar.innings}</span>
                <br />
                <span>Wins:{winsHoverBar.wins}</span>
              </p>
            </Hint>
          )}
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}

export default Innings;
