const express = require('express');
const router = express.Router();
const {getAllJobs} = require('../controllers/job.controller')

router.get('/', getAllJobs);

module.exports= router