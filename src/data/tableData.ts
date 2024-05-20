// src/salaryData.ts

export interface JobDetail {
    title: string;
    count: number;
}

export interface SalaryData {
    year: number;
    total_jobs: number;
    average_salary_usd: number;
    job_details: JobDetail[];
}

const data: SalaryData[] = [
    {
        year: 2020,
        total_jobs: 1500,
        average_salary_usd: 110000,
        job_details: [
            { title: 'ML Engineer', count: 800 },
            { title: 'Data Scientist', count: 500 },
            { title: 'AI Specialist', count: 200 },
        ],
    },
    {
        year: 2021,
        total_jobs: 1800,
        average_salary_usd: 115000,
        job_details: [
            { title: 'ML Engineer', count: 900 },
            { title: 'Data Scientist', count: 600 },
            { title: 'AI Specialist', count: 300 },
        ],
    },
    {
        year: 2022,
        total_jobs: 2100,
        average_salary_usd: 120000,
        job_details: [
            { title: 'ML Engineer', count: 1000 },
            { title: 'Data Scientist', count: 700 },
            { title: 'AI Specialist', count: 400 },
        ],
    },
    {
        year: 2023,
        total_jobs: 2500,
        average_salary_usd: 125000,
        job_details: [
            { title: 'ML Engineer', count: 1200 },
            { title: 'Data Scientist', count: 800 },
            { title: 'AI Specialist', count: 500 },
        ],
    },
    {
        year: 2024,
        total_jobs: 3000,
        average_salary_usd: 130000,
        job_details: [
            { title: 'ML Engineer', count: 1500 },
            { title: 'Data Scientist', count: 1000 },
            { title: 'AI Specialist', count: 500 },
        ],
    },
];

export default data;
