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
    <div className="runStats">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="wickets"
          isAnimationActive={true}
          data={BowlingData.wickets}
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

export default Bowling;
