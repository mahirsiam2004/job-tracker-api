const { client } = require("../config/db");

const getJobsCollection = () => {
  return client.db("job_tracker").collection("jobs");
};

const createJob = async (jobData) => {
  const jobsCollection = getJobsCollection();

  const result = await jobsCollection.insertOne(jobData);

  return result;
};

module.exports = {
  createJob,
};