// filepath: job-board-website/job-board-website/backend/src/controllers/jobController.js
const Job = require('../models/job');

// Create a new job posting
exports.createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all job postings
exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Apply for a job
exports.applyForJob = async (req, res) => {
    const { jobId, applicantData } = req.body;
    try {
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        // Logic to handle job application (e.g., save applicant data)
        res.status(200).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};