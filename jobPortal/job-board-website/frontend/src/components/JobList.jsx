import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs');
                setJobs(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;