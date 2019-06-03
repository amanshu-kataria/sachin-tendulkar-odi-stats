import React from 'react';
import BowlingData from '../json/bowling.json';

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
        <span>Wickets:{payload[0].payload.wickets}</span>
      </p>
    );
  }

  return null;
};

function Bowling() {
  return (
    <div className="statShell">
      <div className="statsHeader">Wickets stats.</div>
      <div className="statsItem pieItem">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="wickets"
            isAnimationActive={false}
            data={BowlingData.wickets}
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
            As a part-time bowler, he dismissed many batsmen and broke many
            partnerships.
          </p>
          <p className="factsItem">He Took 29 wickets against Pakistan.</p>
          <p className="factsItem">21 against Sri Lanka.</p>
          <p className="factsItem">20 against Australia and West Indies.</p>
        </div>
      </div>
    </div>
  );
}

export default Bowling;
