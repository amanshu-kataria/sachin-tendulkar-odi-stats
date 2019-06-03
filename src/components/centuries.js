import React from 'react';
import CenturiesData from '../json/centuries.json';
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
        <span>Centuries:{payload[0].payload.centuries}</span>
      </p>
    );
  }

  return null;
};

class Centuries extends React.Component {
  state = {
    montlyCenturyHoveredBar: false,
    yearlyCenturiesHoverBar: false,
    montlyCenturiesHoverBar: false,
    dateWiseCenturiesHoverBar: false,
    winningCauseCenturiesOppHoverBar: false
  };

  render() {
    const {
      montlyCenturyHoveredBar,
      yearlyCenturiesHoverBar,
      dateWiseCenturiesHoverBar,
      winningCauseCenturiesOppHoverBar
    } = this.state;
    return (
      <div className="statShell">
        <div className="statsHeader">Month wise centuries.</div>
        <div className="statsItem">
          <XYPlot
            xType="ordinal"
            width={400}
            height={350}
            getX={d => d.month}
            getY={d => d.centuries}
            margin={{ left: 75, bottom: 60 }}
            color="#74cdf5"
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              data={CenturiesData.monthWiseCenturies}
              onValueMouseOver={val =>
                this.setState({ montlyCenturyHoveredBar: val })
              }
              onValueMouseOut={() =>
                this.setState({ montlyCenturyHoveredBar: false })
              }
            />
            {montlyCenturyHoveredBar && (
              <Hint value={montlyCenturyHoveredBar}>
                <p
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#181818',
                    opacity: '0.8',
                    padding: '2px'
                  }}
                >
                  <span>Month:{montlyCenturyHoveredBar.month}</span>
                  <br />
                  <span>Centuries:{montlyCenturyHoveredBar.centuries}</span>
                </p>
              </Hint>
            )}
            <XAxis tickLabelAngle={-45} />
            <YAxis />
          </XYPlot>
          <div className="graphFacts">
            <p className="factsItem">
              Except for July, he has scored century in every single month.
            </p>
            <p className="factsItem">
              He has scored most centuries(8) in month of March.
            </p>
          </div>
        </div>
        <div className="statsHeader">Opponent wise centuries.</div>
        <div className="statsItem pieItem">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="centuries"
              isAnimationActive={false}
              data={CenturiesData.opponentsWiseCenturies}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip content={CustomTooltip} />
          </PieChart>
          <div className="pieFacts">
            <p className="factsItem">
              He has scored centuries against almost every nation.
            </p>
            <p className="factsItem">
              He made 49 centuries in ODIs, the most by any player.
            </p>
            <p className="factsItem">
              He scored most centuries (9) against Australia.
            </p>
          </div>
        </div>
        <div className="statsHeader">Year wise centuries.</div>
        <div className="statsItem pieItem">
          <XYPlot
            xType="ordinal"
            width={600}
            height={350}
            getX={d => d.year}
            getY={d => d.centuries}
            margin={{ left: 75, bottom: 60 }}
            color="#009688"
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              data={CenturiesData.yearWiseCenturies}
              onValueMouseOver={val =>
                this.setState({ yearlyCenturiesHoverBar: val })
              }
              onValueMouseOut={() =>
                this.setState({ yearlyCenturiesHoverBar: false })
              }
            />
            {yearlyCenturiesHoverBar && (
              <Hint value={yearlyCenturiesHoverBar}>
                <p
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#181818',
                    opacity: '0.8',
                    padding: '2px'
                  }}
                >
                  <span>Year:{yearlyCenturiesHoverBar.year}</span>
                  <br />
                  <span>Centuries:{yearlyCenturiesHoverBar.centuries}</span>
                </p>
              </Hint>
            )}
            <XAxis tickLabelAngle={-45} />
            <YAxis />
          </XYPlot>
          <div className="pieFacts">
            <p className="factsItem">
              Scored centuries for 19 consecutive years.
            </p>
            <p className="factsItem">
              He made most centuries (9) in the year 1998.
            </p>
          </div>
        </div>
        <div className="statsHeader">Date wise centuries.</div>
        <div className="statsItem pieItem">
          <XYPlot
            xType="ordinal"
            width={600}
            height={350}
            getX={d => d.date}
            getY={d => d.centuries}
            margin={{ left: 75, bottom: 60 }}
            color="#009688"
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              data={CenturiesData.dateWiseCenturies}
              onValueMouseOver={val =>
                this.setState({ dateWiseCenturiesHoverBar: val })
              }
              onValueMouseOut={() =>
                this.setState({ dateWiseCenturiesHoverBar: false })
              }
            />
            {dateWiseCenturiesHoverBar && (
              <Hint value={dateWiseCenturiesHoverBar}>
                <p
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#181818',
                    opacity: '0.8',
                    padding: '2px'
                  }}
                >
                  <span>Date:{dateWiseCenturiesHoverBar.date}</span>
                  <br />
                  <span>Centuries:{dateWiseCenturiesHoverBar.centuries}</span>
                </p>
              </Hint>
            )}
            <XAxis />
            <YAxis />
          </XYPlot>
          <div className="pieFacts">
            <p className="factsItem">
              He scored century on almost every single date.
            </p>
            <p className="factsItem">
              He scored most centuries(4) on date 8 and 14.
            </p>
          </div>
        </div>
        <div className="statsHeader">Centuries made in winning cause.</div>
        <div className="statsItem pieItem">
          <XYPlot
            xType="ordinal"
            width={600}
            height={350}
            getX={d => d.opposition}
            getY={d => d.centuries}
            margin={{ left: 75, bottom: 70 }}
            color="#009688"
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <VerticalBarSeries
              data={CenturiesData.centuriesInWinningCause}
              onValueMouseOver={val =>
                this.setState({ winningCauseCenturiesOppHoverBar: val })
              }
              onValueMouseOut={() =>
                this.setState({ winningCauseCenturiesOppHoverBar: false })
              }
            />
            {winningCauseCenturiesOppHoverBar && (
              <Hint value={winningCauseCenturiesOppHoverBar}>
                <p
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#181818',
                    opacity: '0.8',
                    padding: '2px'
                  }}
                >
                  <span>
                    Opponent:{winningCauseCenturiesOppHoverBar.opposition}
                  </span>
                  <br />
                  <span>
                    Centuries:{winningCauseCenturiesOppHoverBar.centuries}
                  </span>
                </p>
              </Hint>
            )}
            <XAxis tickLabelAngle={-45} />
            <YAxis />
          </XYPlot>
          <div className="pieFacts">
            <p className="factsItem">He score 33 centuries in winning cause.</p>
            <p className="factsItem">
              Out of those 33 centuries, 7 came against came Australia in
              winning cause.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Centuries.propTypes = {};

export default Centuries;
