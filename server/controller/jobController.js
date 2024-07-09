const Job = require("../models/job"); // Assuming your job model is defined in a file named 'job.js' in the 'models' directory

// Fetch all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from MongoDB
    res.status(200).json(jobs); // Send JSON response with jobs array
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res
      .status(500)
      .json({ message: "Error fetching jobs", error: error.message });
  }
};

const getJobByUserId = async ({ params: { id } }, res) => {
  try {
    const job = await Job.find({ userId: id }); // Fetch job from MongoDB using the _id
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job); // Send JSON response with the job object
  } catch (error) {
    console.error("Error fetching job:", error);
    res
      .status(500)
      .json({ message: "Error fetching job", error: error.message });
  }
};

// Fetch a single job by _id
const getJobByJobId = async ({ params: { id } }, res) => {
  try {
    const job = await Job.findById(id); // Fetch job from MongoDB using the _id
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job); // Send JSON response with the job object
  } catch (error) {
    console.error("Error fetching job:", error);
    res
      .status(500)
      .json({ message: "Error fetching job", error: error.message });
  }
};

// Create a new job
const postJob = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the request body to see what is being sent to the server
    const {
      jobname,
      address,
      description,
      requirement,
      status,
      state,
      district,
      startSalary,
      endSalary,
      userId,
    } = req.body;

    // VALIDATION
    // Check if all required fields are provided
    if (
      !jobname ||
      !address ||
      !description ||
      !requirement ||
      !status ||
      !state ||
      !district ||
      !startSalary ||
      !endSalary
    ) {
      console.log("Validation error: Missing required fields"); // Log when a validation error occurs
      return res.status(400).json({ error: "All fields with * are required" });
    }
    // Create a new job
    const job = await Job.create({
      jobname,
      address,
      description,
      requirement,
      status,
      state,
      district,
      startSalary,
      endSalary,
      userId,
    });
    console.log("Job created successfully:", job); // Log the job object after it's created
    res.json(job); // Send the job object as a JSON response
  } catch (error) {
    console.log("Error in postJob:", error); // Log any errors that occur during the job posting process
    res.status(500).json({
      error: "An error occurred while posting the job",
      details: error.message,
    });
  }
};

// Delete a job by ID
const deleteJobById = async (req, res) => {
  const jobId = req.params.id;
  try {
    const result = await Job.findByIdAndDelete(jobId);
    if (result) {
      res.status(200).json({ message: "Job deleted successfully" });
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Test connectivity endpoint
function testConnectivityJob(req, res) {
  res.json({ message: "Job controller is connected" });
}

module.exports = {
  getAllJobs,
  getJobByUserId,
  getJobByJobId,
  postJob,
  deleteJobById,
  testConnectivityJob,
};
