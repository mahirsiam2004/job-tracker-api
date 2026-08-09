const { ObjectId } = require("mongodb");
const {
  createJob: createJobModel,
  getAllJobs: getJobsModel,
  getJobByIdModel,
  jobUpdate: jobUpdateModel,
  deleteJob: deleteJobModel,
} = require("../models/job.model");

const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../errors/AppError");

const getAllJobs = asyncHandler(async (req, res) => {
  const search = req.query.search;
  const status = req.query.status;

  const jobs = await getJobsModel(search, status);

  res.status(200).json({
    success: true,
    message: "Jobs fetched successfully",
    data: jobs,
  });
});

const createJob = asyncHandler(async (req, res) => {
  const jobData = req.body;

  const result = await createJobModel(jobData);

  res.status(201).json({
    success: true,
    message: "Job created successfully",
    data: result,
  });
});

const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // if (!ObjectId.isValid(id)) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Invalid job ID",
  //   });
  // }

  if (!ObjectId.isValid(id)) {
    throw new AppError("Invalid job ID", 400);
  }

  const job = await getJobByIdModel(id);

  // if (!job) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "Job not found",
  //   });
  // }

  if (!job) {
    throw new AppError("Job not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Job fetched successfully",
    data: job,
  });
});

const updateJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    throw new AppError("Invalid job ID", 400);
  }

  const jobData = req.body;

  const result = await jobUpdateModel(id, jobData);

  if (result.matchedCount === 0) {
    throw new AppError("Job not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Job updated successfully",
    data: result,
  });
});

const deleteJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    throw new AppError("Invalid job ID", 400);
  }

  const result = await deleteJobModel(id);

  if (result.deletedCount === 0) {
    throw new AppError("Job not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Job deleted successfully",
  });
});

module.exports = { getAllJobs, createJob, getJobById, updateJob, deleteJob };
