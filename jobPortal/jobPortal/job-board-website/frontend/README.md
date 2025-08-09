# Job Board Website

This project is a job board website built with React for the frontend and Node.js for the backend. It allows users to view job listings, apply for jobs, and manage job postings.

## Frontend

The frontend is developed using React. It provides a user-friendly interface for interacting with the job board.

### Installation

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

### Folder Structure

- `public/index.html`: The main HTML file for the React application.
- `src/App.jsx`: The main component that sets up routing and layout.
- `src/index.js`: The entry point for the React application.
- `src/components/JobList.jsx`: Component to display a list of job postings.
- `src/pages/Home.jsx`: The landing page component.

## Backend

The backend is built with Node.js and Express. It handles job-related requests and connects to a database.

### Installation

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

The API will be available at `http://localhost:5000`.

### API Endpoints

- `POST /jobs`: Create a new job posting.
- `GET /jobs`: Retrieve all job postings.
- `POST /jobs/apply`: Apply for a job.

## Database

This project supports either MongoDB or PostgreSQL. Ensure that the database is set up and configured in the `backend/src/config/db.js` file.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features.

## License

This project is licensed under the MIT License.