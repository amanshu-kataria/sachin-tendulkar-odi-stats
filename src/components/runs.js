import React, { PureComponent } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  Hint,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

import VenueData from '../json/venue.json';
import RunsStats from '../json/runs.json';

class Runs extends PureComponent {
  state = {
    montlyRunsHoveredBar: false,
    yearlyRunsHoverBar: false,
    dateRunsHoverBar: false,
    oppositionRunsHoverBar: false,
    matchesHoverBar: false
  };

  render() {
    const {
      montlyRunsHoveredBar,
      yearlyRunsHoverBar,
      dateRunsHoverBar,
      oppositionRunsHoverBar,
      matchesHoverBar
    } = this.state;
    return (
      <div className="runStats">
        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={400}
          height={350}
          getX={d => d.month}
          getY={d => d.runs}
          margin={{ left: 75, bottom: 60 }}
          color="#00a3ec"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            data={RunsStats.monthWiseRuns}
            onValueMouseOver={val =>
              this.setState({ montlyRunsHoveredBar: val })
            }
            onValueMouseOut={() =>
              this.setState({ montlyRunsHoveredBar: false })
            }
          />
          {montlyRunsHoveredBar && (
            <Hint value={montlyRunsHoveredBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Month:{montlyRunsHoveredBar.month}</span>
                <br />
                <span>Runs:{montlyRunsHoveredBar.runs}</span>
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
          getX={d => d.year}
          getY={d => d.runs}
          margin={{ left: 75, bottom: 60 }}
          color="#009688"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            data={RunsStats.yearWiseRuns}
            onValueMouseOver={val => this.setState({ yearlyRunsHoverBar: val })}
            onValueMouseOut={() => this.setState({ yearlyRunsHoverBar: false })}
          />
          {yearlyRunsHoverBar && (
            <Hint value={yearlyRunsHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Year:{yearlyRunsHoverBar.year}</span>
                <br />
                <span>Runs:{yearlyRunsHoverBar.runs}</span>
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
          getX={d => d.date}
          getY={d => d.runs}
          margin={{ left: 75, bottom: 60 }}
          color="#64ad0f"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            data={RunsStats.dateWiseRuns}
            onValueMouseOver={val => this.setState({ dateRunsHoverBar: val })}
            onValueMouseOut={() => this.setState({ dateRunsHoverBar: false })}
          />
          {dateRunsHoverBar && (
            <Hint value={dateRunsHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Date:{dateRunsHoverBar.date}</span>
                <br />
                <span>Runs:{dateRunsHoverBar.runs}</span>
              </p>
            </Hint>
          )}
          <XAxis />
          <YAxis />
        </XYPlot>

        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={600}
          height={350}
          getX={d => d.opposition}
          getY={d => d.runs}
          margin={{ left: 75, bottom: 70 }}
          color="#ff9800"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            data={RunsStats.opponentWiseRuns}
            onValueMouseOver={val =>
              this.setState({ oppositionRunsHoverBar: val })
            }
            onValueMouseOut={() =>
              this.setState({ oppositionRunsHoverBar: false })
            }
          />
          {oppositionRunsHoverBar && (
            <Hint value={oppositionRunsHoverBar}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#181818',
                  opacity: '0.8',
                  padding: '2px'
                }}
              >
                <span>Opponent:{oppositionRunsHoverBar.opposition}</span>
                <br />
                <span>Runs:{oppositionRunsHoverBar.runs}</span>
              </p>
            </Hint>
          )}
          <XAxis tickLabelAngle={-45} />
          <YAxis />
        </XYPlot>

        <XYPlot
          className="xy-plot-runs"
          xType="ordinal"
          width={1200}
          height={500}
          getX={d => d.venue}
          getY={d => d.runs}
          margin={{ left: 75, bottom: 100 }}
          color="#74cdf5"
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <VerticalBarSeries
            barWidth={0.4}
            data={VenueData.groundsPlayed}
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
                <span>Venue:{matchesHoverBar.venue}</span>
                <br />
                <span>Matches:{matchesHoverBar.played}</span>
                <br />
                <span>Runs:{matchesHoverBar.runs}</span>
                <br />
                <span>Centuries:{matchesHoverBar.centuries}</span>
              </p>
            </Hint>
          )}
          <XAxis tickLabelAngle={-45} />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}

export default Runs;
