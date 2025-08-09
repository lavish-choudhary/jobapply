const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

// Middleware
app.use(express.json());

// Database connection
const db = require('./config/db');
db();

// Routes
app.use('/api/jobs', jobRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});