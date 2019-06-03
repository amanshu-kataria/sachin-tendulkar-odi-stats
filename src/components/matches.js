import React from 'react';
import MatchesData from '../json/matches.json';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  Hint,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

class Matches extends React.Component {
  state = {
    montlyMatchesHoveredBar: false,
    opponentsMatchesHoveredBar: false,
    yearlyMatchesHoverBar: false,
    montlyCenturiesHoverBar: false,
    dateWiseCenturiesHoverBar: false,
    winningCauseCenturiesOppHoverBar: false
  };

  render() {
    const {
      montlyMatchesHoveredBar,
      opponentsMatchesHoveredBar,
      yearlyMatchesHoverBar
    } = this.state;
    return (
      <div className="statShell">
        <div className="statsHeader">Month wise matches played.</div>
        <div className="statsItem pieItem">
          <XYPlot
            xType="ordinal"
            width={400}
            height={350}
            getX={d => d.month}
            getY={d => d.matches}
            margin={{ left: 75, bottom: 60 }}
            color="#74cdf5"
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              data={MatchesData.monthWiseMatches}
              onValueMouseOver={val =>
                this.setState({ montlyMatchesHoveredBar: val })
              }
              onValueMouseOut={() =>
                this.setState({ montlyMatchesHoveredBar: false })
              }
            />
            {montlyMatchesHoveredBar && (
              <Hint value={montlyMatchesHoveredBar}>
                <p
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#181818',
                    opacity: '0.8',
                    padding: '2px'
                  }}
                >
                  <span>Month:{montlyMatchesHoveredBar.month}</span>
                  <br />
                  <span>Matches:{montlyMatchesHoveredBar.matches}</span>
                </p>
              </Hint>
            )}
            <XAxis tickLabelAngle={-45} />
            <YAxis />
          </XYPlot>
        </div>
        <div className="statsHeader">Year wise matches played.</div>
        <div className="statsItem pieItem">
          <XYPlot
            xType="ordinal"
            width={600}
            height={350}
            getX={d => d.year}
            getY={d => d.matches}
            margin={{ left: 75, bottom: 60 }}
            color="#009688"
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              data={MatchesData.yearWiseMatches}
              onValueMouseOver={val =>
                this.setState({ yearlyMatchesHoverBar: val })
              }
              onValueMouseOut={() =>
                this.setState({ yearlyMatchesHoverBar: false })
              }
            />
            {yearlyMatchesHoverBar && (
              <Hint value={yearlyMatchesHoverBar}>
                <p
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#181818',
                    opacity: '0.8',
                    padding: '2px'
                  }}
                >
                  <span>Year:{yearlyMatchesHoverBar.year}</span>
                  <br />
                  <span>Matches:{yearlyMatchesHoverBar.matches}</span>
                </p>
              </Hint>
            )}
            <XAxis tickLabelAngle={-45} />
            <YAxis />
          </XYPlot>
        </div>
        <div className="statsHeader">Opponent wise matches played.</div>
        <div className="statsItem pieItem">
          <XYPlot
            xType="ordinal"
            width={400}
            height={350}
            getX={d => d.opposition}
            getY={d => d.matches}
            margin={{ left: 75, bottom: 70 }}
            color="#74cdf5"
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              data={MatchesData.oppositionWiseMatches}
              onValueMouseOver={val =>
                this.setState({ opponentsMatchesHoveredBar: val })
              }
              onValueMouseOut={() =>
                this.setState({ opponentsMatchesHoveredBar: false })
              }
            />
            {opponentsMatchesHoveredBar && (
              <Hint value={opponentsMatchesHoveredBar}>
                <p
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#181818',
                    opacity: '0.8',
                    padding: '2px'
                  }}
                >
                  <span>Opponent:{opponentsMatchesHoveredBar.opposition}</span>
                  <br />
                  <span>Matches:{opponentsMatchesHoveredBar.matches}</span>
                </p>
              </Hint>
            )}
            <XAxis tickLabelAngle={-45} />
            <YAxis />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default Matches;
