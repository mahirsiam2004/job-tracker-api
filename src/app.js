const express = require('express');
const jobRoutes = require('./routes/job.routes')
const app = express();
app.use(express.json());

app.use("/api/v1/jobs", jobRoutes)


module.exports=app;