import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

// Dummy data
const NFTCreatedData = [
  { day: 'Sunday', sale: 2000, cost: 2400 },
  { day: 'Monday', sale: 3000, cost: 1398 },
  { day: 'Tuesday', sale: 2000, cost: 9800 },
  { day: 'Wednesday', sale: 2780, cost: 3908 },
  { day: 'Thursday', sale: 1890, cost: 4800 },
  { day: 'Friday', sale: 2390, cost: 3800 },
  { day: 'Saturday', sale: 3490, cost: 4300 },
];

const TREECirculatingData = [
  { day: 'Sunday', sale: 4000, cost: 2400 },
  { day: 'Monday', sale: 3000, cost: 1398 },
  { day: 'Tuesday', sale: 2000, cost: 9800 },
  { day: 'Wednesday', sale: 2780, cost: 3908 },
  { day: 'Thursday', sale: 1890, cost: 4800 },
  { day: 'Friday', sale: 2390, cost: 3800 },
  { day: 'Saturday', sale: 3490, cost: 4300 },
];

// Card component that renders total metric and a small bar chart
const MetricCard = ({ title, metric, data, fill }) => {
  return (
    <div style={cardStyle}>
      {/* Card Header */}
      <div style={headerStyle}>
        <h2>{title}</h2>
        <p style={{ fontSize: '24px', margin: 0 }}>{metric}</p>
      </div>

      {/* Small Bar Chart */}
      <div style={{ height: 150 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <Tooltip />
            <Bar dataKey="sale" fill={fill} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Main component rendering side by side cards
const SideBySideCards = () => {
  return (
    <div style={containerStyle}>
      {/* NFT Created Card */}
      <MetricCard
        title="Total NFT Created"
        metric={NFTCreatedData.reduce((acc, curr) => acc + curr.sale, 0).toLocaleString()}
        data={NFTCreatedData}
        fill="#048848"
      />

      {/* TREE Circulating Card */}
      <MetricCard
        title="TREE Circulating"
        metric={TREECirculatingData.reduce((acc, curr) => acc + curr.sale, 0).toLocaleString()}
        data={TREECirculatingData}
        fill="#015DE1"
      />
    </div>
  );
};

// Styles
const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Enable wrapping
    justifyContent: 'space-between', // Space between cards
    gap: '10px', // Space between cards
    margin: '20px',
  };
  
  const cardStyle = {
    flex: '1 1 48%', // Each card takes around 48% of the container width
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box', // Ensure padding doesn't affect the card size
    minWidth: '150px', // Set a minimum width to ensure proper display on very small screens
  };
  
  // Optional media queries (for minor adjustments on very small screens)
  const responsiveStyle = {
    '@media(max-width: 480px)': {
      containerStyle: {
        gap: '5px', // Reduce gap on very small screens
      },
      cardStyle: {
        flex: '1 1 100%', // Each card takes full width on ultra-small screens
      },
    },
  };
  

const headerStyle = {
  marginBottom: '20px',
  textAlign: 'center',
};

export default SideBySideCards;