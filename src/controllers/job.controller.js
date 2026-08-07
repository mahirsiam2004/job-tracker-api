const {createJob:createJobModel} = require('../models/job.model')

const getAllJobs = (req,res)=>{
    res.send("all jobs");
};

const createJob = async (req,res)=>{
    const jobData = req.body;
    const result = await createJobModel(jobData);
    res.status(201).json({
        "message":"Job created to database"
    })
}

module.exports={getAllJobs,createJob}