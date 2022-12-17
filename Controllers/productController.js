const { JobModel } = require("../Models/Product.model");

const addJobs = async (req, res) => {
  const {
    company,
    city,
    location,
    role,
    level,
    contract,
    position,
    language,
  } = req.body;
  let jobExists;

  try {
    jobExists = await JobModel.find({ company: company, role: role });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "failed to add" });
  }

  if (jobExists.length > 0) {
    return res.status(500).json({ msg: "Task already present" });
  }

  const newJob = new JobModel({
    company,
    postedAt: new Date(),
    city,
    location,
    role,
    level,
    contract,
    position,
    language,
  });

  try {
    await newJob.save();
    return res.status(200).json(newJob);
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
};

const getJobs = async (req, res) => {
  let data;
  try {
    data = await JobModel.find();
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }

  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).json({ msg: "no data found" });
};

module.exports = {
  getJobs,
  addJobs,
};
