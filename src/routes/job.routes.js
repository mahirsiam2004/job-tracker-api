const express = require('express');
const router = express.Router();
const {getAllJobs,createJob} = require('../controllers/job.controller')

router.get('/', getAllJobs);
router.post('/',createJob)

module.exports= router