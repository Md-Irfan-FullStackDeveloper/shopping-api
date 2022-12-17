const { Router } = require("express");
const { getJobs, addJobs } = require("../Controllers/productController");

const JobRouter = Router();

JobRouter.get("/", getJobs);
JobRouter.post("/addJobs", addJobs);

module.exports = {
  JobRouter,
};
