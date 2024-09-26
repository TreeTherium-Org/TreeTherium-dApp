import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data and Colors
const data = [
  { name: 'Individual', value: 2560 },
  { name: 'Groups', value: 2150 },
  { name: 'Organization', value: 2780 },
];
const COLORS = ['#B92E5D', '#6D1A36', '#D68585'];

const CustomPieChart = () => {
  // Card styling
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
  };

  const headerStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      {/* Header */}
      <div style={headerStyle}>User Distribution</div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
