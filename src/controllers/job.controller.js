const {
  createJob: createJobModel,
  getAllJobs: getJobsModel,
} = require("../models/job.model");

const getAllJobs = async (req, res) => {
    const search = req.query.search;
    const status = req.query.status;

    const jobs = await getJobsModel(search,status);

    res.status(200).json({
        success: true,
        message: "Jobs fetched successfully",
        data: jobs
    });
};


const createJob = async (req, res) => {
  const jobData = req.body;
  const result = await createJobModel(jobData);
  res.status(201).json({
    success: true,
    message: "Job created successfully",
    data: result,
  });
};

module.exports = { getAllJobs, createJob };
