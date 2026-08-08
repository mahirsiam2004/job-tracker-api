const { ObjectId } = require("mongodb");
const {
  createJob: createJobModel,
  getAllJobs: getJobsModel,
  getJobByIdModel,
  jobUpdate:jobUpdateModel,
} = require("../models/job.model");

const getAllJobs = async (req, res) => {
  const search = req.query.search;
  const status = req.query.status;

  const jobs = await getJobsModel(search, status);

  res.status(200).json({
    success: true,
    message: "Jobs fetched successfully",
    data: jobs,
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

const getJobById = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid job ID",
    });
  }
  const job = await getJobByIdModel(id);
  if (!job) {
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Job fetched successfully",
    data: job,
  });
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid job ID",
    });
  }
  const jobData = req.body;
  const result = jobUpdateModel(jobData);
  res.status(200).json({
    success: true,
    message: "Job updated successfully",
    data: jobData,
  });
};

module.exports = { getAllJobs, createJob, getJobById,updateJob };
