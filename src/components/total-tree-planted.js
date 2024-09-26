import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

// Dummy data
const yearData = [
    { label: 'Jan', newUser: 5000, user: 1600 },
    { label: 'Feb', newUser: 8500, user: 2000 },
    { label: 'Mar', newUser: 7000, user: 3000 },
    { label: 'Apr', newUser: 5780, user: 3908 },
    { label: 'May', newUser: 4890, user: 2500 },
    { label: 'Jun', newUser: 8000, user: 3200 },
    { label: 'Jul', newUser: 4890, user: 2500 },
    { label: 'Aug', newUser: 3780, user: 3908 },
    { label: 'Sep', newUser: 7800, user: 2800 },
    { label: 'Oct', newUser: 5780, user: 1908 },
    { label: 'Nov', newUser: 4780, user: 1908 },
    { label: 'Dec', newUser: 7500, user: 3000 },
];

const weekData = [
    { label: 'Day 1', newUser: 100, user: 50 },
    { label: 'Day 2', newUser: 200, user: 100 },
    { label: 'Day 3', newUser: 150, user: 80 },
    { label: 'Day 4', newUser: 300, user: 120 },
    { label: 'Day 5', newUser: 250, user: 150 },
    { label: 'Day 6', newUser: 400, user: 180 },
    { label: 'Day 7', newUser: 350, user: 200 },
];

const monthData = [
    { label: 'Week 1', newUser: 1200, user: 600 },
    { label: 'Week 2', newUser: 1500, user: 800 },
    { label: 'Week 3', newUser: 1700, user: 900 },
    { label: 'Week 4', newUser: 2000, user: 1000 },
];

const StackedBarChart = () => {
    const [data, setData] = useState(yearData); // Default to yearData

    const handleClick = (dataType) => {
        switch (dataType) {
            case 'week':
                setData(weekData);
                break;
            case 'month':
                setData(monthData);
                break;
            case 'year':
                setData(yearData);
                break;
            default:
                setData(yearData);
        }
    };

    // Button styles
    const buttonStyle = {
        padding: '10px 20px',
        margin: '0 10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    // Card styling
    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '20px auto', // This centers the card and adds top and bottom margin
        maxWidth: '900px', // You can adjust this based on your layout
        marginLeft: '20px', // Left margin for spacing
        marginRight: '20px', // Right margin for spacing
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
            <div style={headerStyle}>Total Tree Planted</div>

            {/* Buttons to switch between week, month, and year */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                    onClick={() => handleClick('week')}
                >
                    Week
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                    onClick={() => handleClick('month')}
                >
                    Month
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                    onClick={() => handleClick('year')}
                >
                    Year
                </button>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="newUser" stackId="a" fill="#8884d8" name="New Users" />
                    <Bar dataKey="user" stackId="a" fill="#82ca9d" name="Existing Users" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StackedBarChart;