const express = require("express");
const jobRoutes = require("./routes/job.routes");
const app = express();
app.use(express.json());

app.use("/api/v1/jobs", jobRoutes);

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

module.exports = app;
