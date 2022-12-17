const { Router } = require("express");
const { getJobs, addJobs } = require("../Controllers/productController");

const JobRouter = Router();

JobRouter.get("/", getJobs);
JobRouter.post("/addJobs", addJobs);
JobRouter.post('/sort')
JobRouter.post('/filter')

module.exports = {
  JobRouter,
};
