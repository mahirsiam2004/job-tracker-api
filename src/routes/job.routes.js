const express = require('express');
const router = express.Router();
const {getAllJobs,createJob,getJobById,updateJob} = require('../controllers/job.controller')

router.get('/', getAllJobs);
router.post('/',createJob)
router.get('/:id',getJobById)
router.patch('/:id',updateJob)

module.exports= router