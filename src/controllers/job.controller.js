const getAllJobs = (req,res)=>{
    res.send("all jobs");
};

const createJob = (req,res)=>{
    res.json({
        "message":" Job created successfully"
    })
}

module.exports={getAllJobs,createJob}