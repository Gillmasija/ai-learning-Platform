import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

// Example data
const data = [
  { month: 'Jan', lessons: 0 },
  { month: 'Feb', lessons: 1 },
  { month: 'Mar', lessons: 1 },
  { month: 'Apr', lessons: 2 },
  { month: 'May', lessons: 2 },
  { month: 'Jun', lessons: 4 },
  { month: 'Jul', lessons: 5 },
  { month: 'Aug', lessons: 5 },
  { month: 'Sep', lessons: 7 },
  { month: 'Oct', lessons: 8 },
  { month: 'Nov', lessons: 10 },
  { month: 'Dec', lessons: 12 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '5px 10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      >
        <p>{`${payload[0].value} Lessons`}</p>
      </div>
    );
  }

  return null;
};

function CourseProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis hide /> {/* Hides the Y-axis labels */}
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="lessons"
          stroke="#4F8EF7"
          strokeWidth={3}
          dot={{ r: 6 }} // Increases the size of dots
          activeDot={{ r: 8 }} // Active dot size
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CourseProgressChart;
