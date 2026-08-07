const express = require('express');
const router = express.Router();
const {getAllJobs,createJob,getJobById} = require('../controllers/job.controller')

router.get('/', getAllJobs);
router.post('/',createJob)
router.get('/:id',getJobById)

module.exports= router