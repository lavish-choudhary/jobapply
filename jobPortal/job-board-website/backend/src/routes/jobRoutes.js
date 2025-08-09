const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Route to create a new job
router.post('/jobs', jobController.createJob);

// Route to get all jobs
router.get('/jobs', jobController.getJobs);

// Route to apply for a job
router.post('/jobs/:id/apply', jobController.applyForJob);

module.exports = router;