import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import data from '../data/tableData.ts';
import "./LineGraph.css";
Chart.register(...registerables);

const LineGraph: React.FC = () => {
    const years = data.map(d => d.year);
    const totalJobs = data.map(d => d.total_jobs);

    const chartData = {
        labels: years,
        datasets: [
            {
                label: 'Total Jobs',
                data: totalJobs,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <div className="line-graph-container">
            <h2>Job Trends (2020-2024)</h2>
            <div className="line-graph">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default LineGraph;
