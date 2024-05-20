import React, { useState } from 'react';
import data, { SalaryData, JobDetail } from '../data/tableData.ts';
import LineGraph from './LineGraph.tsx';
import "./SalaryTable.css"
import Chat from "./Chat";
const SalaryTable: React.FC = () => {
    const [sortedData, setSortedData] = useState<SalaryData[]>(data);
    const [sortColumn, setSortColumn] = useState<keyof SalaryData>('year');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    const handleSort = (column: keyof SalaryData) => {
        const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newDirection);
        setSortColumn(column);

        const sortedArray = [...sortedData].sort((a, b) => {
            if (a[column] > b[column]) {
                return newDirection === 'asc' ? 1 : -1;
            } else if (a[column] < b[column]) {
                return newDirection === 'asc' ? -1 : 1;
            } else {
                return 0;
            }
        });

        setSortedData(sortedArray);
    };

    const handleRowClick = (year: number) => {
        setSelectedYear(year);
    };

    const getJobDetailsForYear = (year: number): JobDetail[] => {
        const yearData = data.find(d => d.year === year);
        return yearData ? yearData.job_details : [];
    };

    return (
        <div>
            <h1>ML Engineer Salaries (2020-2024)</h1>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('year')}>Year</th>
                        <th onClick={() => handleSort('total_jobs')}>Number of Total Jobs</th>
                        <th onClick={() => handleSort('average_salary_usd')}>Average Salary (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row) => (
                        <tr key={row.year} onClick={() => handleRowClick(row.year)}>
                            <td>{row.year}</td>
                            <td>{row.total_jobs}</td>
                            <td>{row.average_salary_usd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedYear && (
                <div>
                    <h2>Job Titles for {selectedYear}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Number of Jobs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getJobDetailsForYear(selectedYear).map((job, index) => (
                                <tr key={index}>
                                    <td>{job.title}</td>
                                    <td>{job.count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <LineGraph />
            <Chat />
        </div>
    );
};

export default SalaryTable;
