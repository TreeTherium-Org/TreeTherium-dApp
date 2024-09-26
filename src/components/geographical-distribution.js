import React from 'react';
import { Chart } from 'react-google-charts';

const GeographicalDistribution = () => {
    const data = [
        ['Country', 'Value'],
        ['United States', 40],
        ['Canada', 20],
        ['India', 15],
        ['China', 5],
        ['United Kingdom', 5],
        ['France', 5],
    ];
    

    const options = {
        colorAxis: { colors: ['#ffcccb', '#ff0000'] },
        backgroundColor: '#fff',
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5',
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.cardTitle}>Geographical Distribution Chart</h2>
            <div style={styles.chartContainer}>
                <Chart
                    chartType="GeoChart"
                    data={data}
                    options={options}
                    mapsApiKey="AIzaSyCIV9YVytAARkQZ1mLhzaauyJZqRC3anhc" // Replace with your Google Maps API Key
                    width="100%"
                    height="100%"
                    legendToggle
                />
            </div>
        </div>
    );
};

// Styling for the card
const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        margin: '20px',
        padding: '20px',
        backgroundColor: '#ffffff',
    },
    cardTitle: {
        margin: '0 0 20px',
        fontSize: '1.5em',
        textAlign: 'center',
    },
    chartContainer: {
        width: '100%',
        height: '400px', // Set the height of the chart
    },
};

export default GeographicalDistribution;