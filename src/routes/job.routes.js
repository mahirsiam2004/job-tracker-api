const express = require('express');
const router = express.Router();
const {getAllJobs,createJob,getJobById,updateJob,deleteJob} = require('../controllers/job.controller')
const validate = require("../middlewares/validate");
const { createJobSchema } = require("../validations/job.validation");

router.get('/', getAllJobs);
router.post("/", validate(createJobSchema), createJob);
router.get('/:id',getJobById)
router.patch('/:id',updateJob)
router.delete("/:id",deleteJob );

module.exports= router