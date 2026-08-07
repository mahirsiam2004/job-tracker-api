const { ObjectId } = require("mongodb");
const { client } = require("../config/db");

const getJobsCollection = () => {
  return client.db("job_tracker").collection("jobs");
};

const createJob = async (jobData) => {
  const jobsCollection = getJobsCollection();

  const result = await jobsCollection.insertOne(jobData);

  return result;
};

const getAllJobs = async (search, status) => {
  const jobsCollection = getJobsCollection();

  let query = {};

  if (search) {
    query = {
      title: {
        $regex: search,
        $options: "i",
      },
    };
  }
  if (status) {
    query.status = status;
  }
  return await jobsCollection.find(query).toArray();
};


const  getJobByIdModel =async (id) =>{
    const jobsCollection = getJobsCollection();
const result = await jobsCollection.findOne({
  _id : new ObjectId(id)
})
return result;
}

module.exports = {
  createJob,
  getAllJobs,
  getJobByIdModel
};
